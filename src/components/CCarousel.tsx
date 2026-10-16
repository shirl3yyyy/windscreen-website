
import { useEffect, useState } from "react";
import "./CCarousel.css";

const carBrands = [
  {
    name: "BMW",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mercedes-Benz",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ford",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ferrari",
    image:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Audi",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Toyota",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Volkswagen",
    image:
      "https://images.unsplash.com/photo-1622353219448-46a009f0d9b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nissan",
    image:
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=800&q=80",
  },

];

function CarCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % carBrands.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrent(
      (previous) =>
        (previous - 1 + carBrands.length) % carBrands.length
    );
  };

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % carBrands.length);
  };

  return (
    <section className="car-carousel">
      <div className="car-carousel-heading">
        <span>OUR VEHICLE EXPERTISE</span>
        <h2>We Cater to All Makes</h2>
        <p>
          Quality vehicle glass solutions for a wide range of vehicles.
        </p>
      </div>

      <div className="car-carousel-content">
        <button
          className="carousel-arrow"
          onClick={previousSlide}
          aria-label="Previous car brand"
        >
          &#8592;
        </button>

        <div className="car-slide" key={current}>
          <img
            src={carBrands[current].image}
            alt={`${carBrands[current].name} vehicle`}
          />
          <div className="car-slide-overlay">
            <h3>{carBrands[current].name}</h3>
            <p>Vehicle glass solutions</p>
          </div>
        </div>

        <button
          className="carousel-arrow"
          onClick={nextSlide}
          aria-label="Next car brand"
        >
          &#8594;
        </button>
      </div>

      <div className="carousel-dots">
        {carBrands.map((brand, index) => (
          <button
            key={brand.name}
            className={index === current ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Show ${brand.name}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CarCarousel;
