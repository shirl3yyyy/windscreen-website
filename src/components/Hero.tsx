import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/10/81/6f/10816ff533d3d1b8f004d100fa0832e3.jpg')",
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