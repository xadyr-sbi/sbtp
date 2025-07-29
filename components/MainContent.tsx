'use client'
import { useEffect, useState } from 'react'
import { createClientComponent } from '@/lib/supabase'

export default function MainContent() {
  const [page, setPage] = useState<any>(null)
  const supabase = createClientComponent()

  useEffect(() => {
    supabase.from('pages').select('*').eq('slug', 'home').single().then(({ data }) => setPage(data))
  }, [])

  if (!page) return <p>Loading…</p>

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </div>
  )
}
