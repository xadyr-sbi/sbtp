import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Konten utama */}
      <main className="flex flex-1 max-w-7xl mx-auto w-full px-4 lg:px-6 py-6 gap-6">
        {/* Sidebar kiri */}
        <Sidebar />

        {/* Konten tengah */}
        <MainContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
