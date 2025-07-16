import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import ImageSlider from '../components/ImageSlider'
import Link from 'next/link'
import {
  FaUsers,
  FaRegClock,
  FaTrophy,
  FaArrowRight
} from 'react-icons/fa'

export default function Page() {
  const stats = [
    { icon: FaUsers, count: 120, label: 'Participants' },
    { icon: FaRegClock, count: 48, label: 'Heures de challenge' },
    { icon: FaTrophy, count: 3, label: 'Éditions' }
  ]
  const images = ["/datatthonx/Screenshot 2025-07-06 205518.png","/datatthonx/Screenshot 2025-07-06 205538.png","/datatthonx/Screenshot 2025-07-06 205607.png","/datatthonx/Screenshot 2025-07-06 205621.png","/datatthonx/Screenshot 2025-07-06 205642.png","/datatthonx/Screenshot 2025-07-06 205703.png","/datatthonx/Screenshot 2025-07-06 205734.png","/datatthonx/Screenshot 2025-07-06 205806.png","/datatthonx/Screenshot 2025-07-06 205826.png"]
  const winners = [
    {
      img:"/datatthonx/winner.png",
      prize:"5000 DH",
      rank: "1ère place"
    },
    {
      img:"/datatthonx/winner2.png",
      prize:"3000 DH",
      rank: "2ème place"
    },
    {
      img:"/datatthonx/winner3.png",
      prize:"2000 DH",
      rank: "3ème place"
    }];
  return (
    <Layout title="DatathonX">
      {/* Hero */}
      <section className="relative w-full h-96 md:h-[110vh] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/1.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">DatathonX</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            La compétition data science ouverte à tous les passionnés.
          </p>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="mx-auto grid sm:grid-cols-3 gap-8 max-w-5xl px-4">
          {stats.map((s, i) => (
            <Stat key={i} {...s} />
          ))}
        </div>
      </AnimatedSection>

      {/* Details */}
      <AnimatedSection className="py-20 bg-lightGray" direction="left">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3 max-w-5xl">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg hover:duration-150">
            <h2 className="text-2xl font-semibold mb-2">Domaines explorés</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Santé</li>
              <li>Agriculture</li>
              <li>Environnement</li>
              <li>Planning</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg hover:duration-150">
            <h2 className="text-2xl font-semibold mb-2">Planning</h2>
            <table className="table-auto text-left">
              <tbody>
                <tr>
                  <td className="pr-4 font-medium">Jour 1</td>
                  <td>Workshops et formation des équipes</td>
                </tr>
                <tr>
                  <td className="pr-4 font-medium">Jour 2</td>
                  <td>Développement et présentation finale</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg hover:duration-150">
            <h2 className="text-2xl font-semibold mb-2">Livrables attendus</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rapport détaillé</li>
              <li>Code source</li>
              <li>Slides de présentation</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Highlights */}
      <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4  max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">Éditions précédentes</h2>
          <ImageSlider images={images} />
        </div>
      </AnimatedSection>
      
      {/* Winners */}
      <AnimatedSection className="py-20 bg-white" direction="up">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">Palmarès 2025</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {winners.map((w, i) => (
              <div key={i} className="bg-lightGray p-4 rounded shadow text-center">
                <img
                  src={w.img}
                  alt={`winner ${i + 1}`}
                  className="h-40 w-full object-cover object-top rounded mb-4"
                />
                <p className="font-semibold text-lg text-dsccOrange">{w.prize}</p>
                <p className='text-base text-dsccGreen'>{w.rank}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Join call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Participez à la prochaine édition&nbsp;!</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Relevez des défis data en équipe et remportez de superbes prix.
        </p>
        <Link
          href="/contact"
          className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition"
        >
          <span>Nous contacter</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
}

function Stat({ icon: Icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-dsccGreen/10 text-dsccGreen rounded-full">
        <Icon size={32} />
      </div>
      <span className="text-4xl font-extrabold text-dsccGreen">
        <Counter to={count} duration={1200} />
      </span>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  )
}
