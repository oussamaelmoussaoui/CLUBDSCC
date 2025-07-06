import Layout from '../components/Layout'

export default function Page(){
  return (
    <Layout title="Événements">
      <section className="container mx-auto py-16 px-4 space-y-10">
        <h1 className="text-3xl font-bold mb-6">Événements & Activités</h1>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Ateliers</h2>
          <p>ML, IA, Python ou encore Git : nos ateliers pratiques permettent de maîtriser rapidement les outils essentiels.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Lives Instagram</h2>
          <p>Nous invitons régulièrement des doctorants et professionnels pour échanger en direct. Replays disponibles sur nos réseaux.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sessions d’initiation</h2>
          <p>Des sessions courtes pour comprendre les bases de la data science et démarrer vos premiers projets.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(n => (
            <div key={n} className="h-32 bg-gray-200 rounded" />
          ))}
        </div>
        <p className="mt-4">Replays complets disponibles sur <a href="#" className="text-tealBrand underline">Instagram</a> et <a href="#" className="text-tealBrand underline">YouTube</a>.</p>
      </section>
    </Layout>
  )
}
