import "./HomeHero.scss";
import { useState, useEffect } from "react";
import banner1 from "../../../Assets/Banner/Image-1.webp";
import banner2 from "../../../Assets/Banner/Image-2.webp";
import banner3 from "../../../Assets/Banner/Image-3.webp";
import banner4 from "../../../Assets/Banner/Image-4.webp";

const SLIDE_INTERVAL = 5000;

const slides = [
  { image: banner1, alt: "Palm Springs waterfront community at dusk" },
  { image: banner2, alt: "Palm Springs residences along the coast" },
  { image: banner3, alt: "Nakheel coastline community" },
  { image: banner4, alt: "Palm Springs by Nakheel aerial view" },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-hero" id="home">
      <div className="banner-container">
        {slides.map((slide, index) => (
          <img
            key={slide.alt}
            className={`banner-image ${index === currentSlide ? "active" : ""}`}
            src={slide.image}
            alt={slide.alt}
          />
        ))}
      </div>
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="ps-kicker">Coming soon</p>
        <h1>Palm Springs by Nakheel</h1>
        <p className="hero-lead">
          Townhouses and villas by Nakheel, 17 minutes from Palm Jebel Ali.
        </p>
        <p className="hero-meta">
          3–4 bedroom townhouses · 4–5 bedroom villas · Near Sheikh Zayed Road
        </p>
        <p className="hero-price">
          Average starting price AED 3.8M · homes up to AED 9M
        </p>
        <a href="#contact-us" className="ps-gold-btn">
          Register your interest
        </a>
      </div>

      <div className="pagination-container">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            className={`pagination-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Show slide ${index + 1}`}
          >
            <span className="dot-indicator"></span>
            {index === currentSlide && (
              <span key={`filling-${currentSlide}`} className="filling-line"></span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
