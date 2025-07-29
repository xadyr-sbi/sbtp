"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="relative">
      {/* Blok Merah Gradien Hitam */}
      <div className="h-[120px] bg-gradient-to-b from-red-700 to-black flex flex-col justify-center items-center text-white">
        {/* Judul & Tagline */}
        <h1 className="text-3xl font-extrabold tracking-wide">SBTP-FSBI</h1>
        <p className="italic text-sm mt-1">Berani, Jujur, Cerdas, Militan</p>

        {/* Menu Navigasi */}
        <nav className="mt-3 flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-yellow-300 transition">Beranda</Link>
          <Link href="/berita" className="hover:text-yellow-300 transition">Berita</Link>
          <Link href="/uu" className="hover:text-yellow-300 transition">UU Ketenagakerjaan</Link>
          <Link href="/hitung" className="hover:text-yellow-300 transition">Hitung Gaji</Link>
          <Link href="/serikat" className="hover:text-yellow-300 transition">Serikat Pekerja</Link>
          <Link href="/diskusi" className="hover:text-yellow-300 transition">Diskusi</Link>
          <Link href="/tentang" className="hover:text-yellow-300 transition">Tentang</Link>
        </nav>
      </div>
    </header>
  )
}
