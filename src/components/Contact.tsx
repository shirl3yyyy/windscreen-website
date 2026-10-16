import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <span className="contact-label">LET'S GET YOU BACK ON THE ROAD</span>

        <h2>Request a Free Quote</h2>

        <p className="contact-description">
          Tell us what your vehicle needs, and get in touch with our team
          for a quote on our vehicle glass services.
        </p>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Your form is ready to be connected to a messaging service.");
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. 0712 345 678"
              autoComplete="tel"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="vehicle">Vehicle Make and Model</label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              placeholder="e.g. Toyota Axio"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Required</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="windscreen-replacement">
                Windscreen Replacement
              </option>
              <option value="car-window-replacement">
                Car Window Replacement
              </option>
              <option value="other">Other Enquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us what you need..."
              rows={4}
            />
          </div>

          <button type="submit" className="contact-button">
            Request My Quote →
          </button>
        </form>

        <div className="contact-details">
          <p>
            <strong>Phone:</strong> Replace with your business phone number
          </p>
          <p>
            <strong>Email:</strong> Replace with your business email
          </p>
          <p>
            <strong>Hours:</strong> Add your confirmed business hours
          </p>
        </div>
      </div>
    </section>
  );
}