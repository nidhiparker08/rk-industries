
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid"></div>

      <div className="footer-container">
        {/* Company information */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src="/logo.jpeg"
              alt="RK Industries Logo"
              className="footer-logo-image"
            />

            <span className="logo-text">
              <strong>RK INDUSTRIES</strong>
              <small>MOULDING YOUR VISION</small>
            </span>
          </Link>

          <p className="footer-description">
            RK Industries is an industrial machinery manufacturer
            focused on blow moulding and custom-engineered production
            equipment. We work alongside manufacturers to understand
            their products, their output goals and their floor
            constraints — then engineer machines to match.
          </p>

          <p className="footer-tagline">
            Crafting Reliability. Moulding Your Vision.
          </p>
        </div>

        {/* Company links */}
        <div className="footer-column">
          <h3>COMPANY</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/exports">Exports</a>
          <a href="/our-clients">Our Clients</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Product links */}
        <div className="footer-column">
          <h3>PRODUCTS</h3>
          <a href="/products">Extrusion Blow Moulding Machines</a>
          <a href="/products">Accumulator Type Machines</a>
          <a href="/products">Continuous Parison Machines</a>
          <a href="/products">Single Layer Machines</a>
          <a href="/products">Multi Layer Machines</a>
          <a href="/products">Customized Machinery</a>
        </div>

        {/* Contact information */}
        <div className="footer-column footer-contact">
          <h3>GET IN TOUCH</h3>

          <div className="footer-contact-item">
            <span className="footer-icon">⌖</span>
            <span>
              H-9 Sharad Industrial Estate,<br />
              Lake Rd,<br />
              Bhandup – 400078 <br />
              Maharashtra, India
            </span>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">♧</span>
            <a href="tel:+919022495655">+91 90224 95655</a>
            /
            <a href="tel:+918108149997">+91 81081 49997</a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">✉</span>
            <a href="mailto:rkindustries.blowtech@gmail.com">
              rkindustries.blowtech@gmail.com
              <br />
              rkindustries@hotmail.com
              <br />
              mkp.rkindustries@gmail.com
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">◷</span>
            <span>Mon – Sat, 9:30 AM – 6:30 PM</span>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/rk_industries9233?srtk=czc4cmtscW15ZnJq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/channel/UC_5YT2gTBPdLBhiDN21DQ7A?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
            </a>
          </div>

          <a href="/contact" className="footer-enquiry">
            Send an enquiry <span>↗</span>
          </a>
        </div>
      </div>

      <div className="about-credit">
        Design and Develop By <span>Nidhi Parker</span>
      </div>

      <div className="footer-bottom"></div>
    </footer>
  );
}

export default Footer;
