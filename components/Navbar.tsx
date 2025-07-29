"use client"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-red-700 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo kiri */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <nav className="flex space-x-4 text-sm font-semibold">
            <Link href="/">Beranda</Link>
            <Link href="/berita">Berita</Link>
            <Link href="/uu">UU Ketenagakerjaan</Link>
            <Link href="/hitung">Hitung Gaji</Link>
            <Link href="/serikat">Serikat Pekerja</Link>
            <Link href="/diskusi">Diskusi</Link>
            <Link href="/tentang">Tentang</Link>
          </nav>
        </div>
        {/* Logo kanan */}
        <div className="text-right">
          <h1 className="text-2xl font-bold">SBTP-FSBI</h1>
          <p className="text-sm italic">Berani, Jujur, Cerdas, Militan</p>
        </div>
      </div>
    </header>
  )
}
