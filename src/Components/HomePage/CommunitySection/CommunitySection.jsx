import "./CommunitySection.scss";
import palmJebelAli from "../../../Assets/Community/Palm-Jebel-Ali.webp";
import dubaiIslands from "../../../Assets/Community/Dubai-Islands.webp";
import villaLiving from "../../../Assets/Community/Villa-living.webp";
import palmJumeirah from "../../../Assets/Community/PalmJumeirah.webp";

const scenes = [
  { image: palmJebelAli, label: "Palm Jebel Ali" },
  { image: dubaiIslands, label: "Dubai Islands" },
  { image: villaLiving, label: "Villa living" },
  { image: palmJumeirah, label: "Palm Jumeirah" },
];

export default function CommunitySection() {
  return (
    <section id="community" className="ps-section community-section">
      <div className="ps-wrap">
        <div className="section-intro">
          <p className="ps-kicker">Everyday life</p>
          <h2>Life in a Nakheel community</h2>
        </div>
        <div className="community-grid">
          {scenes.map((scene) => (
            <figure key={scene.label}>
              <img src={scene.image} alt={scene.label} />
              <figcaption>{scene.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
