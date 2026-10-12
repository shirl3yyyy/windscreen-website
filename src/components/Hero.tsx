import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/10/81/6f/10816ff533d3d1b8f004d100fa0832e3.jpg')",
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
