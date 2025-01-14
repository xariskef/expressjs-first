import { Server } from 'socket.io'
import { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from '../../../types/next'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const chatHistoryFile = path.join(process.cwd(), 'chatHistory.json')

if (!fs.existsSync(chatHistoryFile)) {
  fs.writeFileSync(chatHistoryFile, JSON.stringify([]))
}

let chatHistory = JSON.parse(fs.readFileSync(chatHistoryFile, 'utf-8'))

export async function GET(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server as any)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('A user connected')

      socket.emit('chat history', chatHistory)

      socket.on('chat message', (data) => {
        const message = { 
          name: data.name, 
          color: data.color, 
          message: data.message, 
          timestamp: new Date().toLocaleString() 
        }
        chatHistory.push(message)

        fs.writeFile(chatHistoryFile, JSON.stringify(chatHistory, null, 2), (err) => {
          if (err) {
            console.error('Error writing chat history:', err)
          }
        })

        io.emit('chat message', message)
      })

      socket.on('disconnect', () => {
        console.log('A user disconnected')
      })
    })
  }

  res.socket.server.io.emit('ping', new Date().toISOString())
  return new Response('Socket is running', { status: 200 })
}

