import "./BrochureSection.scss";
import brochure from "../../../Assets/Brochure-&-Plans/brochure-sample.webp";
import floorPlan from "../../../Assets/Brochure-&-Plans/floor-plan-sample.webp";
import locationMap from "../../../Assets/Brochure-&-Plans/location-map.webp";

const cards = [
  {
    image: brochure,
    alt: "Sample Palm Springs project brochure",
    title: "Project Brochure",
    text: "See the kind of detail, finishes and lifestyle presentation you'll receive. Request now and we'll send the confirmed Palm Springs brochure the moment Nakheel releases it.",
    button: "Get the Brochure",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 5.5h12.5L25 11v15.5H7V5.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M19 5.8V11h5.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 16h10M11 20h7" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    image: floorPlan,
    alt: "Sample Palm Springs floor plan",
    title: "Floor Plans",
    text: "A sample layout showing the level of detail our floor-plan packs include. Register to be first to receive the confirmed Palm Springs residence plans.",
    button: "Request Floor Plans",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="5" width="20" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 16h20M16 5v22M11 11h3M19 21h4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    image: locationMap,
    alt: "Reference map for Palm Springs",
    title: "Location & Masterplan",
    text: "Explore the reference map and register for the verified masterplan.",
    button: "Request Master Plan",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 8.5 12 6l8 3 6-2.2V23l-6 2.5-8-3-6 2.2V8.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 6v16.2M20 9v16.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function BrochureSection() {
  return (
    <section id="brochure" className="ps-section brochure-section">
      <div className="ps-wrap">
        <div className="section-intro">
          <p className="ps-kicker">Brochure & plans</p>
          <h2>Your First Step Towards Something Exceptional</h2>
          <p>
            Register your interest below to receive the latest confirmed project details, pricing and floor plans as soon as they become available.
          </p>
        </div>
        <div className="brochure-grid">
          {cards.map((card) => (
            <article key={card.title} className="brochure-card">
              <div className="brochure-visual">
                <img src={card.image} alt={card.alt} />
                <span>Preview</span>
              </div>
              <div className="brochure-body">
                <div className="brochure-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href="#contact-us" className="ps-gold-btn block">{card.button}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
