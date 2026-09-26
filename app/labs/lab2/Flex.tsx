export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      {/* Plain row: three children lined up horizontally */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
      </div>

      {/* Grow: the last column absorbs the leftover width */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
          Column 3
        </div>
      </div>

      {/* Pinned first column plus a growing last column */}
      <div className="wd-flex-row-container">
        <div className="wd-width-75px wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
          Column 3
        </div>
      </div>

      {/* On your own: fourth row - column 1 pinned at 110px, column 3 grows */}
      <div id="wd-your-flex" className="wd-flex-row-container">
        <div className="wd-width-75px wd-bg-color-green wd-fg-color-white">
          Column 1
        </div>
        <div className="wd-bg-color-yellow">Column 2</div>
        <div className="wd-flex-grow-1 wd-bg-color-blue wd-fg-color-white">
          Column 3 grows
        </div>
      </div>

      {/* With AI: sample grow/pin row */}
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-width-75px wd-bg-color-red wd-fg-color-white">
          Column 1
        </div>
        <div className="wd-bg-color-gray">Column 2</div>
        <div className="wd-flex-grow-1 wd-bg-color-green wd-fg-color-white">
          Column 3
        </div>
      </div>
    </div>
  );
}
