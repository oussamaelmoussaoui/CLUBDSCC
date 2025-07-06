import {useEffect, useState} from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

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
    <button
      onClick={() => setEnabled(!enabled)}
      className="ml-3 p-2 rounded-full bg-dsccGreen/10 hover:bg-dsccGreen/20 transition-colors text-2xl"
    >
      {enabled ? (
        <FaSun className="text-dsccOrange" />
      ) : (
        <FaMoon className="text-dsccGreen" />
      )}
    </button>
  )
}
