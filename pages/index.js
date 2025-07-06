import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home(){
  return (
    <Layout title="Accueil">
      <section className="bg-tealBrand text-white py-20">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <Image src="/logo.png" alt="DSCC" width={120} height={120} className="animate-bounce mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-2">L’innovation par la donnée</h1>
          <p className="mb-6 text-lg max-w-2xl">Bienvenue au Data Science Club de l’ENSA. Nous explorons l’IA et la data pour créer des projets à impact.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/events" className="bg-white text-tealBrand font-semibold px-6 py-3 rounded">Événements</Link>
            <Link href="/join" className="bg-orangeBrand text-white font-semibold px-6 py-3 rounded">Rejoindre</Link>
            <Link href="/contact" className="bg-white text-tealBrand font-semibold px-6 py-3 rounded">Contact</Link>
            <Link href="/datathonx" className="bg-orangeBrand text-white font-semibold px-6 py-3 rounded">DatathonX</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Découvrir</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Événements & Activités" link="/events" />
          <Card title="DatathonX" link="/datathonx" />
          <Card title="Projets" link="/projects" />
        </div>
      </section>
    </Layout>
  )
}

function Card({ title, link }){
  return (
    <Link href={link} className="border rounded-lg shadow p-6 hover:shadow-lg transition block text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>Explorer →</p>
    </Link>
  )
}
