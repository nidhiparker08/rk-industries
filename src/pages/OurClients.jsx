
import { useEffect } from "react";
import "./OurClients.css";

import heroImage from "../assets/Hero.jpeg";
import automotiveImage from "../assets/automobile.jpeg";
import manufacturingImage from "../assets/hero-machine.jpeg";
import engineeringImage from "../assets/Hydraulic-Injection-Moulding-Machine.jpeg";
import infrastructureImage from "../assets/Continuous-Parision-blow-molding-machine.jpeg";
import machineryImage from "../assets/Accumulator-Blow-Moulding-Machine.jpeg";

const clients = [
    "Client logo 01",
    "Client logo 02",
    "Client logo 03",
    "Client logo 04",
    "Client logo 05",
    "Client logo 06",
    "Client logo 07",
    "Client logo 08",
];

const industries = [
    {
        title: "Automotive",
        description:
            "Manufacturing solutions for automotive components.",
        image: automotiveImage,
    },
    {
        title: "Industrial Manufacturing",
        description:
            "Machinery tailored to production requirements.",
        image: manufacturingImage,
    },
    {
        title: "Engineering",
        description:
            "Precision-led solutions for technical applications.",
        image: engineeringImage,
    },
    {
        title: "Infrastructure",
        description:
            "Equipment for large-scale production needs.",
        image: infrastructureImage,
    },
    {
        title: "Industrial Machinery",
        description:
            "Purpose-built systems for industrial processes.",
        image: machineryImage,
    },
];

const reasons = [
    {
        icon: "♧",
        title: "Quality Assurance",
        description:
            "Attention to requirements, materials and inspection throughout the manufacturing process.",
    },
    {
        icon: "◎",
        title: "Engineering Precision",
        description:
            "Thoughtful machine design aligned with the product, process and production goals.",
    },
    {
        icon: "♧",
        title: "Reliable Delivery",
        description:
            "Clear communication and coordinated planning from order discussion to dispatch.",
    },
    {
        icon: "♧",
        title: "Long-Term Relationships",
        description:
            "A collaborative approach that values your requirements beyond a single project.",
    },
];

function OurClients() {
    useEffect(() => {
        const elements = document.querySelectorAll(
            ".clients-scroll-reveal"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="our-clients-page">

            {/* HERO SECTION */}
            <section
                className="clients-hero"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="clients-hero-overlay"></div>

                <div className="clients-hero-content">

                    <div className="clients-breadcrumb clients-hero-reveal">
                        <a href="/">Home</a>
                        <span>›</span>
                        <span>Our Clients</span>
                    </div>

                    <div className="clients-eyebrow clients-hero-reveal">
                        <span></span>
                        OUR CLIENTS & PARTNERS
                    </div>

                    <h1 className="clients-hero-reveal">
                        Built on Trust. Driven
                        <br />
                        by Excellence.
                    </h1>

                    <p className="clients-hero-description clients-hero-reveal">
                        Strong business relationships are built through
                        quality, reliability and a commitment to delivering
                        the right solutions.
                    </p>

                </div>
            </section>

            {/* CLIENT PORTFOLIO */}
            <section className="client-portfolio">
                <div className="clients-container">

                    <div className="clients-section-heading clients-scroll-reveal">
                        <div className="clients-eyebrow dark-clients-eyebrow">
                            <span></span>
                            CLIENT PORTFOLIO
                        </div>

                        <h2>Relationships that matter.</h2>
                    </div>

                    <div className="client-logo-grid">
                        {clients.map((client, index) => (
                            <div
                                className="client-logo-card clients-scroll-reveal"
                                key={client}
                            >
                                <div className="client-logo-placeholder">
                                    <span className="client-placeholder-icon">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="3"
                                                y="3"
                                                width="18"
                                                height="18"
                                                rx="2"
                                                stroke="currentColor"
                                                strokeWidth="1.3"
                                            />
                                            <circle
                                                cx="9"
                                                cy="9"
                                                r="2"
                                                stroke="currentColor"
                                                strokeWidth="1.3"
                                            />
                                            <path
                                                d="M21 15L16 10L5 21"
                                                stroke="currentColor"
                                                strokeWidth="1.3"
                                            />
                                        </svg>
                                    </span>

                                    <span>
                                        {client} · Pending
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* INDUSTRIES WE SERVE */}
            <section className="clients-industries">
                <div className="clients-container">

                    <div className="clients-section-heading clients-scroll-reveal">
                        <div className="clients-eyebrow dark-clients-eyebrow">
                            <span></span>
                            INDUSTRIES WE SERVE
                        </div>

                        <h2>
                            Different industries.
                            <br />
                            Shared ambition.
                        </h2>
                    </div>

                    <div className="clients-industries-grid">
                        {industries.map((industry) => (
                            <article
                                className="industry-card clients-scroll-reveal"
                                key={industry.title}
                            >
                                <div className="industry-card-image">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                    />
                                </div>

                                <div className="industry-card-content">
                                    <span className="industry-card-line"></span>

                                    <h3>{industry.title}</h3>

                                    <p>{industry.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* WHY CLIENTS CHOOSE US */}
            <section className="clients-why-us">
                <div className="clients-container">

                    <div className="clients-section-heading clients-scroll-reveal">
                        <div className="clients-eyebrow dark-clients-eyebrow">
                            <span></span>
                            WHY OUR CLIENTS CHOOSE US
                        </div>

                        <h2>
                            A commitment that goes
                            <br />
                            beyond the machine.
                        </h2>
                    </div>

                    <div className="clients-reasons-grid">
                        {reasons.map((reason) => (
                            <article
                                className="client-reason-card clients-scroll-reveal"
                                key={reason.title}
                            >
                                <div className="client-reason-icon">
                                    {reason.icon}
                                </div>

                                <h3>{reason.title}</h3>

                                <p>{reason.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}

export default OurClients;
