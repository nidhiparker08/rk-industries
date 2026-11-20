
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./About.css";

import aboutImage from "../assets/hero.png";
import factoryImage from "../assets/machine2.jpeg";
import machineImage from "../assets/molten.png";
import materialImage from "../assets/rubber.png";
import founderImage from "../assets/founders.jpeg";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-new-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* EXISTING HERO — KEEPING IT UNCHANGED */}
        <section className="about-hero">
          <img
            src={aboutImage}
            alt="RK Industries manufacturing facility"
            className="about-background"
          />

          <div className="about-overlay"></div>
          <div className="about-hero-grid"></div>

          <div className="about-hero-container">
            <div className="about-breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>About Us</span>
            </div>

            <div className="about-content">
              <div className="about-eyebrow">
                <span></span>
                ABOUT US
              </div>

              <h1 className="about-title">
                Rajkumari Industries
                <br />
                (R.K Industries)
              </h1>

              <p className="about-description">
                Engineering Innovation. Manufacturing Excellence.
              </p>
            </div>
          </div>
        </section>

        <div className="about-bottom"></div>

        {/* 01 — OUR STORY */}
        <section className="about-new-section about-story">
          <div className="about-new-container">
            <div className="about-story-grid">

              <div className="about-new-content about-new-reveal">
                <div className="about-new-label">
                  <span>01.</span> OUR STORY
                </div>

                <h2>
                  Engineering Beyond
                  <span> Expectations.</span>
                </h2>

                <p>
                  Established in 2014, R.K. Industries (Rajkumari Industries)
                  is an engineering and manufacturing company specializing
                  in the design, development and manufacturing of
                  high-performance Extrusion Blow Moulding Machines and
                  Plastic Processing Machinery.
                </p>

                <p>
                  Founded with a vision to develop reliable, high-performance
                  machinery, we combine engineering expertise with practical
                  manufacturing knowledge to meet the evolving requirements
                  of the plastic processing industry.
                </p>

                <p>
                  Our capabilities extend across machinery, components,
                  automation solutions and customized industrial equipment,
                  allowing us to support a wide range of manufacturing needs.
                </p>

                <div className="about-story-highlights">
                  <div className="about-story-highlight">
                    <span className="about-highlight-icon">▦</span>
                    <div>
                      <strong>2014</strong>
                      <small>Established</small>
                    </div>
                  </div>

                  <div className="about-story-highlight">
                    <span className="about-highlight-icon">⚙</span>
                    <div>
                      <strong>Advanced Engineering</strong>
                      <small>& Innovation</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-new-image about-story-image about-new-reveal">
                <img
                  src={factoryImage}
                  alt="RK Industries manufacturing facility"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 02 — OUR EXPERTISE */}
        <section className="about-new-section about-expertise">
          <div className="about-new-container">
            <div className="about-expertise-grid">

              <div className="about-new-image about-expertise-image about-new-reveal">
                <img
                  src={machineImage}
                  alt="Blow moulding machinery"
                />
              </div>

              <div className="about-new-content about-new-reveal">
                <div className="about-new-label">
                  <span>02.</span> OUR EXPERTISE
                </div>

                <h2>
                  Solutions for Every
                  <span> Industry.</span>
                </h2>

                <p>
                  We specialize in manufacturing blow moulding machinery
                  and solutions for a diverse range of products and
                  industrial applications.
                </p>

                <div className="about-expertise-cards">
                  <div className="about-expertise-card">
                    <span>⚙</span>
                    <strong>Automobile<br />Components</strong>
                  </div>

                  <div className="about-expertise-card">
                    <span>♧</span>
                    <strong>Agricultural<br />Components</strong>
                  </div>

                  <div className="about-expertise-card">
                    <span>▤</span>
                    <strong>Accumulator<br />Products</strong>
                  </div>

                  <div className="about-expertise-card">
                    <span>♧</span>
                    <strong>Toys & Consumer<br />Products</strong>
                  </div>

                  <div className="about-expertise-card">
                    <span>◈</span>
                    <strong>PC Tanks</strong>
                  </div>

                  <div className="about-expertise-card">
                    <span>▥</span>
                    <strong>Multi-Layer<br />Barrels & Tanks</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 03 — MATERIAL TECHNOLOGY */}
        <section className="about-new-section about-material">
          <div className="about-new-container">
            <div className="about-material-grid">

              <div className="about-new-content about-new-reveal">
                <div className="about-new-label">
                  <span>03.</span> MATERIAL TECHNOLOGY
                </div>

                <h2>
                  Mastering Advanced
                  <span> Materials.</span>
                </h2>

                <p>
                  One of our key strengths is our expertise in developing
                  blow moulding machinery for challenging and specialized
                  thermoplastic materials. Our machinery solutions are
                  designed to handle a range of materials, including:
                </p>

                <div className="about-material-tags">
                  <span>PC</span>
                  <span>ABS</span>
                  <span>PP</span>
                  <span>PE</span>
                </div>

                <small>
                  Engineered solutions for complex material processing
                  requirements.
                </small>
              </div>

              <div className="about-new-image about-material-image about-new-reveal">
                <img
                  src={materialImage}
                  alt="Plastic material and manufactured products"
                />
              </div>

            </div>
          </div>
        </section>

{/* 04 — VISION, MISSION & LEADERSHIP */}

<section className="about-leadership">

  <div className="about-new-container">

    {/* VISION & MISSION */}
    <div className="about-direction-panel about-new-reveal">

      <div className="about-direction-heading">
        <div className="about-leadership-label">
          <span></span>
          04. OUR DIRECTION
        </div>

        <h2>Our Vision &amp; Mission.</h2>
      </div>

      <div className="about-direction-grid">

        {/* VISION */}
        <div className="about-direction-item">

          <div className="about-direction-icon">
            ◎
          </div>

          <div className="about-direction-content">
            <h3>Our Vision</h3>

            <p>
              To become a globally recognized engineering
              and manufacturing company in the blow moulding
              industry.
            </p>
          </div>

        </div>

        {/* MISSION */}
        <div className="about-direction-item">

          <div className="about-direction-icon">
            ◎
          </div>

          <div className="about-direction-content">
            <h3>Our Mission</h3>

            <p>
              To develop innovative, reliable and cost-effective
              machinery solutions for complex manufacturing
              requirements.
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* LEADERSHIP & WHY CHOOSE US */}
    <div className="about-leadership-bottom">

      {/* FOUNDER IMAGE */}
      <div className="about-founder about-new-reveal">

        <img
          src={founderImage}
          alt="Mr. ManojKumar Pandey, Founder and Director"
        />

      </div>


      {/* LEADERSHIP INFORMATION */}
      <div className="about-leadership-info about-new-reveal">

        <div className="about-leadership-label">
          <span></span>
          05. LEADERSHIP
        </div>

        <h3>Driven by Engineering Excellence.</h3>

        <p>
          Founded by <strong>Mr. ManojKumar Pandey</strong>,
          R.K. Industries combines engineering knowledge
          and technical expertise with a passion for innovation.
          The company continues to focus on product development
          and customer-oriented manufacturing solutions.
        </p>

      </div>


      {/* WHY CHOOSE US */}
      <div className="about-why-choose about-new-reveal">

        <h3>Why Choose R.K. Industries?</h3>

        <ul>
          <li>Established engineering expertise since 2014</li>
          <li>Specialized capabilities in challenging applications</li>
          <li>Expertise in PC, ABS, PP and PPCP materials</li>
          <li>Customized solutions for diverse industries</li>
          <li>Commitment to quality and innovation</li>
        </ul>

      </div>

    </div>

  </div>

</section>



        {/* 05 — BOTTOM CTA */}
        <section className="about-new-cta-section">
        
        </section>

      </main>
    </>
  );
}

export default About;
