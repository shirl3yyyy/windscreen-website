
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">
          YOUR VEHICLE GLASS SPECIALISTS
        </span>

        <h1>Safe-view Windscreens</h1>

        <p>
          Quality windscreen and vehicle glass replacement
          to help keep you safe and confident on the road.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-quote-button">
            Get a Quote <span aria-hidden="true">→</span>
          </a>

          <a href="#services" className="hero-services-button">
            Explore Our Services
          </a>
        </div>
      </div>

      <div className="weather-panel">
        <div className="weather-heading">
          <span>BUILT FOR EVERY WEATHER</span>
          <p>Protection through every journey</p>
        </div>

        <div className="weather-conditions">
          <div className="weather-item">
            <span>☀️</span>
            <p>Sun</p>
          </div>

          <div className="weather-item">
            <span>🌧️</span>
            <p>Rain</p>
          </div>

          <div className="weather-item">
            <span>❄️</span>
            <p>Snow</p>
          </div>

          <div className="weather-item">
            <span>💨</span>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
