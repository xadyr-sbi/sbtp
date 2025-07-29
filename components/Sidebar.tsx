"use client"
import { useEffect, useState } from "react"
import { createClientComponent } from "@/lib/supabase"

type NewsItem = {
  id: number
  title: string
}

export default function Sidebar() {
  const [news, setNews] = useState<NewsItem[]>([])
  const supabase = createClientComponent()

  useEffect(() => {
    const loadNews = async () => {
      const { data } = await supabase.from("news").select("id, title").limit(4)
      if (data) setNews(data)
    }
    loadNews()
  }, [])

  return (
    <aside className="w-40 flex flex-col gap-6">
      {news.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-blue-500 rounded mb-2 bg-gray-100"></div>
          <p className="text-xs text-center font-medium">{item.title}</p>
        </div>
      ))}
    </aside>
  )
}
