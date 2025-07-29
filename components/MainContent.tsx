export default function MainContent() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-3">Judul Utama Berita</h2>
      <p className="text-gray-600 text-sm mb-4">SBTP-FSBI • 29 Juli 2025</p>
      <img
        src="/contoh-berita.jpg"
        alt="Gambar Berita"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-800 leading-relaxed">
        Ini adalah contoh paragraf utama berita. Layout ini dibuat mirip dengan
        portal berita modern seperti Kompas.com dengan tampilan bersih, fokus pada
        konten, dan responsif di semua perangkat.
      </p>
      <p className="text-gray-800 leading-relaxed mt-4">
        Kamu bisa menghubungkan konten ini dengan Supabase atau API berita agar
        dinamis. Typography dibuat nyaman dibaca, dengan margin dan line-height
        seperti situs berita profesional.
      </p>
    </section>
  )
}
