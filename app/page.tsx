import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Untuk tulisan</h3>
          <p className="text-gray-600 mt-2">Konten deskripsi singkat...</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Untuk tulisan</h3>
          <p className="text-gray-600 mt-2">Konten tambahan...</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
