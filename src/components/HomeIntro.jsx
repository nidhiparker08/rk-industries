
import factoryImage from "../assets/manifacture3.jpeg";
import "./HomeIntro.css";

function HomeIntro() {
  return (
    <section className="home-intro">
      <div className="home-intro-container">

        <div className="home-intro-image">
          <div className="home-image-accent"></div>
          <img
            src={factoryImage}
            alt="RK Industries manufacturing facility"
          />
        </div>

        <div className="home-intro-content">
          <div className="home-intro-label">
            <span></span>
            About RK Industries
          </div>

          <h2>
            A Legacy of Innovation
            <br />
            in Moulding Solutions
          </h2>

          <p>
            Established in 2014, Rajkumari Industries (R.K Industries)
            is a growing engineering and manufacturing company
            specializing in the design, development and manufacturing
            of high-performance Extrusion Blow Moulding Machines and
            Plastic Processing Machinery.
          </p>

          <p>
            We are the first in india who makes Poly-Carbonate Blow 
            Moulding Machine
        </p>

          <a href="/about" className="home-intro-button">
            Learn More <span>→</span>
          </a>
        </div>

        <div className="home-intro-stats">
          <div className="home-stat">
            <span className="home-stat-icon">▦</span>
            <div>
              <h3>Since 2014</h3>
              <p>Manufacturing Experience</p>
            </div>
          </div>

          <div className="home-stat">
            <span className="home-stat-icon">◎</span>
            <div>
              <h3>Global Reach</h3>
              <p>International Markets</p>
            </div>
          </div>

          <div className="home-stat">
            <span className="home-stat-icon">⚙</span>
            <div>
              <h3>100%</h3>
              <p>Commitment to Quality</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeIntro;
