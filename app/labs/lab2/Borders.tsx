export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>
      <p className="wd-border-fat wd-border-red wd-border-solid">
        Solid fat red border
      </p>
      <p className="wd-border-thin wd-border-blue wd-border-dashed">
        Dashed thin blue border
      </p>
      {/* On your own: a third mix built only from existing classes */}
      <p
        id="wd-your-border"
        className="wd-border-thin wd-border-yellow wd-border-solid"
      >
        Solid thin yellow border
      </p>
      {/* With AI: sample fourth mix, also reusing existing classes */}
      <p
        id="wd-ai-border"
        className="wd-border-fat wd-border-dashed wd-border-yellow"
      >
        Dashed fat yellow border
      </p>
    </div>
  );
}
