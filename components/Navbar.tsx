"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { createClientComponent } from "@/lib/supabase"

export default function Navbar() {
  const [title, setTitle] = useState("SBTP-FSBI")
  const [tagline, setTagline] = useState("Berani, Jujur, Cerdas, Militan")
  const supabase = createClientComponent()

  useEffect(() => {
    const loadHeader = async () => {
      const { data } = await supabase
        .from("pages")
        .select("title, tagline")
        .eq("slug", "home")
        .single()

      if (data) {
        setTitle(data.title || "SBTP-FSBI")
        setTagline(data.tagline || "Berani, Jujur, Cerdas, Militan")
      }
    }
    loadHeader()
  }, [])

  return (
    <header className="w-full bg-red-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="italic text-sm mt-1">{tagline}</p>

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
