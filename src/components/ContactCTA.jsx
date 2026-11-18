
import "./ContactCTA.css";
import { ArrowUpRight, Phone } from "lucide-react";
import factoryImage from "../assets/WhatsApp Image 2026-11-13 at 5.27.52 PM.jpeg";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <img
        src={factoryImage}
        alt="Industrial machinery"
        className="contact-cta-bg"
      />

      <div className="contact-cta-overlay"></div>

      <div className="contact-cta-content">
        <div className="contact-cta-text">
          <span className="contact-cta-label">
            CUSTOMER ENQUIRY
          </span>

          <h2>
            Have a product in mind? Let's engineer the machine for it.
          </h2>

          <p>
            Share your product, material and output goals. Our team
            will get back to you to discuss the right machine
            configuration.
          </p>
        </div>

        <div className="contact-cta-action">
          <a href="/contact" className="contact-cta-button">
            Send an Enquiry <ArrowUpRight size={18} />
          </a>

          <p>
            <Phone size={15} />
            Or call <a href="tel:+919022495655">+91 90224 95655</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
