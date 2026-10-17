import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/a3/da/18/a3da18188ad26d316836763ae06cc787.jpg')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">
          YOUR VEHICLE GLASS SPECIALISTS
        </span>

        <h1>
          Safe-view Windscreens
        </h1>

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
    </section>
  );
}

export default Hero;