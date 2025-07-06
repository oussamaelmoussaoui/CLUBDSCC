import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Counter({ to = 0, duration = 1000 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    setCount(0)
    let current = 0
    const stepTime = Math.max(20, duration / to)
    const timer = setInterval(() => {
      current += 1
      if (current >= to) {
        current = to
        clearInterval(timer)
      }
      setCount(current)
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, to, duration])

  return <span ref={ref}>{count}+</span>
}
