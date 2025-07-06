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

      {/* Resources */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Ressources pédagogiques</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cours et leçons</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><a href="https://drive.google.com/intro-python" className="text-dsccGreen underline">Introduction à Python (PDF)</a></li>
                  <li><a href="https://drive.google.com/ml-basics" className="text-dsccGreen underline">Machine Learning Basics (slides)</a></li>
                  <li><a href="https://drive.google.com/dataviz" className="text-dsccGreen underline">Atelier DataViz</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Programmes & codes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><a href="https://drive.google.com/python-scripts" className="text-dsccGreen underline">Scripts d'exemple Python</a></li>
                  <li><a href="https://drive.google.com/notebooks" className="text-dsccGreen underline">Notebooks Jupyter</a></li>
                  <li><a href="https://drive.google.com/dataviz-tableau" className="text-dsccGreen underline">Projet DataViz Tableau</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Outils recommandés</h2>
            <ul className="list-disc pl-5 max-w-xl mx-auto space-y-1">
              <li><a href="https://www.python.org/downloads/" className="text-dsccGreen underline">Python</a></li>
              <li><a href="https://code.visualstudio.com/" className="text-dsccGreen underline">Visual Studio Code</a></li>
              <li><a href="https://jupyter.org/install" className="text-dsccGreen underline">Jupyter Notebook</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Accès au Drive du Club</h2>
            <p className="mb-6 max-w-2xl mx-auto text-lg">Retrouvez toutes nos ressources partagées sur Google Drive.</p>
            <a href="https://drive.google.com/dscc" className="bg-dsccOrange text-white px-6 py-3 rounded inline-flex items-center gap-2 transition hover:bg-dsccGreen">
              <span>Ouvrir le Drive</span>
              <FaArrowRight />
            </a>
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
