import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function Page() {
  return (
    <Layout title="Ressources">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/1.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Ressources</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Guides pratiques et documents à disposition de la communauté.</p>
        </div>
      </section>

      {/* Docs */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Documents publics</h2>
            <ul className="list-disc pl-5">
              <li><a href="/smartnews360.pdf" className="text-dsccGreen underline">Rapport SmartNews360</a></li>
              <li><a href="/datathonx-roadmap.pdf" className="text-dsccGreen underline">Feuille de route DatathonX</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Tutoriels</h2>
            <p>Retrouvez nos guides pas-à-pas réalisés par les membres du club.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Documents internes</h2>
            <p>Accès réservé aux membres.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Vous avez une ressource à partager&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">Contribuez à l'enrichissement de notre bibliothèque.</p>
        <Link href="/contact" className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded inline-flex items-center gap-2 transition">
          <span>Nous contacter</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
}
