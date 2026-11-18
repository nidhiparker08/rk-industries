
import "./ProductGrid.css";
import Reveal from "./Reveal";

function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return <p className="product-empty">No machines available yet.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <Reveal
          key={product.slug}
          delay={(index % 3) * 150}
          className="product-grid-item"
        >
          <div className="product-card">

            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />

              <span className="product-category">
                {product.category || product.categories?.[0] || "MACHINE"}
              </span>

              <a
                href={`/products/${product.slug}`}
                className="product-arrow"
                aria-label={`View ${product.name}`}
              >
                ↗
              </a>
            </div>

            <div className="product-card-content">

              <span className="product-status">
                <span className="status-dot"></span>
                DRAFT — TO CONFIRM
              </span>

              <h3>{product.name}</h3>

              <p>{product.shortDescription}</p>

              <div className="product-card-actions">
                <a
                  href={`/products/${product.slug}`}
                  className="view-details-btn"
                >
                  View Details
                </a>

                <a href="/contact" className="enquire-btn">
                  <span className="enquire-icon">▤</span>
                  Enquire Now
                </a>
              </div>

            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default ProductGrid;
