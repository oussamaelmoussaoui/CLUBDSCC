import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'

export default function Page(){
  return (
    <Layout title="Contact">
      <AnimatedSection className="container mx-auto py-16 px-4 space-y-8" direction="right" delay={0.1}>
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <form className="max-w-md space-y-4" onSubmit={e => {e.preventDefault(); alert('Message envoyé!')}}>
          <input required placeholder="Nom" className="border p-2 w-full rounded" />
          <input required type="email" placeholder="Email" className="border p-2 w-full rounded" />
          <textarea required placeholder="Message" className="border p-2 w-full rounded h-32" />
          <button type="submit" className="bg-dsccOrange text-white px-4 py-2 rounded">Envoyer</button>
        </form>
        <div className="w-full h-64">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-6.852!3d33.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76bad1cd!2sENSA!5e0!3m2!1sfr!2sma!4v000000" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex gap-4">
          <a href="https://instagram.com/clubdscc" className="text-dsccGreen underline">Instagram</a>
          <a href="https://linkedin.com" className="text-dsccGreen underline">LinkedIn</a>
          <a href="https://github.com" className="text-dsccGreen underline">GitHub</a>
        </div>
      </AnimatedSection>
    </Layout>
  )
}
