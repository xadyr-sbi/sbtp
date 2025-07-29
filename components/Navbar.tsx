"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-red-600">SBTP-FSBI</h1>
        <ul className="flex flex-wrap gap-4 text-gray-700 font-medium">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/berita">Berita</Link></li>
          <li><Link href="/tentang">Tentang</Link></li>
          <li><Link href="/diskusi">Diskusi</Link></li>
          <li><Link href="/serikat">Serikat Pekerja</Link></li>
          <li><Link href="/hitung">Hitung Gaji</Link></li>
          <li><Link href="/uu">UU Ketenagakerjaan</Link></li>
          <li><Link href="/utama">Utama</Link></li>
        </ul>
      </div>
    </nav>
  )
}
