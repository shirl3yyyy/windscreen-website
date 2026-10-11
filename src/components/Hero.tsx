import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdf8m20ZIWNlhO3WftJa0tqRzT-G6qRdCUO2Ue3GexUw&s=10')",
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
