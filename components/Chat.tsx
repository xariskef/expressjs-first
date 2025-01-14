'use client'

import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import { useSession } from '../lib/session'

let socket

export default function Chat() {
  const [username, setUsername] = useState('')
  const [color, setColor] = useState('#000000')
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [showSetup, setShowSetup] = useState(true)
  const messagesRef = useRef(null)
  const { session, updateSession } = useSession()

  useEffect(() => {
    if (session.username) {
      setUsername(session.username)
      setColor(session.color || '#000000')
      setShowSetup(false)
    }
  }, [session])

  useEffect(() => {
    socketInitializer()
    return () => {
      if (socket) socket.disconnect()
    }
  }, [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('chat message', (msg) => {
      setChatHistory((prev) => [...prev, msg])
    })

    socket.on('chat history', (history) => {
      setChatHistory(history)
    })
  }

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [chatHistory])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      socket.emit('chat message', { name: username, color, message: message.trim() })
      setMessage('')
    }
  }

  const handleStartChat = async () => {
    if (!username.trim()) {
      alert('Please enter your name.')
      return
    }

    await updateSession({ username, color })
    setShowSetup(false)
  }

  return (
    <div className="chat-container max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Zlack</h1>

      <div ref={messagesRef} className="h-96 overflow-y-auto mb-4 p-2 border rounded">
        {chatHistory.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong style={{ color: msg.color }}>{msg.name}</strong>: {msg.message}{' '}
            <em className="text-xs">({msg.timestamp})</em>
          </div>
        ))}
      </div>

      {showSetup ? (
        <div className="user-setup flex gap-2 mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="color"
            className="p-1 border rounded"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleStartChat}
          >
            Start Chat
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-grow p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
            Send
          </button>
        </form>
      )}
    </div>
  )
}

