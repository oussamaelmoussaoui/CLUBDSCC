import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import { FaEnvelope } from 'react-icons/fa'

export default function Page(){
  return (
    <Layout title="Rejoindre">
      <AnimatedSection className="container mx-auto py-16 px-4" direction="down" delay={0.1}>
        <h1 className="text-3xl font-bold mb-6">Rejoindre le Club</h1>
        <p className="mb-4">Tu souhaites explorer la data science avec nous ? Remplis le formulaire de contact et rejoins la communauté&nbsp;!</p>
        <a href="/contact" className="bg-dsccOrange text-white px-6 py-3 rounded inline-flex items-center gap-2">
          <span>Contact</span>
          <FaEnvelope />
        </a>
      </AnimatedSection>
    </Layout>
  )
}
