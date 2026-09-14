export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A place that matters to me:
      <br />
      <img
        id="wd-your-image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Taipei_101_2009_amk.jpg/960px-Taipei_101_2009_amk.jpg"
        width="300px"
        alt="Taipei 101 tower rising above the Taipei skyline at dusk"
      />
      <br />
      One more sample image:
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000842/GSFC_20171208_Archive_e000842~medium.jpg"
        width="200px"
        alt="Hubble image of the Pillars of Creation"
      />
    </div>
  );
}
