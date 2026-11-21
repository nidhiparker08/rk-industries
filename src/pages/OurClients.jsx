
import { useEffect } from "react";
import "./OurClients.css";

import heroImage from "../assets/hero.png";
import automotiveImage from "../assets/automobile.jpeg";
import manufacturingImage from "../assets/manifacture3.jpeg";
import engineeringImage from "../assets/engineering.png";
import infrastructureImage from "../assets/hero.jpeg";
import machineryImage from "../assets/machinery.png";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.jpeg";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";
import client8 from "../assets/client8.png";
import client9 from "../assets/client9.png";
import client10 from "../assets/client10.png";
import client11 from "../assets/client11.png";
import client12 from "../assets/client12.png";
import client13 from "../assets/client13.png";
import client14 from "../assets/client14.png";
import client15 from "../assets/client15.png";

const clients = [
    { name: "Client 01", image: client1 },
    { name: "Client 02", image: client2 },
    { name: "Client 03", image: client3 },
    { name: "Client 04", image: client4 },
    { name: "Client 05", image: client5 },
    { name: "Client 06", image: client6 },
    { name: "Client 07", image: client7 },
    { name: "Client 08", image: client8 },
     { name: "Client 09", image: client9 },
    { name: "Client 10", image: client10 },
     { name: "Client 11", image: client11 },
    { name: "Client 12", image: client12 },
    { name: "Client 13", image: client13 },
    { name: "Client 14", image: client14 },
    { name: "Client 15", image: client15 },
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
                        {clients.map((client) => (
                            <div
                                className="client-logo-card clients-scroll-reveal"
                                key={client.name}
                            >
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="client-logo-image"
                                />
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
