import "./LocationSection.scss";
import locationImage from "../../../Assets/Common/Location.avif";

const distances = [
  { time: "15 min", place: "DWC Airport" },
  { time: "17 min", place: "Palm Jebel Ali" },
  { time: "20 min", place: "Bluewaters" },
  { time: "25 min", place: "Palm Jumeirah" },
  { time: "30 min", place: "Burj Al Arab" },
];

export default function LocationSection() {
  return (
    <section id="location" className="ps-section location-section">
      <div className="ps-wrap location-grid">
        <img src={locationImage} alt="Palm Springs location near Sheikh Zayed Road" />
        <div className="location-copy">
          <p className="ps-kicker">Where it sits</p>
          <h2>Near Sheikh Zayed Road, 17 minutes from Palm Jebel Ali</h2>
          <p>
            Palm Springs sits near Sheikh Zayed Road, 17 minutes from Palm Jebel Ali, with easy metro access and DWC Airport 15 minutes away.
          </p>
          <ul>
            {distances.map((item) => (
              <li key={item.place}>
                <strong>{item.time}</strong>
                <span>{item.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
