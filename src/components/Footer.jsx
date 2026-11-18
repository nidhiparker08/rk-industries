
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid"></div>

      <div className="footer-container">
        {/* Company information */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-mark">RK</div>
            <div>
              <h2>RK INDUSTRIES</h2>
              <span>MOULDING YOUR VISION</span>
            </div>
          </div>

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
            <a href="tel:+91XXXXXXXXXX">+91 80806 48997</a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">✉</span>
            <a href="mailto:enquiry@yourdomain.com">
              rkindustries.blowtech@gmail.com
              <br />
              rkindustries@hotmail.com
              <br />
              mkp.industries@gmail.com
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">◷</span>
            <span>Mon – Sat, 9:30 AM – 6:30 PM</span>
          </div>

          <a href="/contact" className="footer-enquiry">
            Send an enquiry <span>↗</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom"></div>
    </footer>
  );
}

export default Footer;
