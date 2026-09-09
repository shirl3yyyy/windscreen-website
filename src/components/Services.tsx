import "./Services.css";

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

const services: Service[] = [
    {
        id: "1",
        title: "Windscreen Replacement",
        description: "Full windscreen replacement using OEM-quality glass, fitted by certified technicians."
    },
    
    {
        id: "2",
        title: "Mobile fitting",
        description: "We come to your home or office",
    },

    {
        id: "3",
        title: "Side & Rear Window Replacement",
        description: "Replacement for door glass and rear windscreens on most makes and models."
    },

    {
        id: "4",
        title: "Insurance Claims Assistance",
        description: "We handle the paperwork directly with your insurer where possible."

    },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Windscreen repair and replacement you can trust</p>
      </div>

        <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

