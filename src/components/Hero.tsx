
import "./Hero.css";
import { useState, useEffect } from "react";

import windscreen1 from "../assets/windscreen1.jpg";
import windscreen2 from "../assets/windscreen2.jpg";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [windscreen1, windscreen2];
  console.log(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (currentSlide) => (currentSlide + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Safe-view Windscreens</h1>

        <p>
          Protect your vision and enhance your driving experience.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

