export default function TailwindGrids() {
  return (
    <div>
      <h2 className="text-3xl font-bold">Tailwind Grids</h2>

      <h3 className="mt-6 text-3xl font-bold">4 Columns Grid</h3>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="text-center bg-blue-300 p-3">
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-3xl font-bold">3 Columns Grid</h3>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="text-center bg-green-300 p-3">
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>

      <div id="wd-tailwind-grid-system" className="mt-6">
        <h2>Grid system</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-red-500 text-white">
            <h3>Left half</h3>
          </div>
          <div className="bg-blue-500 text-white">
            <h3>Right half</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-4 bg-yellow-500">
            <h3>One third</h3>
          </div>
          <div className="col-span-8 bg-green-500 text-white">
            <h3>Two thirds</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-2 bg-black text-white">
            <h3>Sidebar</h3>
          </div>
          <div className="col-span-8 bg-gray-500 text-white">
            <h3>Main content</h3>
          </div>
          <div className="col-span-2 bg-blue-400">
            <h3>Sidebar</h3>
          </div>
        </div>
        {/* On your own: three equal columns on a twelve-column grid */}
        <div id="wd-your-grid" className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-4 bg-teal-500 text-white">
            <h3>Equal one</h3>
          </div>
          <div className="col-span-4 bg-teal-600 text-white">
            <h3>Equal two</h3>
          </div>
          <div className="col-span-4 bg-teal-700 text-white">
            <h3>Equal three</h3>
          </div>
        </div>
        {/* With AI: sample 3/9 split */}
        <div id="wd-ai-grid" className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-3 bg-purple-500 text-white">
            <h3>Three columns</h3>
          </div>
          <div className="col-span-9 bg-orange-500 text-white">
            <h3>Nine columns</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
