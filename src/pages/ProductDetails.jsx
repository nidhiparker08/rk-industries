
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "./Products";
import "./ProductDetails.css";

const productDetails = {
  "polycarbonate-blow-molding": {
    description:
      "The 6 Gallons Polycarbonate Blow Molding Machine is designed for manufacturing hollow polycarbonate containers. It is suitable for producing large-capacity containers used in water storage and other packaging applications.",
    applications: [
      "Large-capacity water containers",
      "Reusable water bottles",
      "Polycarbonate storage containers",
      "Hollow plastic packaging products",
    ],
    features: [
      "Designed for polycarbonate container manufacturing",
      "Suitable for hollow product formation",
      "Developed for industrial production environments",
    ],
  },

  "blow-molding": {
    description:
      "The 60 Liters Blow Moulding Machine is designed for manufacturing large hollow plastic containers. It is suitable for industrial applications where durable plastic storage and packaging products are required.",
    applications: [
      "Industrial storage containers",
      "Plastic drums",
      "Large-capacity cans",
      "Hollow plastic vessels",
    ],
    features: [
      "Designed for large-container manufacturing",
      "Suitable for industrial plastic processing",
      "Supports hollow plastic product formation",
    ],
  },

  "accumulator-blow-molding": {
    description:
      "The 15 Liters Double Station Accumulator Blow Moulding Machine is designed for producing medium-sized hollow plastic products. Its accumulator-based system supports the processing of plastic material for moulding applications.",
    applications: [
      "Plastic drums",
      "Industrial containers",
      "Storage vessels",
      "Large plastic cans",
    ],
    features: [
      "Double-station configuration",
      "Accumulator-based material delivery",
      "Designed for hollow plastic product manufacturing",
    ],
  },

  "continuous-parison-blow-molding": {
    description:
      "The Continuous Parison 3 Liters Blow Moulding Machine is designed for manufacturing hollow plastic products through a continuous parison process. It is suitable for producing containers used across different packaging applications.",
    applications: [
      "Plastic bottles",
      "Small storage containers",
      "Packaging bottles",
      "Hollow plastic products",
    ],
    features: [
      "Continuous parison moulding process",
      "Designed for small-capacity containers",
      "Suitable for plastic packaging production",
    ],
  },
  "double-layer" : {
    description:
    "The 20 Litre Double-Layer Blow Moulding Machine is designed for producing high-capacity, double-layer hollow containers. Using extrusion blow moulding technology, the machine transforms thermoplastic raw materials into durable containers through controlled heating, extrusion, moulding and cooling processes.",
    applications: [
      "Industrial packaging containers",
      "Chemical storage cans",
      "Lubricant and oil containers",
      "Large-capacity plastic packaging",
    ],
    features: [
      "20-litre container production capacity",
    "Double-layer extrusion technology",
    "Hydraulic mould clamping",
  "Controlled heating and extrusion",
  "Precision moulding operations",
    ],
  },
  "carboys-blow-molding": {
    description:
      "The Carboys Blow Moulding Machine is designed for manufacturing hollow plastic carboys used for storing and transporting liquids. It supports the production of containers for industrial and commercial applications.",
    applications: [
      "Water storage carboys",
      "Industrial liquid containers",
      "Chemical storage containers",
      "Commercial liquid packaging",
    ],
    features: [
      "Designed for carboy manufacturing",
      "Suitable for hollow plastic container production",
      "Supports different carboy applications",
    ],
  },

  "automobile-parts": {
    description:
      "Automobile parts are manufactured using suitable plastic processing and moulding techniques to create components for automotive applications. These components are designed according to the requirements of the intended vehicle application.",
    applications: [
      "Automotive plastic components",
      "Vehicle interior components",
      "Vehicle exterior components",
      "Custom automotive parts",
    ],
    features: [
      "Designed for automotive component applications",
      "Supports customized component manufacturing",
      "Suitable for plastic automotive products",
    ],
  },

  "pharmaceutical-bottles-cans": {
    description:
      "Pharmaceutical bottles and cans are plastic packaging products used for storing and packaging pharmaceutical and healthcare-related products. They are manufactured in different shapes and sizes according to packaging requirements.",
    applications: [
      "Medicine packaging",
      "Healthcare product containers",
      "Pharmaceutical bottles",
      "Plastic packaging cans",
    ],
    features: [
      "Designed for pharmaceutical packaging applications",
      "Available in different container formats",
      "Suitable for plastic bottle and can production",
    ],
  },

  "milk-cans": {
    description:
      "Milk cans are plastic containers used for storing and handling milk and other dairy-related products. They are designed to support practical storage and transportation requirements in dairy applications.",
    applications: [
      "Milk storage",
      "Dairy product handling",
      "Liquid storage",
      "Dairy transportation containers",
    ],
    features: [
      "Designed for dairy storage applications",
      "Suitable for liquid container manufacturing",
      "Available for different storage requirements",
    ],
  },

  "triple-layer-tanks": {
    description:
      "Triple Layer Tanks are designed for water storage and are available in capacities of 500, 1000 and 2000 litres. Their multi-layer construction is intended for different residential, commercial and industrial storage requirements.",
    applications: [
      "Residential water storage",
      "Commercial water storage",
      "Industrial water storage",
      "General water storage applications",
    ],
    features: [
      "Triple-layer construction",
      "Available in 500, 1000 and 2000 litre capacities",
      "Designed for water storage applications",
    ],
  },

  "cricket-bats": {
    description:
      "Cricket bats are sports products designed for playing cricket. Their shape and construction are developed to support batting activities and the requirements of cricket players.",
    applications: [
      "Professional cricket",
      "Practice sessions",
      "Club-level cricket",
      "Recreational cricket",
    ],
    features: [
      "Designed for cricket batting",
      "Suitable for practice and match use",
      "Sports equipment manufacturing application",
    ],
  },
};

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);
  const details = productDetails[slug];

  if (!product) {
    return (
      <>
        <Navbar />
        <section className="product-not-found">
          <h2>Product Not Found</h2>
          <Link to="/products">Back to Products</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="product-details-page">

        {/* PRODUCT HERO */}
        <section className="product-details-hero">

          <div
            className="product-hero-bg"
            style={{ backgroundImage: `url(${product.image})` }}
          />

          <div className="product-hero-overlay" />

          <div className="product-details-container">

            <div className="product-details-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products">Products</Link>
              <span>›</span>
              <span>{product.name}</span>
            </div>

            <div className="product-hero-content">

              <span className="product-details-category">
                <span className="category-line"></span>
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <p className="product-details-description">
                {product.shortDescription}
              </p>

              <Link to="/contact" className="product-enquiry-button">
                Enquire Now <span>↗</span>
              </Link>

            </div>
          </div>
        </section>

        {/* PRODUCT INFORMATION */}
        <section className="product-information-section">

          <div className="product-information-container">

            <div className="product-information-left">

              <div className="product-overview">
                <span className="product-section-eyebrow">
                  PRODUCT OVERVIEW
                </span>

                <h2>About This Product</h2>

                <p className="product-overview-text">
                  {details?.description || product.shortDescription}
                </p>
              </div>

              {details?.applications?.length > 0 && (
                <div className="product-applications">
                  <h2>Applications</h2>

                  <ul>
                    {details.applications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              )}

              {details?.features?.length > 0 && (
                <div className="product-features">
                  <h2>Key Features</h2>

                  <ul>
                    {details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="product-details-cta">
                <h2>Interested in This Product?</h2>
                <p>
                  Contact RK Industries to discuss your requirements
                  and learn more about this product.
                </p>

                <Link to="/contact" className="product-enquiry-button">
                  Send Enquiry <span>↗</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default ProductDetails;
