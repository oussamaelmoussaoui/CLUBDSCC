import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import { useState, useEffect } from 'react'

export default function Page(){
  const [customLaureats, setCustomLaureats] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('customLaureats')
    if (stored) setCustomLaureats(JSON.parse(stored))
  }, [])

  const laureats = [...defaultLaureats, ...customLaureats]

  return (
    <Layout title="Laureats">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/1.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Nos lauréats</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Ils ont marqué l\'histoire du club.</p>
        </div>
      </section>
      {/* Laureats */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {laureats.map((l, i) => (
              <div key={i} className="text-center">
                <img
                  src={`https://unavatar.io/${encodeURIComponent(l.linkedin)}`}
                  alt={l.name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
                />
                <p className="font-semibold">{l.name}</p>
                <a href={l.linkedin} className="text-sm text-dsccGreen underline" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  )
}

const defaultLaureats = []
