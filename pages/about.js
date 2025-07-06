import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import Image from 'next/image'
import ImageSlider from '../components/ImageSlider'
import Link from 'next/link'
import {
  FaProjectDiagram,
  FaUsers,
  FaRegCalendarAlt,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaHistory,
  FaArrowRight
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
        <div className="mx-auto grid sm:grid-cols-3 gap-8 max-w-5xl px-4">
          <Stat icon={FaProjectDiagram} count={14} label="Projets réalisés" />
          <Stat icon={FaUsers} count={80} label="Membres actifs" />
          <Stat icon={FaRegCalendarAlt} count={30} label="Événements" />
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

      {/* Mission & Vision */}
      <AnimatedSection className="py-20 bg-lightGray" direction="left">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <FaBullseye /> Notre mission
            </h2>
            <p className="max-w-3xl mx-auto text-lg">
              Promouvoir l'apprentissage de la science des données et favoriser
              une culture de partage au sein de l'ENSA. Nous croyons que la
              collaboration permet à chacun de développer son potentiel.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <FaRocket /> Notre vision
            </h2>
            <p className="max-w-3xl mx-auto text-lg">
              Démocratiser les outils de la data science et inspirer une
              nouvelle génération d'innovateurs capable de résoudre les
              défis de demain.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* History */}
      <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <FaHistory /> Un peu d'histoire
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8 text-center">
            Créé en 2020 par quelques passionnés, le club a grandi au fil des
            projets et des événements pour devenir aujourd'hui une communauté
            active et soudée.
          </p>
          <ImageSlider images={['/1.jpg','/2.jpg','/IMG-20250215-WA0007.jpg']} />
        </div>
      </AnimatedSection>

      {/* Activities */}
      <AnimatedSection className="py-20 bg-lightGray" direction="up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Ce que nous faisons</h2>
          <ul className="max-w-3xl mx-auto list-disc list-inside space-y-2 text-lg">
            <li>Organisation d'ateliers techniques et de formations</li>
            <li>Conférences avec des experts du domaine</li>
            <li>Participation à des compétitions et datathons</li>
            <li>Accompagnement de projets étudiants innovants</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* Join call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Envie de nous rejoindre&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Rejoignez la communauté et participez à l'aventure data science avec
          nous&nbsp;!
        </p>
        <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded inline-flex items-center gap-2 transition">
          <span>Rejoindre le club</span>
          <FaArrowRight />
        </Link>
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
