import "./Services.css";

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

const services = [
  {
    icon: "🚘",
    title: "Windscreen Replacement",
    description:
      "Replacement services for damaged windscreens, with attention to fit, safety, and quality.",
  },
  {
    icon: "🪟",
    title: "Car Window Replacement",
    description:
      "Professional replacement of damaged vehicle side and rear windows.",
  },
  {
    icon: "🛡️",
    title: "Insurance Assistance",
    description:
      "We help customers understand the documentation and process involved in insurance claims.",
  },
  {
    icon: "✨",
    title: "Glass Polishing",
    description:
      "Glass care services designed to improve clarity where the condition of the glass allows.",
  },
  {
    icon: "🔍",
    title: "Glass Inspection",
    description:
      "We assess visible damage and help you understand the suitable repair or replacement options.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <span className="services-label">WHAT WE DO</span>
        <h2>Our Windscreen Services</h2>
        <p>
          Reliable vehicle glass solutions to help you drive
          with greater clarity and confidence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <a href="#contact" className="service-link">
              Enquire now <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>


<div className="whatsapp-contact">
  <h3>Need our services?</h3>
  <p>Contact us on WhatsApp for enquiries and bookings.</p>

  <a
    href="https://wa.me/254757520754"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
    💬 Chat with us on WhatsApp
  </a>
</div>


    </section>
  );
}

export default Services;