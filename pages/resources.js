import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'

export default function Page(){
  return (
    <Layout title="Ressources">
      <section className="relative w-full h-64 md:h-[300px] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/1.jpg)' }} />
        <div className="absolute inset-0 bg-dsccGreen/70" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold">Ressources</h1>
      </section>
      <AnimatedSection className="container mx-auto py-16 px-4 space-y-6" direction="right" delay={0.1}>
        <h1 className="text-3xl font-bold mb-6">Ressources</h1>
        <ul className="list-disc pl-5">
          <li><a href="/smartnews360.pdf" className="text-dsccGreen underline">Rapport SmartNews360</a></li>
          <li><a href="/datathonx-roadmap.pdf" className="text-dsccGreen underline">Feuille de route DatathonX</a></li>
        </ul>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tutoriels</h2>
          <p>Retrouvez nos guides pas-à-pas réalisés par les membres du club.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Documents internes</h2>
          <p>Accès réservé aux membres.</p>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
