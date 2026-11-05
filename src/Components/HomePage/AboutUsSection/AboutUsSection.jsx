import { useState } from "react";
import "./AboutUsSection.scss";
import waterfront from "../../../Assets/Images/Waterfront-aerial-view.png";
import exteriors from "../../../Assets/Images/Villa-exteriors.webp";
import interior from "../../../Assets/Images/Interior-living-space.webp";

const photos = [
  { src: waterfront, alt: "Waterfront aerial view of Palm Springs", label: "Waterfront" },
  { src: exteriors, alt: "Villa exteriors at Palm Springs", label: "Villa exteriors" },
  { src: interior, alt: "Interior living space at Palm Springs", label: "Living space" },
];

const facts = [
  { value: "AED 3.8M", label: "Average starting price" },
  { value: "AED 9M", label: "Homes up to" },
  { value: "17 min", label: "From Palm Jebel Ali" },
  { value: "3–5", label: "Bedrooms" },
];

export default function AboutUsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="ps-section about-section">
      <div className="ps-wrap about-grid">
        <div className="about-visual">
          <img src={photos[active].src} alt={photos[active].alt} />
          <div className="about-thumbs">
            {photos.map((photo, index) => (
              <button
                key={photo.label}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <img src={photo.src} alt="" />
                <span>{photo.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="about-copy">
          <p className="ps-kicker">The project</p>
          <h2>Nakheel’s next community, 17 minutes from Palm Jebel Ali</h2>
          <p>
            Palm Springs is a new master-planned community by Nakheel in the Jebel Ali area. The collection is planned as 3–4 bedroom townhouses and 4–5 bedroom villas, set around water features near Sheikh Zayed Road, with metro access close by.
          </p>
          <p>
            Confirmed prices, floor plans and the payment plan are released in stages. Register once and each update reaches you as Nakheel confirms it.
          </p>
          <div className="about-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
          <a href="#contact-us" className="ps-gold-btn">Register your interest</a>
        </div>
      </div>
    </section>
  );
}
