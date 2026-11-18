
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Exports.css";

import heroImage from "../assets/hero.png";
import accumulatorImage from "../assets/Accumulator-Blow-Moulding-Machine.jpeg";
import continuousImage from "../assets/Continuous-Parision-blow-molding-machine.jpeg";
import polycarbonateImage from "../assets/Polycarbonate-Blow-Molding-Machine.jpeg";
import hydraulicImage from "../assets/Hydraulic-Injection-Moulding-Machine.jpeg";

const capabilities = [
    {
        number: "01",
        icon: "✓",
        title: "Quality Inspection",
        description:
            "Inspection against agreed requirements before machinery is prepared for dispatch.",
    },
    {
        number: "02",
        icon: "▤",
        title: "Export Documentation",
        description:
            "Coordination of shipment documents and the information required for export processing.",
    },
    {
        number: "03",
        icon: "◇",
        title: "Protective Packaging",
        description:
            "Packaging planned around machine dimensions, handling needs and transit protection.",
    },
    {
        number: "04",
        icon: "⇢",
        title: "Logistics Coordination",
        description:
            "Dispatch planning with logistics partners, aligned with your delivery requirements.",
    },
];

const products = [
    {
        name: "Accumulator Blow Moulding Machines",
        image: accumulatorImage,
        description:
            "Machinery designed for specific production and output requirements.",
    },
    {
        name: "Continuous Parison Blow Moulding Machines",
        image: continuousImage,
        description:
            "Continuous production solutions for manufacturing applications.",
    },
    {
        name: "Polycarbonate Blow Moulding Machines",
        image: polycarbonateImage,
        description:
            "Specialised machinery for polycarbonate product manufacturing.",
    },
    {
        name: "Hydraulic Injection Moulding Machines",
        image: hydraulicImage,
        description:
            "Hydraulic machinery for varied industrial moulding requirements.",
    },
];

const process = [
    {
        number: "01",
        title: "Customer Enquiry",
        description:
            "Discuss your product, application and manufacturing requirements.",
    },
    {
        number: "02",
        title: "Product Manufacturing",
        description:
            "Engineer and manufacture to the agreed machine configuration.",
    },
    {
        number: "03",
        title: "Quality Inspection",
        description:
            "Review the machine against agreed requirements before dispatch.",
    },
    {
        number: "04",
        title: "Packaging & Dispatch",
        description:
            "Prepare protective packaging, documentation and shipment coordination.",
    },
];

function Exports() {
    useEffect(() => {
        const elements = document.querySelectorAll(
            ".exports-scroll-reveal"
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
        <main className="exports-page">

            {/* HERO SECTION */}
            <section
                className="exports-hero"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="exports-hero-overlay"></div>

                <div className="exports-hero-content">

                    <div className="exports-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>›</span>
                        <span>Our Exports</span>
                    </div>

                    <div className="exports-eyebrow">
                        <span></span>
                        OUR GLOBAL REACH
                    </div>

                    <h1>
                        Engineering Beyond
                        <br />
                        Boundaries.
                    </h1>

                    <p className="exports-hero-description">
                        Delivering reliable manufacturing solutions through
                        precision engineering, quality standards and dependable
                        coordination.
                    </p>

                    <div className="exports-hero-buttons">
                        <a
                            href="#export-capabilities"
                            className="exports-primary-button"
                        >
                            Explore Our Capabilities <span>↓</span>
                        </a>

                        <Link
                            to="/contact"
                            className="exports-secondary-button"
                        >
                            Contact Us <span>↗</span>
                        </Link>
                    </div>

                </div>
            </section>

            {/* EXPORT CAPABILITIES */}
            <section
                className="export-capabilities"
                id="export-capabilities"
            >
                <div className="exports-section-container">

                    <div className="exports-section-heading exports-scroll-reveal">

                        <div className="exports-eyebrow dark-eyebrow">
                            <span></span>
                            EXPORT CAPABILITIES
                        </div>

                        <h2>
                            Prepared for every
                            <br />
                            stage of delivery.
                        </h2>

                        <p>
                            Careful planning from the factory floor to final
                            dispatch.
                        </p>

                    </div>

                    <div className="capability-grid">
                        {capabilities.map((item) => (
                            <article
                                className="capability-card exports-scroll-reveal"
                                key={item.number}
                            >
                                <div className="capability-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>
            {/* EXPORT PROCESS */}
            <section className="export-process">
                <div className="exports-section-container">

                    <div className="exports-section-heading exports-scroll-reveal">

                        <div className="exports-eyebrow dark-eyebrow">
                            <span></span>
                            OUR EXPORT PROCESS
                        </div>

                        <h2>
                            A considered approach,
                            <br />
                            from start to shipment.
                        </h2>

                    </div>

                    <div className="export-process-grid">
                        {process.map((item) => (
                            <article
                                className="process-step exports-scroll-reveal"
                                key={item.number}
                            >
                                <div className="process-number-row">
                                    <span className="process-number">
                                        {item.number}
                                    </span>

                                    <span className="process-line"></span>
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Exports;
