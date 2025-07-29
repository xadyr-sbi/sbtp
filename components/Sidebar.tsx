export default function Sidebar() {
  const berita = [
    "Berita Terkini Serikat Pekerja",
    "Update UU Ketenagakerjaan",
    "Diskusi Anggota Terbaru",
    "Kegiatan SBTP-FSBI"
  ]

  return (
    <aside className="space-y-4">
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-lg mb-3">Berita Populer</h3>
        <ul className="space-y-2 text-sm text-blue-700">
          {berita.map((item, i) => (
            <li key={i} className="hover:underline cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-lg mb-3">Tentang SBTP-FSBI</h3>
        <p className="text-gray-700 text-sm">
          SBTP-FSBI adalah serikat buruh tingkat perusahaan yang berafiliasi
          dengan Federasi Serikat Buruh Independen.
        </p>
      </div>
    </aside>
  )
}
