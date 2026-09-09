import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>Got a chip, crack, or need a full replacement? Reach out and we'll get you sorted.</p>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="text" name="vehicle" placeholder="Vehicle Make & Model" />
          <textarea name="message" placeholder="Describe the damage or what you need" rows={4}></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        <div className="contact-details">
          <p><strong>Phone:</strong> 0800 123 4567</p>
          <p><strong>Email:</strong> info@yourwindscreen.co</p>
          <p><strong>Hours:</strong> Mon–Sat, 8am–6pm</p>
        </div>
      </div>
    </section>
  );
}
