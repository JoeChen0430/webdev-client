export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-margin">
        margin
        <div className="wd-box-model-border">
          border
          <div className="wd-box-model-padding">
            padding
            <div className="wd-box-model-content">content</div>
          </div>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 200px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 200px includes padding and border
        </div>
        {/* On your own: same comparison at a wider declared width.
            Only the border-box box below actually measures 300px on screen;
            the content-box one renders 300 + 40 padding + 20 border = 360px. */}
        <div id="wd-your-box-sizing" className="wd-box-sizing-content-wide">
          content-box: declared 300px, renders 360px
        </div>
        <div className="wd-box-sizing-border-wide">
          border-box: declared 300px, renders 300px
        </div>
        {/* With AI: sample third box. border-box is the one that keeps the
            declared width, because padding and border count inside it. */}
        <div id="wd-ai-box-sizing" className="wd-box-sizing-border">
          border-box keeps the declared 200px width
        </div>
      </div>
    </div>
  );
}
