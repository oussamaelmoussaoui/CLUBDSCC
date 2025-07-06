
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import { FaRegCalendarAlt, FaUserPlus, FaRocket, FaLightbulb, FaHandshake, FaCodeBranch } from 'react-icons/fa';

export default function Home() {
  const slides = ['/hero1.jpg','/hero2.jpg','/hero3.jpg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Layout title="Accueil">
      {/* Hero */}
      <AnimatedSection
        as="section"
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[index]})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">L’innovation par la donnée</h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-8">
            Le Club Data Science de l’ENSA s’engage à promouvoir l’apprentissage,
            l’innovation et la collaboration autour de la science des données.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/events" className="bg-dsccOrange hover:bg-white hover:text-dsccOrange text-white font-semibold px-6 py-3 rounded-md transition">
              Nos Événements
            </Link>
            <Link href="/join" className="bg-white text-dsccGreen hover:bg-dsccGreen hover:text-white font-semibold px-6 py-3 rounded-md transition">
              Rejoindre le Club
            </Link>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection as="section" id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">À propos du club</h2>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Le Club Data Science a pour mission de fournir un environnement d’apprentissage,
            d’entraide et d’innovation dans le domaine de la science des données.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Objective icon={FaLightbulb} title="Innovation"/>
            <Objective icon={FaRocket} title="Apprentissage"/>
            <Objective icon={FaHandshake} title="Collaboration"/>
          </div>
        </div>
      </AnimatedSection>

      {/* Events Preview */}
      <AnimatedSection as="section" id="events" className="py-20 bg-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Événements</h2>
          <div className="masonry">
            <EventCard img="/event1.jpg" title="Atelier Machine Learning" tag="Atelier" />
            <EventCard img="/event2.jpg" title="Introduction à Python" tag="Session" />
            <EventCard img="/event3.jpg" title="Live IA" tag="Live" />
            <EventCard img="/event4.jpg" title="Initiation DataViz" tag="Atelier" />
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="text-dsccGreen underline hover:text-dsccOrange">Voir tous les événements →</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Preview */}
      <AnimatedSection as="section" id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets du Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard icon="/icons/reco.png" title="Système de Recommandation" />
            <ProjectCard icon="/icons/nlp.png" title="Analyse des Sentiments" />
            <ProjectCard icon="/icons/forecast.png" title="Prédiction de Ventes" />
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="text-dsccGreen underline hover:text-dsccOrange">Voir tous les projets →</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Preview */}
      <AnimatedSection as="section" id="team" className="py-20 bg-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Équipe actuelle</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <TeamCard img="/team/jawad.jpg" name="Jawad Elkharrati" role="Président" />
            <TeamCard img="/team/asmaa.jpg" name="Asmaa Ben Ali" role="Vice‑présidente" />
            <TeamCard img="/team/hamza.jpg" name="Hamza Ouali" role="Secrétaire" />
            <TeamCard img="/team/aya.jpg" name="Aya Karim" role="Trésorière" />
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="text-dsccGreen underline hover:text-dsccOrange">Découvrir toute l’équipe →</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection as="section" id="contact" className="py-20 bg-dsccGreen text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="mb-8">Une question ? Un projet ? Envoyez‑nous un message !</p>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto grid grid-cols-1 gap-4">
            <input type="text" name="name" placeholder="Nom" className="p-3 rounded-md text-darkText" required />
            <input type="email" name="email" placeholder="Email" className="p-3 rounded-md text-darkText" required />
            <textarea name="message" placeholder="Message" rows="4" className="p-3 rounded-md text-darkText" required />
            <button className="bg-dsccOrange hover:bg-white hover:text-dsccOrange font-semibold py-3 rounded-md transition">Envoyer</button>
          </form>
        </div>
      </AnimatedSection>
    </Layout>
  )
}

function Objective({ icon: Icon, title }){
  return (
    <div className="flex flex-col items-center">
      <div className="text-dsccOrange text-5xl mb-4"><Icon /></div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

function EventCard({ img, title, tag }){
  return (
    <div className="masonry-item bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
      <Image src={img} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs uppercase tracking-wider text-dsccOrange">{tag}</span>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
    </div>
  )
}

function ProjectCard({ icon, title }){
  return (
    <div className="bg-lightGray rounded-xl p-6 text-center shadow hover:shadow-lg transition">
      <Image src={icon} alt={title} width={64} height={64} className="mx-auto mb-4" />
      <h4 className="font-semibold">{title}</h4>
    </div>
  )
}

function TeamCard({ img, name, role }){
  return (
    <div className="text-center">
      <Image src={img} alt={name} width={120} height={120} className="rounded-full mx-auto mb-3 object-cover" />
      <h5 className="font-semibold">{name}</h5>
      <p className="text-sm text-dsccOrange">{role}</p>
    </div>
  )
}
