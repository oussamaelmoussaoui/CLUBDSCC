import fs from 'fs'
import path from 'path'

const dataFile = path.join(process.cwd(), 'data', 'laureats.json')

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ error: 'Failed to read laureats' })
    }
  } else if (req.method === 'POST') {
    const { name, linkedin } = req.body || {}
    if (!name || !linkedin) return res.status(400).json({ error: 'Missing fields' })
    try {
      const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
      data.push({ name, linkedin })
      fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ error: 'Failed to save laureat' })
    }
  } else if (req.method === 'DELETE') {
    const { index } = req.body || {}
    try {
      const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
      if (index >= 0 && index < data.length) {
        data.splice(index, 1)
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
      }
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ error: 'Failed to remove laureat' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
