'use client'
import { useState } from 'react'
import { createClientComponent } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const supabase = createClientComponent()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrorMsg('Email atau password salah')
    } else {
      router.push('/admin/dashboard') // arahkan ke dashboard setelah login
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow w-96 space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Login Admin</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  )
}
