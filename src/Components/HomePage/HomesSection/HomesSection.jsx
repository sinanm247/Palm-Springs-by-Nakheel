import "./HomesSection.scss";
import townhouse from "../../../Assets/Asset/TownHouse.webp";
import villa from "../../../Assets/Asset/Villa.webp";

const homes = [
  {
    image: townhouse,
    alt: "Palm Springs townhouse",
    name: "Townhouse",
    beds: "3–4",
    bedLabel: "bedrooms",
    price: "AED 3.8M",
    priceLabel: "average starting price",
  },
  {
    image: villa,
    alt: "Palm Springs villa",
    name: "Villa",
    beds: "4–5",
    bedLabel: "bedrooms",
    price: "AED 9M",
    priceLabel: "homes up to",
  },
];

export default function HomesSection() {
  return (
    <section id="homes" className="ps-section homes-section">
      <div className="ps-wrap">
        <div className="section-intro">
          <p className="ps-kicker">The homes</p>
          <h2>Townhouse or villa</h2>
          <p>Two ways to live at Palm Springs. Sizes and floor plans arrive with each Nakheel release.</p>
        </div>
        <div className="homes-grid">
          {homes.map((home) => (
            <article key={home.name} className="home-card">
              <img src={home.image} alt={home.alt} />
              <div className="home-card-body">
                <h3>{home.name}</h3>
                <div className="home-stats">
                  <div>
                    <strong>{home.beds}</strong>
                    <span>{home.bedLabel}</span>
                  </div>
                  <div>
                    <strong>{home.price}</strong>
                    <span>{home.priceLabel}</span>
                  </div>
                </div>
                <a href="#contact-us" className="ps-gold-btn">Register for this home</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
