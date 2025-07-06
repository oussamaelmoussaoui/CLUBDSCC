import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function Dashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [events, setEvents] = useState([])
  const [drives, setDrives] = useState([])
  const [laureats, setLaureats] = useState([])
  const [messages, setMessages] = useState([])
  const [laureatName, setLaureatName] = useState('')
  const [laureatLinkedIn, setLaureatLinkedIn] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')
  const [evtTitle, setEvtTitle] = useState('')
  const [evtDate, setEvtDate] = useState('')
  const [evtLocation, setEvtLocation] = useState('')
  const [driveTitle, setDriveTitle] = useState('')
  const [driveLink, setDriveLink] = useState('')

  useEffect(() => {
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn')
    if (!loggedIn) {
      router.push('/admin1')
    } else {
      const storedProjects = localStorage.getItem('customProjects')
      if (storedProjects) setProjects(JSON.parse(storedProjects))
      const storedEvents = localStorage.getItem('customEvents')
      if (storedEvents) setEvents(JSON.parse(storedEvents))
      const storedDrives = localStorage.getItem('customDrives')
      if (storedDrives) setDrives(JSON.parse(storedDrives))
      const storedLaureats = localStorage.getItem('customLaureats')
      if (storedLaureats) setLaureats(JSON.parse(storedLaureats))
      const storedMessages = localStorage.getItem('contactMessages')
      if (storedMessages) setMessages(JSON.parse(storedMessages))
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

  const addDrive = (e) => {
    e.preventDefault()
    const newDrive = { title: driveTitle, link: driveLink }
    const updated = [...drives, newDrive]
    setDrives(updated)
    localStorage.setItem('customDrives', JSON.stringify(updated))
    setDriveTitle('')
    setDriveLink('')
  }

  const addLaureat = (e) => {
    e.preventDefault()
    const newL = { name: laureatName, linkedin: laureatLinkedIn }
    const updated = [...laureats, newL]
    setLaureats(updated)
    localStorage.setItem('customLaureats', JSON.stringify(updated))
    setLaureatName('')
    setLaureatLinkedIn('')
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

  const removeDrive = (index) => {
    const updated = drives.filter((_, i) => i !== index)
    setDrives(updated)
    localStorage.setItem('customDrives', JSON.stringify(updated))
  }

  const removeLaureat = (index) => {
    const updated = laureats.filter((_, i) => i !== index)
    setLaureats(updated)
    localStorage.setItem('customLaureats', JSON.stringify(updated))
  }

  const removeMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index)
    setMessages(updated)
    localStorage.setItem('contactMessages', JSON.stringify(updated))
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

        <h2 className="text-2xl font-semibold my-4">Ajouter un Drive</h2>
        <form onSubmit={addDrive} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Titre du Drive"
            value={driveTitle}
            onChange={(e) => setDriveTitle(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Lien"
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
            required
          />
          <button type="submit" className="bg-dsccGreen text-white px-4 py-2 rounded w-full">Add Drive</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {drives.map((d, i) => (
            <div key={i} className="border rounded p-4 flex justify-between items-center">
              <a href={d.link} className="text-dsccGreen underline">{d.title}</a>
              <button onClick={() => removeDrive(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold my-4">Ajouter un Lauréat</h2>
        <form onSubmit={addLaureat} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Nom"
            value={laureatName}
            onChange={(e) => setLaureatName(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Lien LinkedIn"
            value={laureatLinkedIn}
            onChange={(e) => setLaureatLinkedIn(e.target.value)}
            required
          />
          <button type="submit" className="bg-dsccGreen text-white px-4 py-2 rounded w-full">Add Laureat</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {laureats.map((l, i) => (
            <div key={i} className="border rounded p-4 flex justify-between items-center">
              <a href={l.linkedin} className="text-dsccGreen underline">{l.name}</a>
              <button onClick={() => removeLaureat(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold my-4">Messages reçus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {messages.map((m, i) => (
            <div key={i} className="border rounded p-4">
              <p className="font-semibold">{m.name} – {m.email}</p>
              <p className="text-sm mb-2">{m.message}</p>
              <button onClick={() => removeMessage(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
