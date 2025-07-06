import {useEffect, useState} from 'react'

export default function DarkModeToggle(){
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    if(enabled){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [enabled])

  return (
    <button onClick={() => setEnabled(!enabled)} className="ml-3 text-xl">
      {enabled ? '☀️' : '🌙'}
    </button>
  )
}
