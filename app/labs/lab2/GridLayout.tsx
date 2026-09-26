export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>
      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          <h3>Left half</h3>
        </div>
        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right half</h3>
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          <h3>Side bar</h3>
        </div>
        <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
          <h3>Main content</h3>
        </div>
        <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
          <h3>Side bar</h3>
        </div>
      </div>
      {/* On your own: a quarter / three-quarters row */}
      <div id="wd-your-grid" className="wd-grid-row">
        <div className="wd-grid-col-quarter-page wd-bg-color-green wd-fg-color-white">
          <h3>One quarter</h3>
        </div>
        <div className="wd-grid-col-three-quarters-page wd-bg-color-yellow">
          <h3>Three quarters</h3>
        </div>
      </div>
      {/* With AI: sample third / two-thirds row */}
      <div id="wd-ai-grid" className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-red wd-fg-color-white">
          <h3>Left third</h3>
        </div>
        <div className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right two thirds</h3>
        </div>
      </div>
      <div className="wd-float-done" />
    </div>
  );
}
