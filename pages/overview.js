import Layout from '../components/Layout'
import ImageSlider from '../components/ImageSlider'
import AnimatedSection from '../components/AnimatedSection'

export default function Page(){
  const images = [
    '/IMG-20250215-WA0023.jpg',
    '/697d9375-ccee-489b-9f26-8d7f20f7b5c3%20(1).jpg',
    '/IMG-20250215-WA0007.jpg'
  ]

  return (
    <Layout title="Le Club">
      <AnimatedSection className="container mx-auto py-16 px-4 space-y-12" direction="up" delay={0.1}>
        <h1 className="text-3xl font-bold">Data Science Club ENSA</h1>
        <ImageSlider images={images} />

        <div>
          <h2 className="text-2xl font-semibold mb-2">À propos de nous</h2>
          <p>Fondé en 2020, le Data Science Club s’est donné pour mission de populariser l’analyse de données et l’IA au sein de l’ENSA.</p>
          <h3 className="text-xl font-semibold mt-4 mb-1">Objectifs</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Former les étudiants aux outils de la data</li>
            <li>Favoriser l’apprentissage collaboratif</li>
            <li>Concrétiser des projets innovants</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Événements & Activités</h2>
          <p className="mb-2">ML, IA, Python ou encore Git : nos ateliers pratiques permettent de maîtriser rapidement les outils essentiels.</p>
          <p className="mb-2">Nous invitons régulièrement des doctorants et professionnels pour échanger en direct.</p>
          <p>Des sessions courtes pour comprendre les bases de la data science et démarrer vos premiers projets.</p>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
