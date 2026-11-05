import "./LaunchesSection.scss";
import palmJebelAli from "../../../Assets/Launch/Palm-Jebel-Ali.webp";
import bayVillas from "../../../Assets/Launch/Bay-Villas.webp";

const launches = [
  {
    image: palmJebelAli,
    title: "Palm Jebel Ali: sold out in hours",
    text: "The first Palm Jebel Ali villas sold out within hours of release.",
  },
  {
    image: bayVillas,
    title: "Bay Villas: sold out in hours",
    text: "The first two phases of Bay Villas on Dubai Islands sold within hours.",
  },
];

const notes = [
  {
    title: "Bay Grove: sold out",
    text: "Every released phase of Bay Grove Residences on Dubai Islands sold out.",
  },
  {
    title: "Released in stages",
    text: "Each Palm Springs release reaches the priority list first.",
  },
  {
    title: "Average starting price AED 3.8M",
    text: "A Nakheel townhouse or villa, with homes up to AED 9M.",
  },
  {
    title: "892 homes handing over",
    text: "Nakheel is handing over Jebel Ali Village homes, near Palm Springs.",
  },
];

export default function LaunchesSection() {
  return (
    <section id="launches" className="ps-section launches-section">
      <div className="ps-wrap">
        <h2>Nakheel’s recent launches</h2>
        <div className="launch-grid">
          {launches.map((launch) => (
            <article key={launch.title}>
              <img src={launch.image} alt={launch.title} />
              <h3>{launch.title}</h3>
              <p>{launch.text}</p>
            </article>
          ))}
        </div>
        <div className="launch-notes">
          {notes.map((note) => (
            <article key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
