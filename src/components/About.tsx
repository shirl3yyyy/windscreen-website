
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-images">
        <img
          src="https://i.pinimg.com/736x/94/fc/4d/94fc4d4a7350e8c782862037ac22c872.jpg"
          alt="Vehicle windscreen"
          className="about-image about-image-main"
          loading="lazy"
        />

        <img
          src="https://i.pinimg.com/1200x/91/11/cf/9111cffa466a8a4264e07393b41da8b5.jpg"
          alt="Vehicle glass service"
          className="about-image"
          loading="lazy"
        />

        <img
          src="https://i.pinimg.com/1200x/bf/52/64/bf526484a697081956c434017d5c739a.jpg"
          alt="Car window"
          className="about-image"
          loading="lazy"
        />
      </div>

      <div className="about-content">
        <span className="about-label">WHO WE ARE</span>

        <h2>
          Clear Vision.
          <span> Safer Journeys.</span>
        </h2>

        <p>
          At Safe-view Windscreens, we provide professional
          vehicle glass replacement services to help drivers
          get back on the road with confidence.
        </p>

        <p>
          We focus on quality workmanship, dependable service,
          and making the replacement process as straightforward
          as possible for our customers.
        </p>

        <a href="#services" className="about-button">
          Explore Our Services <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default About;
