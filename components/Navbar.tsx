"use client"
import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

// Langsung pakai URL & KEY dari kamu
const supabase = createClient(
  "https://ftjtjwyxuqrbrhjdahqk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0anRqd3l4dXFyYnJoamRhaHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2OTA4NzMsImV4cCI6MjA2OTI2Njg3M30.VqOgC2CoWDWwYChMQxZkW0an4ZNIQOh1ywmIfmlgNFY"
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

      if (!error && data) {
        setTitle(data.title)
      } else {
        setTitle("SBTP-FSBI")
        console.error("Supabase error:", error)
      }
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
