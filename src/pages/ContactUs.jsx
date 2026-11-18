
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const templateParams = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">

      <div className="contact-container">

        {/* HEADING */}
        <div className="contact-heading">
          <h1>HAVE SOME QUESTIONS?</h1>

          <div className="contact-location">
            <span>◎</span>
            <span>RK INDUSTRIES</span>
            <span className="location-divider">:</span>
            <span>Get in touch with our team</span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="contact-content">

          
{/* ENVELOPE ILLUSTRATION */}
<div className="contact-illustration">
  <svg
    className="contact-envelope-svg"
    viewBox="0 0 420 340"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    {/* Shadow */}
    <ellipse
      cx="210"
      cy="300"
      rx="150"
      ry="15"
      fill="#000000"
      opacity="0.12"
    />

    {/* Letter */}
    <rect
      x="105"
      y="35"
      width="210"
      height="225"
      rx="8"
      fill="#FFFFFF"
      stroke="#F5BD00"
      strokeWidth="3"
    />

    {/* Letter heading */}
    <rect x="130" y="65" width="95" height="9" rx="4" fill="#F5BD00" />

    {/* Letter lines */}
    <g stroke="#AAB5BF" strokeWidth="4" strokeLinecap="round">
      <path d="M130 105 H285" />
      <path d="M130 125 H270" />
      <path d="M130 145 H285" />
      <path d="M130 165 H255" />
      <path d="M130 185 H280" />
      <path d="M130 205 H235" />
    </g>

    {/* Envelope back */}
    <rect
      x="65"
      y="145"
      width="290"
      height="155"
      rx="10"
      fill="#172638"
      stroke="#F5BD00"
      strokeWidth="4"
    />

    {/* Left and right folds */}
    <path
      d="M68 155 L210 255 L352 155"
      fill="#22374D"
      stroke="#F5BD00"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* Bottom envelope fold */}
    <path
      d="M68 295 L178 210 L210 235 L242 210 L352 295"
      fill="#101D2C"
      stroke="#F5BD00"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* Center fold detail */}
    <path
      d="M68 295 L178 210"
      stroke="#F5BD00"
      strokeWidth="2"
      opacity="0.7"
    />

    <path
      d="M352 295 L242 210"
      stroke="#F5BD00"
      strokeWidth="2"
      opacity="0.7"
    />

    {/* Small decorative accent */}
    <circle cx="210" cy="258" r="5" fill="#F5BD00" />

  </svg>
</div>


          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

              </div>

              <input
                type="email"
                name="email"
                placeholder="What's your email?"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="What's your mobile number?"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your questions..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status === "success" && (
                <p className="contact-success">
                  ✓ Your message has been sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="contact-error">
                  Something went wrong. Please try again.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;
