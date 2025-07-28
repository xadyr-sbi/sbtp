'use client'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-4 py-3 flex gap-4">
      <Link href="/">Beranda</Link>
      <Link href="/berita">Berita</Link>
      <Link href="/tentang">Tentang</Link>
      <Link href="/diskusi">Diskusi</Link>
      <Link href="/admin" className="ml-auto text-sm underline">Admin</Link>
    </nav>
  )
}
