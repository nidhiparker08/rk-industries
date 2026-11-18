
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "./Products";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

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

  const applications = product.applications || [
    "Bottles and jars",
    "Jerry cans and handle containers",
    "Household and personal-care packaging",
    "Industrial hollow components",
  ];

  const features = product.features || [
    "Feature details to be confirmed by RK Industries",
    "Feature details to be confirmed by RK Industries",
    "Feature details to be confirmed by RK Industries",
  ];

  const specifications = [
    "Container capacity range",
    "Number of stations",
    "Number of cavities",
    "Extruder screw diameter",
    "Screw L/D ratio",
    "Plasticising capacity",
    "Clamping force",
    "Mould platen size",
    "Dry cycle time",
    "Control system",
    "Installed power",
    "Machine dimensions (L × W × H)",
    "Machine weight",
  ];

  return (
    <>
      <Navbar />

      <main className="product-details-page">

        {/* HERO SECTION */}
        
{/* HERO SECTION */}
<section className="product-details-hero">

  <div
    className="product-hero-bg"
    style={{
      backgroundImage: `url(${product.image})`,
    }}
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
        MACHINE DETAILS
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


        {/* PRODUCT INFORMATION SECTION */}
        <section className="product-information-section">

          <div className="product-information-container">

            {/* LEFT COLUMN */}
            <div className="product-information-left">

              <p className="product-overview-text">
                {product.description || product.shortDescription}
              </p>

              <p className="product-overview-extra">
                Contact RK Industries to learn more about the specific
                configurations, material compatibility and options
                offered for this machine.
              </p>

              <div className="product-applications">
                <h2>Applications</h2>

                <ul>
                  {applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </div>

              <div className="product-features">
                <h2>Features</h2>

                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="product-information-right">

              <h2>Technical Specifications</h2>

              <div className="product-specifications-table">

                {specifications.map((specification, index) => (
                  <div className="specification-row" key={index}>

                    <span className="specification-name">
                      {specification}
                    </span>

                    <span className="specification-value">
                      {product.specifications?.[specification] ||
                        "To be confirmed"}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default ProductDetails;
