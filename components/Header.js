import Link from 'next/link'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle'

export default function Header(){
  return (
    <header className="bg-white dark:bg-darkText shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.png" alt="DSCC logo" width={40} height={40}/>
            <span className="font-bold text-tealBrand text-xl">DSCC</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm dark:text-white">
          <Link href="/about" className="hover:text-tealBrand transition">À propos</Link>
          <Link href="/events" className="hover:text-tealBrand transition">Événements</Link>
          <Link href="/projects" className="hover:text-tealBrand transition">Projets</Link>
          <Link href="/datathonx" className="hover:text-tealBrand transition">DatathonX</Link>
          <Link href="/team" className="hover:text-tealBrand transition">Équipe</Link>
          <Link href="/resources" className="hover:text-tealBrand transition">Ressources</Link>
          <Link href="/contact" className="bg-orangeBrand text-white px-4 py-2 rounded hover:opacity-90 transition">Contact</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}
