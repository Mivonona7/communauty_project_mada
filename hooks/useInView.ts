'use client'

import { useRef, useEffect, useState } from 'react'

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect()
      }
    }, options)

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}