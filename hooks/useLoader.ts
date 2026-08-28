'use client'

import { useState, useEffect } from 'react'

export function useLoader(delay: number = 1500) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return loading
}