import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Page() {
  const [driveLinks, setDriveLinks] = useState([])
  const [customLaureats, setCustomLaureats] = useState([])

  useEffect(() => {
    const storedDrives = localStorage.getItem('customDrives')
    if (storedDrives) setDriveLinks(JSON.parse(storedDrives))
    const storedLaureats = localStorage.getItem('customLaureats')
    if (storedLaureats) setCustomLaureats(JSON.parse(storedLaureats))
  }, [])

  const defaultDrives = [
    { title: 'Drive principal', link: 'https://drive.google.com/dscc' }
  ]
  const defaultLaureats = []
  const allDrives = [...defaultDrives, ...driveLinks]
  const laureats = [...defaultLaureats, ...customLaureats]
  return (
    <Layout title="Ressources">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/1.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Ressources</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Accédez directement à nos documents partagés sur Google Drive.</p>
        </div>
      </section>

      {/* Resources */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Outils recommandés</h2>
              <ul className="list-disc pl-5 space-y-1 max-w-md mx-auto md:mx-0">
                <li><a href="https://www.python.org/downloads/" className="text-dsccGreen underline">Python</a></li>
                <li><a href="https://code.visualstudio.com/" className="text-dsccGreen underline">Visual Studio Code</a></li>
                <li><a href="https://jupyter.org/install" className="text-dsccGreen underline">Jupyter Notebook</a></li>
              </ul>
            </div>
            <div className="bg-dsccGreen/5 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Accès aux Drives du Club</h2>
              <p className="mb-6">Retrouvez toutes nos ressources partagées sur Google Drive.</p>
              <ul className="space-y-2">
                {allDrives.map((d, i) => (
                  <li key={i}>
                    <a href={d.link} className="text-dsccGreen underline inline-flex items-center gap-2">
                      <span>{d.title}</span>
                      <FaArrowRight />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Laureats */}
      <AnimatedSection id="laureats" className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos lauréats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {laureats.map((l, i) => (
              <div key={i} className="text-center">
                <img
                  src={`https://unavatar.io/${encodeURIComponent(l.linkedin)}`}
                  alt={l.name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                />
                <p className="font-semibold">{l.name}</p>
                <a
                  href={l.linkedin}
                  className="text-sm text-dsccGreen underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Vous avez une ressource à partager&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">Contribuez à l'enrichissement de notre bibliothèque.</p>
        <Link href="/contact" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded inline-flex items-center gap-2 transition">
          <span>Nous contacter</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
}
