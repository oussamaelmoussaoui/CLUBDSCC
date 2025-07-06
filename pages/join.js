import Layout from '../components/Layout'

export default function Page(){
  return (
    <Layout title="Rejoindre">
      <section className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Rejoindre le Club</h1>
        <p className="mb-4">Tu souhaites explorer la data science avec nous ? Remplis le formulaire de contact et rejoins la communauté&nbsp;!</p>
        <a href="/contact" className="bg-orangeBrand text-white px-6 py-3 rounded">Contact</a>
      </section>
    </Layout>
  )
}
