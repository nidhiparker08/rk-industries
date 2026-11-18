
import "./Hero.css";
import heroImg from "../assets/Hero.jpeg";

const heroIntro =
  "RK Industries designs and builds industrial machinery for plastic processing — engineered for dependable output, precise control and long service life.";

const productCategories = [
  { name: "Extrusion Blow Moulding Machines", slug: "extrusion-blow-moulding" },
  { name: "Accumulator Type Machines", slug: "accumulator-type" },
  { name: "Continuous Parison Machines", slug: "continuous-parison" },
  { name: "Single Layer Machines", slug: "single-layer" },
  { name: "Multi Layer Machines", slug: "multi-layer" },
  { name: "Customized Machinery", slug: "customized-machinery" },
];

function Hero() {
  return (
    <section className="hero" id="home">

      {/* BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="Industrial plastic processing machinery"
        className="hero-background"
        fetchPriority="high"
      />

      {/* BACKGROUND OVERLAYS */}
      <div className="hero-overlay"></div>
      <div className="hero-bottom-overlay"></div>
      <div className="hero-grid"></div>

      {/* HERO CONTENT */}
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-eyebrow">
            <span></span>
            INDUSTRIAL MACHINERY MANUFACTURER
          </p>

          <h1 className="hero-title">
            Engineering
            <br />
            Precision.
            <br />
            <span>Delivering</span>
            <br />
            <span>Possibilities.</span>
          </h1>

          <p className="hero-description">
            {heroIntro}
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a href="#products" className="hero-btn hero-btn-gold">
              Explore Products
              <span>→</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-outline">
              Request a Quote
              <span>↗</span>
            </a>

          </div>
        </div>

        {/* PRODUCT CATEGORY STRIP */}
        <div className="hero-categories">

          {productCategories.map((category, index) => (
            <a
              href={`/products?category=${category.slug}`}
              className="hero-category"
              key={category.slug}
            >
              <span className="category-name">
                {category.name}
              </span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Hero;
