export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        {/* On your own: keeps its declared size no matter how long the text is */}
        <div
          id="wd-your-dimension"
          className="wd-your-dimension-wide wd-bg-color-green wd-fg-color-white"
        >
          This box stays 160 by 90 pixels even though this sentence is far too
          long to fit inside it comfortably.
        </div>
        {/* With AI: sample sized box with deliberately long text */}
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          A sample box declared 120 by 60 pixels, with a sentence long enough
          that the declared size is obvious.
        </div>
      </div>
    </div>
  );
}
