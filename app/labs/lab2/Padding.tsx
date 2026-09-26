export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>
      {/* On your own: a new per-side padding class */}
      <div
        id="wd-your-padded"
        className="wd-padded-right-only wd-border-fat wd-border-blue wd-border-solid wd-bg-color-green wd-fg-color-white"
      >
        Padded on the right only
      </div>
      {/* With AI: sample padding-top only box */}
      <div
        id="wd-ai-padded"
        className="wd-ai-padded-top wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        Padded on the top only
      </div>
    </div>
  );
}
