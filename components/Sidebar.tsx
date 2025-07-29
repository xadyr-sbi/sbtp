export default function Sidebar() {
  const items = ["Untuk tulisan", "Untuk tulisan", "Untuk tulisan", "Untuk tulisan"]
  return (
    <aside className="w-40 flex flex-col gap-4 mt-4">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-blue-500 rounded mb-1"></div>
          <p className="text-xs text-center">{item}</p>
        </div>
      ))}
    </aside>
  )
}
