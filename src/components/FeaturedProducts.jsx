
import ProductGrid from "./ProductGrid";
import "./FeaturedProducts.css";

const featuredProducts = [
  {
    name: "6 Gallons Polycarbonate Blow Molding Machine",
    slug: "polycarbonate-blow-molding",
    image: "/src/assets/Polycarbonate-Blow-Molding-Machine.jpeg",
    categories: ["polycarbonate-blow-molding"],
    shortDescription:
      "A versatile platform for producing hollow plastic containers from a wide range of thermoplastics.",
    draft: true,
  },
  {
    name: "60 Liters Blow Moulding Machine",
    slug: "blow-molding",
    image: "/src/assets/Hydraulic-Injection-Moulding-Machine.jpeg",
    categories: ["blow-molding"],
    shortDescription:
      "High-volume blow moulding for producing large quantities of hollow plastic containers.",
    draft: true,
  },
  {
    name: "15 Liters Double Station Accumulator Blow Moulding Machine",
    slug: "accumulator-blow-molding",
    image: "/src/assets/Accumulator-Blow-Moulding-Machine.jpeg",
    categories: ["accumulator-blow-molding"],
    shortDescription:
      "Accumulator head design for larger hollow parts such as drums, tanks and industrial containers.",
    draft: true,
  },
  {
    name: "Countinuous Parison 3 Liters Blow Moulding Machine",
    slug: "multi-layer",
    image: "src/assets/Continuous-Parision-blow-molding-machine.jpeg",
    categories: ["multi-layer"],
    shortDescription:
      "Advanced multi-layer technology for manufacturing high-quality plastic containers.",
    draft: true,
  },
  {
    name: "20 Liters Double layer Machine",
    slug: "double-layer",
    image: "src/assets/layer_machine.jpeg",
    categories: ["double-layer"],
    shortDescription:
      "Advanced double layer machine.",
    draft: true,
  },
 
];

function FeaturedProducts() {
  return (
    <section className="featured-products" id="products">

      <div className="featured-container">

        {/* SECTION HEADING */}
        <div className="featured-heading">

          <p className="featured-eyebrow">
            <span></span>
            FEATURED MACHINERY
          </p>

          <h2>
            Machines built for
            <br />
            hollow-part production.
          </h2>

        </div>

        {/* PRODUCT CARDS */}
        <ProductGrid products={featuredProducts} />

      </div>

    </section>
  );
}

export default FeaturedProducts;
