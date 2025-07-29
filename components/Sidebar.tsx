export default function Sidebar() {
  const boxes = [1, 2, 3, 4]
  return (
    <aside className="flex flex-col space-y-4">
      {boxes.map((b) => (
        <div key={b} className="w-20 h-20 bg-gray-200 rounded border border-gray-400"></div>
      ))}
    </aside>
  )
}
