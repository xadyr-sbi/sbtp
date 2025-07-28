'use client'
import { useState } from 'react'
import { createClientComponent } from '@/lib/supabase'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClientComponent()
  const signIn = async () => {
    await supabase.auth.signInWithPassword({ email, password })
    location.href = '/admin/dashboard'
  }
  const signUp = async () => {
    await supabase.auth.signUp({ email, password })
    alert('Akun dibuat, silakan login.')
  }
  return (
    <main className="max-w-md mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Login / Register Admin</h1>
      <input placeholder="email" className="border w-full p-2" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" className="border w-full p-2" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn} className="bg-blue-600 text-white px-4 py-2 mr-2">Login</button>
      <button onClick={signUp} className="bg-gray-600 text-white px-4 py-2">Register</button>
    </main>
  )
}
