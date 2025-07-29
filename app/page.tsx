import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-1 max-w-7xl mx-auto px-4 lg:px-6 py-6 gap-6">
        <Sidebar />
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}
