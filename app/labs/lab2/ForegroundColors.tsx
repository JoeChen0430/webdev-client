export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      {/* On your own: my own mixed-color sentence */}
      <p id="wd-your-fg" className="wd-fg-color-green">
        I write most of my notes in green, but{" "}
        <span className="wd-fg-color-red">deadlines always go in red</span> so I
        cannot miss them.
      </p>
      {/* With AI: sample mixed-color sentence */}
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This paragraph is blue and{" "}
        <span className="wd-fg-color-black">this nested span is black</span>.
      </p>
    </div>
  );
}
