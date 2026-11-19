
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactCTA from "./components/ContactCTA";

import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import HomeIntro from "./components/HomeIntro";

import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ContactUs from "./pages/ContactUs";
import Exports from "./pages/Exports";
import OurClients from "./pages/OurClients";


function QualityStrip() {
  const items = [
    { icon: "◇", title: "Quality", subtitle: "Our First Priority" },
    { icon: "⚙", title: "Precision", subtitle: "In Every Detail" },
    { icon: "◈", title: "Trust", subtitle: "Built to Last" },
  ];

  return (
    <section className="quality-strip">
      {items.map((item) => (
        <div className="quality-item" key={item.title}>
          <div className="quality-icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <QualityStrip />
      <HomeIntro />
      <FeaturedProducts />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [location.pathname]);

  const isProductDetailsPage =
    location.pathname.startsWith("/products/");

  const isContactPage =
    location.pathname === "/contact";

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:slug"
            element={<ProductDetails />}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/our-clients" element={<OurClients />} />
        </Routes>
      </main>

      {!isProductDetailsPage && !isContactPage && (
        <div className="contact-cta-section">
          <ContactCTA />
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
