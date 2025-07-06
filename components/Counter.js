import { useState, useEffect } from 'react'

export default function Counter({ to = 0, duration = 1000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
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
  }, [to, duration])

  return <span>{count}</span>
}
