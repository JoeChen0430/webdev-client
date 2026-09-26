export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h3>Rounded corners</h3>
      <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners on the top
      </p>
      <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners at the bottom
      </p>
      <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners all around
      </p>
      <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Different rounded corners
      </p>
      {/* On your own: only the right corners, larger radius */}
      <p
        id="wd-your-corners"
        className="wd-your-rounded-right wd-border-thin wd-border-blue wd-border-solid wd-padding-fat"
      >
        Rounded corners on the right only
      </p>
      {/* With AI: sample left-corners-only box */}
      <p
        id="wd-ai-corners"
        className="wd-ai-rounded-left wd-border-thin wd-border-blue wd-border-solid wd-padding-fat"
      >
        Rounded corners on the left only
      </p>
    </div>
  );
}
