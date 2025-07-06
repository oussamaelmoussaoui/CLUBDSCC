import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import Image from 'next/image'
import {
  FaProjectDiagram,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaHandshake
} from 'react-icons/fa'

export default function Page() {
  return (
    <Layout title="À propos">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url(/1.jpg)' }}
        />
        <div className="absolute inset-0 bg-dsccGreen/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">À propos du club</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Depuis 2020, nous réunissons les passionnés de données pour apprendre et innover ensemble.
          </p>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="mx-auto grid sm:grid-cols-2 gap-8 max-w-5xl px-4">
          <Stat icon={FaProjectDiagram} count={14} label="Projets réalisés" />
          <Stat icon={FaUsers} count={80} label="Membres actifs" />
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-20 bg-lightGray" direction="left">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Objective icon={FaLightbulb} title="Innovation" />
            <Objective icon={FaRocket} title="Apprentissage" />
            <Objective icon={FaHandshake} title="Collaboration" />
          </div>
        </div>
      </AnimatedSection>

      {/* Trust */}
      <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ils nous font confiance</h2>
          <div className="overflow-hidden">
            <div className="flex flex-nowrap items-center gap-10 w-max slide-left">
              {Array.from({ length: 20 }, (_, i) => {
                const logos = [
                  '/sponsors/google.svg',
                  '/sponsors/microsoft.svg',
                  '/sponsors/amazon.svg',
                  '/sponsors/facebook.svg'
                ]
                const src = logos[i % logos.length]
                return <IconTrust key={i} src={src} />
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  )
}

function Objective({ icon: Icon, title }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-dsccOrange text-5xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

function IconTrust({ src }) {
  return (
    <div className="p-6 bg-white shadow rounded-2xl flex items-center justify-center">
      <Image src={src} alt="logo" width={64} height={64} className="w-16 h-16 object-contain" />
    </div>
  )
}

function Stat({ icon: Icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-dsccGreen/10 text-dsccGreen rounded-full">
        <Icon size={32} />
      </div>
      <span className="text-4xl font-extrabold text-dsccGreen">
        <Counter to={count} duration={1200} />
      </span>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  )
}
