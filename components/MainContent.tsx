export default function MainContent() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Kolom utama foto */}
      <div className="border border-gray-300 h-72 flex items-center justify-center">
        <span className="text-gray-500">Kolom untuk foto</span>
      </div>

      {/* Artikel bawah */}
      <div className="space-y-4">
        <div className="border border-gray-300 p-4 text-sm">
          Untuk tulisan xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>
        <div className="border border-gray-300 p-4 text-sm">
          Untuk tulisan xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>
      </div>
    </div>
  )
}
