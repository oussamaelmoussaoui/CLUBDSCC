import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'

export default function Page(){
  return (
    <Layout title="DatathonX">
      <AnimatedSection className="container mx-auto py-16 px-4 space-y-8" direction="up" delay={0.1}>
        <h1 className="text-3xl font-bold mb-6">DatathonX – 3e édition</h1>
        <p>La compétition annuelle dédiée aux passionnés de data. Étudiants, professionnels et chercheurs sont invités à collaborer sur des problématiques concrètes.</p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Domaines</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Santé</li>
            <li>Agriculture</li>
            <li>Environnement</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Planning</h2>
          <table className="table-auto text-left">
            <tbody>
              <tr><td className="pr-4 font-medium">Jour 1</td><td>Workshops et formation des équipes</td></tr>
              <tr><td className="pr-4 font-medium">Jour 2</td><td>Développement du projet et présentation finale</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Livrables</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rapport détaillé</li>
            <li>Code sur GitHub</li>
            <li>Slides de présentation</li>
            <li>Démo fonctionnelle</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Critères d’évaluation</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Qualité technique – 40%</li>
            <li>Innovation – 30%</li>
            <li>Présentation – 20%</li>
            <li>Impact réel – 10%</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(n => (<div key={n} className="h-32 bg-gray-200 rounded" />))}
        </div>

        <form className="max-w-md space-y-4" onSubmit={e => {e.preventDefault(); alert('Inscription envoyée!')}}>
          <h2 className="text-2xl font-semibold">Inscription prochaine édition</h2>
          <input required placeholder="Nom" className="border p-2 w-full rounded" />
          <input required type="email" placeholder="Email" className="border p-2 w-full rounded" />
          <button type="submit" className="bg-dsccOrange text-white px-4 py-2 rounded">Envoyer</button>
        </form>
      </AnimatedSection>
    </Layout>
  )
}
