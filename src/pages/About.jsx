
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./About.css";

import aboutImage from "../assets/Hero.jpeg";
import factoryImage from "../assets/Accumulator-Blow-Moulding-Machine.jpeg";
import machineImage from "../assets/Polycarbonate-Blow-Molding-Machine.jpeg";
import accumulatorImage from "../assets/Accumulator-Blow-Moulding-Machine.jpeg";
import hydraulicImage from "../assets/Hydraulic-Injection-Moulding-Machine.jpeg";
import machineImage2 from "../assets/hero-machine.jpeg";
import drumImage from "../assets/drums-bg.png";
import bigdrumImage from "../assets/bigdrum-bg.png";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(`
      .about-intro-text,
      .about-intro-image,
      .about-expertise-content,
      .about-expertise-image,
      .about-feature-card,
      .about-value-card,
      .about-why-section .about-section-heading,
      .about-why-card,
      .about-contact-banner
    `);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => {
      element.classList.add("about-scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO SECTION */}
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

        {/* COMPANY INTRODUCTION */}
        <section className="about-intro-section">
          <div className="about-section-container">

            <div className="about-intro-grid">

              <div className="about-intro-text">
                <p>
                  Established in 2014, Rajkumari Industries (R.K Industries)
                  is a growing engineering and manufacturing company
                  specializing in the design, development and manufacturing
                  of high-performance Extrusion Blow Moulding Machines and
                  Plastic Processing Machinery.
                </p>

                <p>
                  With a strong focus on innovation, quality and customer
                  satisfaction, we have built our reputation by delivering
                  reliable, technologically advanced and customized
                  machinery solutions to meet the evolving requirements
                  of the plastic manufacturing industry.
                </p>

                <p>
                  Over the years, we have expanded our capabilities beyond
                  machine manufacturing to provide a comprehensive range
                  of machinery components, automation solutions and
                  industrial equipment under one roof.
                </p>

                <div className="about-intro-divider"></div>
              </div>

              <div className="about-intro-image">
                <img
                  src={factoryImage}
                  alt="RK Industries factory building"
                />
              </div>

            </div>

            {/* EXPERTISE AND PRODUCT RANGE */}
            <div className="about-expertise-grid">

              <div className="about-expertise-content">
                <div className="about-section-heading">
                  <span></span>
                  <h2>Our Expertise & Product Range</h2>
                </div>

                <p className="about-section-subtitle">
                  We specialize in manufacturing and supplying:
                </p>

                <div className="about-product-list">
                  <ul>
                    <li>Extrusion Blow Moulding Machines</li>
                    <li>Polycarbonate Blow Moulding Machines</li>
                    <li>Accumulator Heads</li>
                    <li>Screw & Barrel Assemblies</li>
                    <li>IBC Leak Testing Systems</li>
                  </ul>

                  <ul>
                    <li>LBM Blow Pin Table and Specialized Tooling</li>
                    <li>Hydraulic Systems, Valves and Power Packs</li>
                    <li>Electrical Control Panels</li>
                    <li>PLC-Based Automation and Control Systems</li>
                    <li>Customized Machinery and Industrial Solutions</li>
                  </ul>
                </div>

                <p className="about-expertise-description">
                  Our integrated manufacturing capabilities allow us to
                  provide complete solutions, from machine design and
                  fabrication to assembly, automation, installation
                  and commissioning.
                </p>
              </div>

              <div className="about-expertise-image">
                <img
                  src={machineImage}
                  alt="Polycarbonate blow moulding machine"
                />
              </div>

            </div>

            {/* INNOVATION AND GLOBAL PRESENCE */}
            <div className="about-feature-grid">

              <div className="about-feature-card about-innovation-card">
                <div className="about-feature-icon">✦</div>

                <div className="about-feature-content">
                  <h3>Innovation That Sets Us Apart</h3>

                  <p>
                    Innovation has always been at the core of Rajkumari
                    Industries. We take pride in being among the first
                    manufacturers in India to develop a specialized blow
                    moulding machine for Polycarbonate (PC) material,
                    demonstrating our commitment to engineering innovation
                    and advanced manufacturing technology.
                  </p>

                  <p>
                    Our approach combines practical industry knowledge,
                    customized engineering, modern automation and
                    continuous product development to deliver machinery
                    that meets demanding production requirements.
                  </p>
                </div>

                <img
                  src={drumImage}
                  alt="Industrial plastic drums"
                />
              </div>

              <div className="about-feature-card about-presence-card">
                <div className="about-feature-icon">◎</div>

                <div className="about-feature-content">
                  <h3>Our Global Presence</h3>

                  <p>
                    Our commitment to quality and engineering excellence
                    has enabled us to extend our business beyond India and
                    serve international markets. We have successfully
                    exported our machinery and engineering solutions to:
                  </p>

                  <div className="about-country-list">
                    <div>
                      <img src="https://flagcdn.com/w40/sa.png" alt="Saudi Arabia" />
                      <span>Saudi Arabia</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/vn.png" alt="Vietnam" />
                      <span>Vietnam</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/sd.png" alt="Sudan" />
                      <span>Sudan</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/qa.png" alt="Qatar" />
                      <span>Qatar</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/ae.png" alt="UAE" />
                      <span>Sharjah, UAE</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/ug.png" alt="Uganda" />
                      <span>Uganda</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/ng.png" alt="Nigeria" />
                      <span>Nigeria</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/dz.png" alt="Algeria" />
                      <span>Algeria</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/mx.png" alt="Mexico" />
                      <span>Mexico</span>
                    </div>
                    <div>
                      <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh" />
                      <span>Bangladesh</span>
                    </div>
                  </div>
                  </div>
                </div>

              </div>

              {/* LEADERSHIP, MISSION AND VISION */}
              <div className="about-values-grid">

                <div className="about-value-card about-leadership-card">
                  <div className="about-value-icon">♙</div>

                  <h3>Leadership & Vision</h3>

                  <p>
                    Rajkumari Industries was founded by Mr. ManojKumar
                    Pandey, Founder & Director, with a vision to develop
                    innovative, reliable and technologically advanced
                    machinery solutions for the plastic processing industry.
                    Under his leadership, the company has continuously
                    focused on engineering innovation, product development,
                    manufacturing capabilities and customer-oriented
                    solutions.
                  </p>
                </div>

                <div className="about-value-card">
                  <div className="about-value-icon">◎</div>

                  <h3>Our Mission</h3>

                  <p>
                    To design and manufacture innovative, reliable and
                    cost-effective machinery solutions that empower plastic
                    manufacturers to improve productivity, efficiency and
                    product quality.
                  </p>
                </div>

                <div className="about-value-card">
                  <div className="about-value-icon">◈</div>

                  <h3>Our Vision</h3>

                  <p>
                    To become a globally recognized engineering and
                    manufacturing company, setting new benchmarks in
                    blow moulding technology, industrial automation and
                    customized machinery solutions.
                  </p>
                </div>

              </div>

              {/* WHY CHOOSE US */}
              <section className="about-why-section">

                <div className="about-section-heading">
                  <span></span>
                  <h2>Why Choose Rajkumari Industries?</h2>
                </div>

                <div className="about-why-grid">

                  <div className="about-why-card">
                    <div>⚙</div>
                    <h3>Engineering Innovation</h3>
                    <p>
                      Developing specialized machinery for challenging
                      applications.
                    </p>
                  </div>

                  <div className="about-why-card">
                    <div>✓</div>
                    <h3>Manufacturing Expertise</h3>
                    <p>
                      Experience in blow moulding machinery since 2014.
                    </p>
                  </div>

                  <div className="about-why-card">
                    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#123d78"><path d="M17.15,20.7L11.1,14.6q-0.5,0.2-1.01,0.3Q9.58,15 9,15q-2.5,0-4.25-1.75T3,9Q3,8.1 3.25,7.29t0.7-1.54L7.6,9.4L9.4,7.6L5.75,3.95Q6.48,3.5 7.29,3.25T9,3q2.5,0 4.25,1.75T15,9q0,0.57-0.1,1.09T14.6,11.1l6.1,6.05q0.3,0.3 0.3,0.73T20.7,18.6l-2.1,2.1Q18.3,21 17.88,21t-0.72-0.3Zm0.72-2.13l0.68-0.68l-6.4-6.4Q12.6,11 12.8,10.34T13,9q0-1.5-0.96-2.61T9.65,5.05L11.5,6.9q0.3,0.3 0.3,0.7T11.5,8.3L8.3,11.5Q8,11.8 7.6,11.8T6.9,11.5L5.05,9.65q0.22,1.43 1.34,2.39T9,13q0.65,0 1.3-0.2t1.18-0.63l6.4,6.4ZM11.8,11.8Z"/></svg></div>
                    <h3>Customized Solutions</h3>
                    <p>
                      Machinery designed around specific customer needs.
                    </p>
                  </div>

                  <div className="about-why-card">
                    <div>▦</div>
                    <h3>Integrated Capabilities</h3>
                    <p>
                      Machinery, components, hydraulics and automation.
                    </p>
                  </div>

                  <div className="about-why-card">
                    <div>◎</div>
                    <h3>International Experience</h3>
                    <p>
                      Serving customers across multiple global markets.
                    </p>
                  </div>

                  <div className="about-why-card">
                    <div>◇</div>
                    <h3>Customer Commitment</h3>
                    <p>
                      Focus on quality, reliability and long-term support.
                    </p>
                  </div>

                </div>
              </section>

            </div>
        </section>

      </main>
    </>
  );
}

export default About;
