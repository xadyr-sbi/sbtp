"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { createClientComponent } from "@/lib/supabase"  // gunakan client dari lib

export default function Navbar() {
  const [title, setTitle] = useState("SBTP-FSBI")
  const [tagline, setTagline] = useState("Berani, Jujur, Cerdas, Militan")
  const supabase = createClientComponent()

  useEffect(() => {
    const fetchHeader = async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("title, tagline")
        .eq("slug", "home")
        .single()

      if (!error && data) {
        setTitle(data.title || "SBTP-FSBI")
        setTagline(data.tagline || "Berani, Jujur, Cerdas, Militan")
      }
    }
    fetchHeader()
  }, [])

  return (
    <header className="w-full">
      <div className="bg-red-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col items-center">
          {/* Title + Tagline */}
          <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-md">{title}</h1>
          <p className="italic text-sm opacity-90 mt-1">{tagline}</p>

          {/* Navigation */}
          <nav className="mt-3 flex flex-wrap justify-center gap-5 text-sm font-semibold uppercase tracking-wide">
            <Link href="/">Beranda</Link>
            <Link href="/berita">Berita</Link>
            <Link href="/uu">UU Ketenagakerjaan</Link>
            <Link href="/hitung">Hitung Gaji</Link>
            <Link href="/serikat">Serikat Pekerja</Link>
            <Link href="/diskusi">Diskusi</Link>
            <Link href="/tentang">Tentang</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
