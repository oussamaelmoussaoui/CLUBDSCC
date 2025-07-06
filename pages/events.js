import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import ImageSlider from '../components/ImageSlider'
import Link from 'next/link'
import {
  FaRegCalendarAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaArrowRight,
  FaCalendarCheck
} from 'react-icons/fa'

export default function Page() {
  const upcoming = [
    { title: 'Atelier Python avancé', date: '15 juin 2024', location: 'Salle 101' },
    { title: 'Conférence IA éthique', date: '28 juin 2024', location: 'Amphi A' },
    { title: 'Hackathon Data4Good', date: '10 juillet 2024', location: 'ENSA' }
  ]
  const images = ['/1.jpg', '/2.jpg', '/IMG-20250215-WA0007.jpg']
  return (
    <Layout title="Événements">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-[400px] overflow-hidden flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url(/2.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dsccGreen/70 to-dsccOrange/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Nos événements</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Ateliers, conférences et hackathons rythment l'année pour rassembler la communauté.
          </p>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="mx-auto grid sm:grid-cols-4 gap-8 max-w-5xl px-4">
          <Stat icon={FaRegCalendarAlt} count={30} label="Événements" />
          <Stat icon={FaUsers} count={1500} label="Participants" />
          <Stat icon={FaChalkboardTeacher} count={45} label="Intervenants" />
          <Stat icon={FaCalendarCheck} count={4} label="Éditions" />
        </div>
      </AnimatedSection>

      {/* Upcoming */}
      <AnimatedSection className="py-20 bg-lightGray" direction="left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Prochains rendez-vous</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {upcoming.map((e, i) => (
              <div key={i} className="p-4 bg-white rounded shadow">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaRegCalendarAlt className="text-dsccOrange" /> {e.title}
                </h3>
                <p className="text-gray-600">
                  {e.date} – {e.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Highlights */}
      <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Moments forts</h2>
          <ImageSlider images={images} />
        </div>
      </AnimatedSection>

      {/* Join call */}
      <AnimatedSection className="py-20 bg-dsccGreen text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Participez à nos prochains événements&nbsp;!</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Rejoignez-nous et vivez l'expérience data avec la communauté.
        </p>
        <Link
          href="/join"
          className="bg-white text-dsccGreen hover:bg-dsccOrange hover:text-white px-6 py-3 rounded inline-flex items-center gap-2 transition"
        >
          <span>Rejoindre le club</span>
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
