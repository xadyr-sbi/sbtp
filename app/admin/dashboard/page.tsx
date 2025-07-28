'use client'
import { useEffect, useState } from 'react'
import { createClientComponent } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import TinyEditor from '@/components/Editor'
export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [page, setPage] = useState<any>(null)
  const supabase = createClientComponent()
  const router = useRouter()
  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      if (error) router.push('/admin')
      else setUser(data.user)
    })
  }, [])
  useEffect(() => {
    if (!user) return
    supabase.from('pages').select('*').eq('slug', 'home').single().then(({ data }) => setPage(data))
  }, [user])
  const save = async (body: string) => {
    await supabase.from('pages').upsert({ slug: 'home', title: 'Beranda', body })
    alert('Tersimpan!')
  }
  if (!user) return <p>Loading…</p>
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {page ? <TinyEditor initial={page.body} onSave={save} /> : <p>Loading editor…</p>}
    </main>
  )
}
