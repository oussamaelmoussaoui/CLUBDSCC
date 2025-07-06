import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function Dashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [events, setEvents] = useState([])
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')
  const [evtTitle, setEvtTitle] = useState('')
  const [evtDate, setEvtDate] = useState('')
  const [evtLocation, setEvtLocation] = useState('')

  useEffect(() => {
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn')
    if (!loggedIn) {
      router.push('/admin1')
    } else {
      const storedProjects = localStorage.getItem('customProjects')
      if (storedProjects) setProjects(JSON.parse(storedProjects))
      const storedEvents = localStorage.getItem('customEvents')
      if (storedEvents) setEvents(JSON.parse(storedEvents))
    }
  }, [router])

  const addProject = (e) => {
    e.preventDefault()
    const newProj = { name, link, desc }
    const updated = [...projects, newProj]
    setProjects(updated)
    localStorage.setItem('customProjects', JSON.stringify(updated))
    setName('')
    setLink('')
    setDesc('')
  }

  const addEvent = (e) => {
    e.preventDefault()
    const newEvt = { title: evtTitle, date: evtDate, location: evtLocation }
    const updated = [...events, newEvt]
    setEvents(updated)
    localStorage.setItem('customEvents', JSON.stringify(updated))
    setEvtTitle('')
    setEvtDate('')
    setEvtLocation('')
  }

  const removeProject = (index) => {
    const updated = projects.filter((_, i) => i !== index)
    setProjects(updated)
    localStorage.setItem('customProjects', JSON.stringify(updated))
  }

  const removeEvent = (index) => {
    const updated = events.filter((_, i) => i !== index)
    setEvents(updated)
    localStorage.setItem('customEvents', JSON.stringify(updated))
  }

  const logout = () => {
    localStorage.removeItem('loggedIn')
    router.push('/admin1')
  }

  return (
    <Layout title="Dashboard">
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button onClick={logout} className="text-red-500 underline">Logout</button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Ajouter un projet</h2>
        <form onSubmit={addProject} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="GitHub link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <textarea
            className="border p-2 w-full rounded"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <button type="submit" className="bg-dsccGreen text-white px-4 py-2 rounded w-full">Add Project</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((p, i) => (
            <div key={i} className="border rounded p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm mb-2">{p.desc}</p>
              <a href={p.link} className="text-dsccGreen underline block mb-2">GitHub</a>
              <button onClick={() => removeProject(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Ajouter un rendez-vous</h2>
        <form onSubmit={addEvent} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Titre"
            value={evtTitle}
            onChange={(e) => setEvtTitle(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Date"
            value={evtDate}
            onChange={(e) => setEvtDate(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Lieu"
            value={evtLocation}
            onChange={(e) => setEvtLocation(e.target.value)}
            required
          />
          <button type="submit" className="bg-dsccGreen text-white px-4 py-2 rounded w-full">Add Event</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <div key={i} className="border rounded p-4">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm mb-2">{e.date} – {e.location}</p>
              <button onClick={() => removeEvent(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
