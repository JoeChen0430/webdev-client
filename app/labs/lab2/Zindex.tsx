export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
          Square
        </div>
        {/* On your own: declared last but z-index 1 keeps it behind the blue
            landscape box, which sits at z-index 10 */}
        <div
          id="wd-your-zindex"
          className="wd-your-zindex-back wd-bg-color-green wd-fg-color-white wd-dimension-landscape"
        >
          Behind
        </div>
        {/* With AI: sample box stacked above the whole demo */}
        <div
          id="wd-ai-zindex"
          className="wd-ai-zindex-top wd-bg-color-red wd-fg-color-white wd-dimension-square"
        >
          On top
        </div>
      </div>
    </div>
  );
}
