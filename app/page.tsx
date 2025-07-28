import { createClient } from '@/lib/supabase'
import ContentRenderer from '@/components/ContentRenderer'
export default async function Home() {
  const supabase = createClient()
  const { data } = await supabase.from('pages').select('title,body').eq('slug', 'home').single()
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-bold">{data?.title || 'Selamat Datang di SBTP-FSBI'}</h1>
      <ContentRenderer html={data?.body || '<p>Belum ada konten.</p>'} />
    </section>
  )
}
