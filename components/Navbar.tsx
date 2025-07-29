"use client"
import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Navbar() {
  const [title, setTitle] = useState("")

  useEffect(() => {
    const fetchTitle = async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("title")
        .eq("slug", "home")
        .single()

      if (!error && data) setTitle(data.title)
      else setTitle("SBTP-FSBI")
    }
    fetchTitle()
  }, [])

  return (
    <header className="w-full">
      <div className="h-[120px] bg-gradient-to-b from-red-700 to-black flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="italic mt-1">Berani, Jujur, Cerdas, Militan</p>
        <nav className="mt-3 flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <Link href="/">Beranda</Link>
          <Link href="/berita">Berita</Link>
          <Link href="/uu">UU Ketenagakerjaan</Link>
          <Link href="/hitung">Hitung Gaji</Link>
          <Link href="/serikat">Serikat Pekerja</Link>
          <Link href="/diskusi">Diskusi</Link>
          <Link href="/tentang">Tentang</Link>
        </nav>
      </div>
    </header>
  )
}
