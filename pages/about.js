import Layout from '../components/Layout'
import Counter from '../components/Counter'
import ImageSlider from '../components/ImageSlider'
import AnimatedSection from '../components/AnimatedSection'

export default function Page(){
  return (
    <Layout title="À propos">
      <AnimatedSection as="section" className="container mx-auto py-16 px-4 space-y-10">
        <h1 className="text-3xl font-bold mb-6">À propos de nous</h1>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Historique</h2>
          <p>Fondé en 2020, le Data Science Club s’est donné pour mission de populariser l’analyse de données et l’IA au sein de l’ENSA.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Objectifs</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Former les étudiants aux outils de la data</li>
            <li>Favoriser l’apprentissage collaboratif</li>
            <li>Concrétiser des projets innovants</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Valeurs</h2>
          <p>Innovation, apprentissage continu et entraide sont au cœur de notre fonctionnement.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Comité</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li><strong>Président :</strong> A. El Idrissi</li>
            <li><strong>Vice-présidente :</strong> B. Khadija</li>
            <li><strong>Trésorier :</strong> C. Yassine</li>
            <li><strong>Secrétaire :</strong> D. Salma</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Chiffres clés</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-dsccOrange">
                <Counter to={12} />
              </p>
              <p className="uppercase tracking-wide text-sm">Projets</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-dsccOrange">
                <Counter to={45} />
              </p>
              <p className="uppercase tracking-wide text-sm">Membres actifs</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1,2].map(n => (
            <div key={n} className="p-4 border rounded-lg hover:bg-tealBrand hover:text-white transition">
              “J’ai appris à collaborer et à innover grâce au club.”
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ils nous font confiance</h2>
          <ImageSlider images={[
            '/sponsors/google.svg',
            '/sponsors/amazon.svg',
            '/sponsors/microsoft.svg',
            '/sponsors/facebook.svg',
          ]} />
        </div>
      </AnimatedSection>
    </Layout>
  )
}
