'use client'

import { useState, useEffect } from 'react'

interface Session {
  username: string
  color: string
}

export function useSession() {
  const [session, setSession] = useState<Session>({ username: '', color: '' })

  useEffect(() => {
    fetchSession()
  }, [])

  const fetchSession = async () => {
    const response = await fetch('/api/session')
    if (response.ok) {
      const data = await response.json()
      setSession(data)
    }
  }

  const updateSession = async (newSession: Partial<Session>) => {
    const response = await fetch('/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSession)
    })
    if (response.ok) {
      setSession(prev => ({ ...prev, ...newSession }))
    }
  }

  return { session, updateSession }
}

