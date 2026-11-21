
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import "./Products.css";

import heroImage from "../assets/hero.png"; 
import polycarbonateImage from "../assets/Polycarbonate-Blow-Molding-Machine.jpeg";
import accumulatorImage from "../assets/Accumulator-Blow-Moulding-Machine.jpeg";
import hydraulicImage from "../assets/Hydraulic-Injection-Moulding-Machine.jpeg";
import machineImage from "../assets/hero-machine.jpeg";
import parisonImage from "../assets/Continuous-Parision-blow-molding-machine.jpeg";
import automobileImage from "../assets/automobile.jpeg";
import carboysImage from "../assets/carboys.jpeg";
import pharmaceuticalImage from "../assets/pharmasutical.jpeg";
import milkCansImage from "../assets/milkcontainer.jpeg";
import tripleLayerTanksImage from "../assets/drum.jpeg";
import cricketBatsImage from "../assets/bats.jpeg";
import doubleImage from "../assets/layer_machine.jpeg"

export const products = [
  {
    name: "6 Gallons Polycarbonate Blow Molding Machine",
    slug: "polycarbonate-blow-molding",
    image: polycarbonateImage,
    category: "POLYCARBONATE",
    shortDescription:
      "A versatile platform for producing hollow plastic containers from a wide range of thermoplastics.",
    draft: true,
  },
  {
    name: "60 Liters Blow Moulding Machine",
    slug: "blow-molding",
    image: hydraulicImage,
    category: "BLOW MOULDING",
    shortDescription:
      "High-volume blow moulding for producing large quantities of hollow plastic containers.",
    draft: true,
  },
  {
    name: "15 Liters Double Station Accumulator Blow Moulding Machine",
    slug: "accumulator-blow-molding",
    image: accumulatorImage,
    category: "ACCUMULATOR",
    shortDescription:
      "Accumulator head design for larger hollow parts such as drums, tanks and industrial containers.",
    draft: true,
  },
  {
    name: "Continuous Parison 3 Liters Blow Moulding Machine",
    slug: "continuous-parison-blow-molding",
    image: parisonImage,
    category: "CONTINUOUS PARISON",
    shortDescription:
      "Continuous parison technology for efficient blow moulding applications.",
    draft: true,
  },
  {
    name: "20 Liters Double layer Machine",
    slug: "double-layer",
    image: doubleImage,
    categories: ["double-layer"],
    shortDescription:
      "Advanced double layer machine.",
    draft: true,
  },
  {
    name: "Carboys",
    slug: "carboys",
    image: carboysImage,
    category: "CARBOYS",
    shortDescription:
      "Specialized machinery for producing carboys of various sizes.",
    draft: true,
  },
  {
    name: "Automobile Parts",
    slug: "automobile-parts",
    image: automobileImage,
    category: "AUTOMOBILE",
    shortDescription:
      "Specialized machinery for producing automotive components.",
    draft: true,
  },
  {
    name: "Pharmaceutical Bottles and Cans",
    slug: "pharmaceutical-bottles-cans",
    image: pharmaceuticalImage,
    category: "PHARMACEUTICAL",
    shortDescription:
      "Specialized machinery for producing pharmaceutical packaging solutions.",
    draft: true,
  },
  {
    name: "Milk Cans",
    slug: "milk-cans",
    image: milkCansImage,
    category: "DAIRY",
    shortDescription:
      "Specialized machinery for producing milk packaging solutions.",
    draft: true,
  },
  {
    name: "Triple Layer Tanks",
    slug: "triple-layer-tanks",
    image: tripleLayerTanksImage,
    category: "TRIPLE LAYER",
    shortDescription:
      "500, 1000, 2000 liter capacity.",
    draft: true,
  },
  {
    name: "Cricket Bats",
    slug: "cricket-bats",
    image: cricketBatsImage,
    category: "SPORTS",
    shortDescription:
      "Specialized machinery for producing cricket bats.",
    draft: true,
  },
];

function Products() {
  return (
    <>
      <Navbar />

      <main className="products-page">

        {/* PRODUCTS HERO */}
        <section className="products-hero">

          <img
            src={heroImage}
            alt="Industrial machinery at RK Industries"
            className="products-background"
          />

          <div className="products-overlay"></div>
          <div className="products-hero-grid"></div>

          <div className="products-hero-container">

            {/* BREADCRUMB */}
            <div className="products-breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>Products</span>
            </div>

            {/* HERO CONTENT */}
            <div className="products-hero-content">

              <div className="products-eyebrow">
                <span></span>
                OUR PRODUCTS
              </div>

              <h1 className="products-title">
                Industrial Machinery
                <br />
                Built for Performance.
              </h1>

              <p className="products-description">
                Explore our range of advanced blow moulding machines,
                plastic processing equipment and customized industrial
                machinery engineered for reliable production.
              </p>

            </div>
          </div>
        </section>

        {/* PRODUCT CATALOGUE */}
        <section className="products-catalogue">

          <div className="products-container">

            <div className="products-section-heading">

              <div className="products-section-eyebrow">
                <span></span>
                OUR MACHINERY RANGE
              </div>

              <h2>
                Explore Our Products
              </h2>

              <p>
                Discover reliable machinery solutions designed to meet
                diverse industrial and plastic manufacturing requirements.
              </p>

            </div>

            <ProductGrid products={products} />

          </div>
        </section>

      </main>
    </>
  );
}

export default Products;
