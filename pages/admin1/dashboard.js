import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function Dashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn')
    if (!loggedIn) {
      router.push('/admin1')
    } else {
      const stored = localStorage.getItem('customProjects')
      if (stored) setProjects(JSON.parse(stored))
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border rounded p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm mb-2">{p.desc}</p>
              <a href={p.link} className="text-dsccGreen underline">GitHub</a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
