import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home(){
  return (
    <Layout title="Accueil">
      <section className="bg-tealBrand text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Innovation through Data</h1>
          <p className="mb-8 text-lg">Data Science Club – ENSA</p>
          <div className="flex justify-center gap-4">
            <Link href="/events" className="bg-white text-tealBrand font-semibold px-6 py-3 rounded">Événements</Link>
            <Link href="/join" className="bg-orangeBrand text-white font-semibold px-6 py-3 rounded">Rejoindre</Link>
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
