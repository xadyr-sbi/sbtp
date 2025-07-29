export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">SBTP-FSBI</h2>
        <p className="text-lg mb-8">Berani, Jujur, Cerdas, Militan</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
            <h3 className="text-xl font-semibold">Untuk tulisan</h3>
            <p className="mt-2">Kolom untuk foto atau deskripsi singkat organisasi.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
            <h3 className="text-xl font-semibold">Untuk tulisan</h3>
            <p className="mt-2">Tambahkan info tambahan di sini.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
