"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-red-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Logo & Tagline */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-red-500">
          <h1 className="text-2xl font-bold">SBTP-FSBI</h1>
          <p className="italic text-sm">Berani, Jujur, Cerdas, Militan</p>
        </div>
        {/* Menu Navigasi */}
        <nav className="flex space-x-4 px-4 py-2 text-sm font-semibold overflow-x-auto">
          <Link href="/" className="hover:text-yellow-300">Beranda</Link>
          <Link href="/berita" className="hover:text-yellow-300">Berita</Link>
          <Link href="/uu" className="hover:text-yellow-300">UU Ketenagakerjaan</Link>
          <Link href="/hitung" className="hover:text-yellow-300">Hitung Gaji</Link>
          <Link href="/serikat" className="hover:text-yellow-300">Serikat Pekerja</Link>
          <Link href="/diskusi" className="hover:text-yellow-300">Diskusi</Link>
          <Link href="/tentang" className="hover:text-yellow-300">Tentang</Link>
        </nav>
      </div>
    </header>
  )
}
