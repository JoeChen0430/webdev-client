export default function TailwindBackgroundColors() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Background Colors</h2>
      <div className="bg-red-500 text-white p-4 mb-4">
        This div has a red background.
      </div>
      <div className="bg-green-500 text-white p-4 mb-4">
        This div has a green background.
      </div>
      <div className="bg-blue-500 text-white p-4 mb-4">
        This div has a blue background.
      </div>
      <div className="bg-yellow-500 text-black p-4 mb-4">
        This div has a yellow background.
      </div>
      {/* On your own: a lighter shade needs dark text to stay legible */}
      <div id="wd-your-bg" className="bg-teal-200 text-teal-950 p-4 mb-4">
        My band uses bg-teal-200, which is light, so the text is teal-950 to
        keep the contrast readable.
      </div>
      {/* With AI: sample non-500 shade */}
      <div id="wd-ai-bg" className="bg-indigo-700 text-white p-4 mb-4">
        A sample band using bg-indigo-700 with white text.
      </div>
    </div>
  );
}
