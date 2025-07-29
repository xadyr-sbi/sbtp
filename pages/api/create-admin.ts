import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: 'Email dan password wajib diisi' })
  }

  const supabase = createClient()
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // langsung verifikasi email
  })

  if (error) return res.status(500).json({ error: error.message })
  return res.status(200).json({ message: 'Admin berhasil dibuat', user: data.user })
}
