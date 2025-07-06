import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'

export default function Page(){
  return (
    <Layout title="Projets">
      <section className="relative w-full h-64 md:h-[300px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/2.jpg)' }} />
        <div className="absolute inset-0 bg-dsccGreen/70" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold">Projets</h1>
      </section>
      <AnimatedSection className="container mx-auto py-16 px-4" direction="left" delay={0.1}>
        <h1 className="text-3xl font-bold mb-8">Projets du Club</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.name} href={p.link} className="border rounded-lg p-6 shadow hover:shadow-lg transition block">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm mb-4">{p.desc}</p>
              <span className="text-dsccGreen underline">GitHub</span>
            </a>
          ))}
        </div>
      </AnimatedSection>
    </Layout>
  )
}

const projects = [
  { name: 'SmartNews360', link: 'https://github.com/example/smartnews360', desc: 'Agrégation intelligente d’actualités.' },
  { name: 'DataViz ENSA', link: 'https://github.com/example/dataviz', desc: 'Tableau de bord interactif.' },
  { name: 'IA & Santé', link: 'https://github.com/example/healthai', desc: 'Exploration de données médicales.' },
]
