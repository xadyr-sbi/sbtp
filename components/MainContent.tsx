"use client"
import { useEffect, useState } from "react"
import { createClientComponent } from "@/lib/supabase"

type Content = {
  id: number
  image: string
  body: string
}

export default function MainContent() {
  const [content, setContent] = useState<Content | null>(null)
  const supabase = createClientComponent()

  useEffect(() => {
    const loadContent = async () => {
      const { data } = await supabase.from("news").select("*").eq("slug", "utama").single()
      if (data) setContent(data)
    }
    loadContent()
  }, [])

  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Kolom foto utama */}
      <div className="border border-gray-300 h-72 flex items-center justify-center bg-gray-50">
        {content?.image ? (
          <img src={content.image} alt="Main" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500">Kolom untuk foto</span>
        )}
      </div>

      {/* Artikel bawah */}
      <div className="space-y-4">
        <div className="border border-gray-300 p-4 text-sm bg-gray-50">
          {content?.body || "Untuk tulisan xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
        </div>
      </div>
    </div>
  )
}
