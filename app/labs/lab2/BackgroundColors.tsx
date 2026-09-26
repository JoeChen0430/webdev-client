export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      {/* On your own: contrasting stack so the text stays readable */}
      <p id="wd-your-bg" className="wd-bg-color-yellow wd-fg-color-black">
        Yellow background with black text keeps the contrast high enough to
        read comfortably.
      </p>
      {/* With AI: sample stacked block */}
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        A sample block stacking wd-bg-color-yellow with wd-fg-color-black.
      </p>
    </div>
  );
}
