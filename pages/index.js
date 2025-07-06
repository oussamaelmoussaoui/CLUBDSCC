import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home(){
  return (
    <Layout title="Accueil">
      <section className="bg-gradient-to-br from-tealBrand to-orangeBrand text-white py-24 shadow-inner">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <Image src="/logo.png" alt="DSCC" width={120} height={120} className="animate-bounce mb-6 drop-shadow-lg" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">L’innovation par la donnée</h1>
          <p className="mb-8 text-lg max-w-2xl">Bienvenue au Data Science Club de l’ENSA. Nous explorons l’IA et la data pour créer des projets à impact.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/events" className="bg-white/90 text-tealBrand font-semibold px-6 py-3 rounded shadow hover:shadow-lg flex items-center">
              Événements<span className="ml-2">📅</span>
            </Link>
            <Link href="/join" className="bg-orangeBrand text-white font-semibold px-6 py-3 rounded shadow hover:shadow-lg flex items-center">
              Rejoindre<span className="ml-2">🚀</span>
            </Link>
            <Link href="/contact" className="bg-white/90 text-tealBrand font-semibold px-6 py-3 rounded shadow hover:shadow-lg flex items-center">
              Contact<span className="ml-2">✉️</span>
            </Link>
            <Link href="/datathonx" className="bg-orangeBrand text-white font-semibold px-6 py-3 rounded shadow hover:shadow-lg flex items-center">
              DatathonX<span className="ml-2">⚡</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Découvrir</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Événements & Activités" link="/events" icon="🎉" />
          <Card title="DatathonX" link="/datathonx" icon="🚀" />
          <Card title="Projets" link="/projects" icon="💡" />
        </div>
      </section>
    </Layout>
  )
}

function Card({ title, link, icon }){
  return (
    <Link href={link} className="border rounded-xl shadow-md hover:shadow-xl transition block text-center p-6 bg-white/70 dark:bg-darkText/20 backdrop-blur">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-tealBrand">Explorer →</p>
    </Link>
  )
}
