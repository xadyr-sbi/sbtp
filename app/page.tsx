import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex max-w-7xl mx-auto px-4 py-6 flex-1 space-x-6">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
