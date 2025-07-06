import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Link from 'next/link'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Page(){
  const [customProjects, setCustomProjects] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('customProjects')
    if (stored) setCustomProjects(JSON.parse(stored))
  }, [])

  const allProjects = [...projects, ...customProjects]

  return (
    <Layout title="Projets">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/2.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Nos projets</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Découvrez quelques réalisations menées par nos membres.
          </p>
        </div>
      </section>
      {/* Projects */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets du Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allProjects.map((p, idx) => (
              <ProjectCard key={idx} {...p} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Join call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Envie de contribuer&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Rejoignez le club et participez au développement de projets innovants.
        </p>
        <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded inline-flex items-center gap-2 transition">
          <span>Rejoindre le club</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
}

function ProjectCard({ name, link, desc, ownerName, ownerLinkedIn }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col justify-between bg-white">
      <div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm mb-6">{desc}</p>
      </div>
      <div className="flex items-center justify-between text-sm mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dsccGreen hover:text-dsccOrange flex items-center gap-1"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        {ownerLinkedIn && ownerName && (
          <a
            href={ownerLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dsccGreen hover:text-dsccOrange flex items-center gap-1"
          >
            <FaLinkedin />
            <span>{ownerName}</span>
          </a>
        )}
      </div>
    </div>
  )
}

const projects = [
  {
    name: 'SmartNews360',
    link: 'https://github.com/example/smartnews360',
    desc: 'Agrégation intelligente d’actualités.',
    ownerName: 'A. El Idrissi',
    ownerLinkedIn: 'https://www.linkedin.com/in/a-el-idrissi'
  },
  {
    name: 'DataViz ENSA',
    link: 'https://github.com/example/dataviz',
    desc: 'Tableau de bord interactif.',
    ownerName: 'B. Khadija',
    ownerLinkedIn: 'https://www.linkedin.com/in/b-khadija'
  },
  {
    name: 'IA & Santé',
    link: 'https://github.com/example/healthai',
    desc: 'Exploration de données médicales.',
    ownerName: 'C. Yassine',
    ownerLinkedIn: 'https://www.linkedin.com/in/c-yassine'
  }
]
