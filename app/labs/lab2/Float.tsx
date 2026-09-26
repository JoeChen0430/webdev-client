const STARSHIP =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";

const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>

      {/* On your own: a colored box floated left, text wrapping beside it,
          ended with a clear: both element */}
      <div>
        <div
          id="wd-your-float"
          className="wd-float-left wd-bg-color-green wd-fg-color-white wd-dimension-square"
        >
          Mine
        </div>
        {LOREM}
        <div className="wd-float-done" />
      </div>

      {/* With AI: sample box floated right with wrapping text */}
      <div>
        <div
          id="wd-ai-float"
          className="wd-float-right wd-bg-color-yellow wd-dimension-square"
        >
          Sample
        </div>
        {LOREM}
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
