import { useEffect, useState } from "react";
import "./MakersSection.scss";
import beachTowers from "../../../Assets/Gallery/Image-1.webp";
import palmCentral from "../../../Assets/Gallery/Image-2.webp";
import palmJebelAli from "../../../Assets/Gallery/Image-3.webp";
import palmJumeirah from "../../../Assets/Gallery/Image-4.webp";

const SLIDE_INTERVAL = 5000;

const places = [
  { image: beachTowers, label: "Palm Beach Towers, Palm Jumeirah" },
  { image: palmCentral, label: "Palm Central, Palm Jumeirah" },
  { image: palmJebelAli, label: "Palm Jebel Ali, Nakheel" },
  { image: palmJumeirah, label: "Palm Jumeirah · Nakheel" },
];

export default function MakersSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % places.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section id="makers" className="ps-section makers-section">
      <div className="ps-wrap">
        <div className="section-intro">
          <p className="ps-kicker">The developer</p>
          <h2>The makers of the Palms</h2>
          <p>Palm Jumeirah, Palm Jebel Ali and Dubai Islands: Nakheel’s coastline.</p>
        </div>

        <div className="makers-slider">
          <div className="makers-frame">
            {places.map((place, index) => (
              <img
                key={place.label}
                src={place.image}
                alt={place.label}
                className={index === active ? "active" : ""}
              />
            ))}
          </div>

          <div className="makers-tags" role="tablist" aria-label="Nakheel coastline">
            {places.map((place, index) => (
              <button
                key={place.label}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
              >
                {place.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
