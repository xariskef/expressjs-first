import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const username = cookieStore.get('username')?.value || ''
  const color = cookieStore.get('color')?.value || '#000000'

  return NextResponse.json({ username, color })
}

export async function POST(request: Request) {
  const { username, color } = await request.json()
  const cookieStore = cookies()

  if (username) {
    cookieStore.set('username', username, { path: '/' })
  }
  if (color) {
    cookieStore.set('color', color, { path: '/' })
  }

  return NextResponse.json({ ok: true })
}

