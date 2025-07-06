import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'

export default function Page(){
  return (
    <Layout title="Notre Équipe">
      <AnimatedSection className="container mx-auto py-16 px-4 space-y-8" direction="down" delay={0.1}>
        <h1 className="text-3xl font-bold mb-6">Notre Équipe</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map(m => (
            <div key={m.name} className="text-center">
              <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 bg-dsccGreen text-white transition" >{m.quote}</div>
              </div>
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Alumni & Ambassadeurs</h2>
          <p>Nos anciens membres continuent de partager leur expertise et de soutenir le club.</p>
        </div>
      </AnimatedSection>
    </Layout>
  )
}

const members = [
  {name:'A. El Idrissi', role:'Président', quote:'Toujours innover'},
  {name:'B. Khadija', role:'VP', quote:'Partage et entraide'},
  {name:'C. Yassine', role:'Trésorier', quote:'Rigueur et passion'},
  {name:'D. Salma', role:'Secrétaire', quote:'Organisation au top'},
]
