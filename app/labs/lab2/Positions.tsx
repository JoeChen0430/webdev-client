export default function Positions() {
  return (
    <div id="wd-css-positions">
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          {/* On your own: nudged down and left, neighbors do not reflow */}
          <div
            id="wd-your-relative"
            className="wd-your-pos-relative-nudge wd-bg-color-green wd-fg-color-white wd-dimension-square"
          >
            Mine
          </div>
          {/* With AI: sample nudge */}
          <div
            id="wd-ai-relative"
            className="wd-ai-pos-relative-nudge wd-bg-color-yellow wd-dimension-landscape"
          >
            AI nudge
          </div>
        </div>
      </div>

      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative" style={{ height: 150 }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
          {/* On your own: pinned to the top-right corner of the relative parent */}
          <div
            id="wd-your-absolute"
            className="wd-your-pos-absolute-tr wd-bg-color-green wd-fg-color-white wd-dimension-square"
          >
            Top right
          </div>
          {/* With AI: sample bottom-right pin */}
          <div
            id="wd-ai-absolute"
            className="wd-ai-pos-absolute-br wd-bg-color-yellow wd-dimension-square"
          >
            Bottom right
          </div>
        </div>
      </div>

      <div id="wd-css-position-fixed">
        <h2>Fixed position</h2>
        Checkout the blue square that says &quot;Fixed position&quot; stuck all
        the way on the right and half way down the page. It doesn&apos;t scroll
        with the rest of the page. Its position is &quot;Fixed&quot;.
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed position
        </div>
        {/* On your own: my own fixed badge, top-right of the viewport */}
        <div
          id="wd-your-fixed"
          className="wd-your-pos-fixed wd-bg-color-green wd-fg-color-white"
        >
          My badge
        </div>
        {/* With AI: sample fixed badge, bottom-left of the viewport */}
        <div
          id="wd-ai-fixed"
          className="wd-ai-pos-fixed wd-bg-color-red wd-fg-color-white"
        >
          AI fixed
        </div>
      </div>
    </div>
  );
}
