/* eslint-disable @next/next/no-img-element */

export default function TailwindFilters() {
  const src = "/images/reactjs.png";
  return (
    <div>
      <h3>Blurs</h3>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      {/* On your own: a different filter family - contrast and saturation */}
      <h3 id="wd-your-filters" className="mt-6">
        Contrast and saturation
      </h3>
      <div className="flex">
        <img className="contrast-50 w-1/4" src={src} alt="contrast 50" />
        <img className="contrast-150 w-1/4" src={src} alt="contrast 150" />
        <img className="saturate-50 w-1/4" src={src} alt="saturate 50" />
        <img className="saturate-150 w-1/4" src={src} alt="saturate 150" />
      </div>
      {/* With AI: sample grayscale and brightness row */}
      <h3 id="wd-ai-filters" className="mt-6">
        Grayscale and brightness
      </h3>
      <div className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        <img className="grayscale-0 w-1/4" src={src} alt="grayscale 0" />
        <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
        <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
      </div>
    </div>
  );
}
