export default function TailwindSpacing() {
  return (
    <div>
      <h2 className="text-3xl">Margin</h2>
      <div className="bg-blue-200 mb-4 p-4">
        This div has a bottom margin of 4.
      </div>
      <div className="bg-blue-200 ms-4 me-8 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>
      <h2 className="text-3xl mt-8">Padding</h2>
      <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
        This div has starting padding of 2, top padding of 4, and bottom
        padding of 8.
      </div>
      <div className="bg-green-200 p-6">This div has padding all around of 6.</div>
      {/* On your own: directional margin and padding mixed together */}
      <div id="wd-your-spacing" className="bg-amber-200 mt-8 ms-12 pt-6 pe-10 pb-2">
        My box: top margin 8 and start margin 12 push it away from its
        neighbours, while top padding 6, end padding 10, and bottom padding 2
        move the text inward by different amounts on each side.
      </div>
      {/* With AI: sample directional spacing mix */}
      <div id="wd-ai-spacing" className="bg-purple-200 mt-6 ps-8 pb-4">
        A sample box mixing mt-6, ps-8, and pb-4 so the directional spacing is
        obvious.
      </div>
    </div>
  );
}
