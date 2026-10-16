import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Safe-view <span>Windscreens</span>
          </a>

          <p>
            Protect your vision and enhance your driving experience.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Safe-view Windscreens.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
