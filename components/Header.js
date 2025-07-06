import Link from 'next/link'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle'
import { FaEnvelope } from 'react-icons/fa'

export default function Header(){
  return (
    <header className="sticky top-0 z-50 shadow-md backdrop-blur">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.png" alt="DSCC logo" width={40} height={40} className="bg-transparent" />
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm dark:text-white">
          <Link href="/about" className="hover:text-dsccGreen transition">À propos</Link>
          <Link href="/events" className="hover:text-dsccGreen transition">Événements</Link>
          <Link href="/projects" className="hover:text-dsccGreen transition">Projets</Link>
          <Link href="/datathonx" className="hover:text-dsccGreen transition">DatathonX</Link>
          <Link href="/team" className="hover:text-dsccGreen transition">Équipe</Link>
          <Link href="/resources" className="hover:text-dsccGreen transition">Ressources</Link>
          <Link href="/contact" className="flex items-center bg-orangeBrand text-white px-4 py-2 rounded hover:opacity-90 transition">
            <span>Contact</span>
            <FaEnvelope className="ml-1" />
          </Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}
