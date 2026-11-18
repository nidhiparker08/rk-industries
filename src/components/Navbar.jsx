
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const rkLogo = "/logo.jpeg";

const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Exports", path: "/exports" },
    { label: "Our Clients", path: "/our-clients" },
    { label: "Contact", path: "/contact" },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    const isContactPage = location.pathname === "/contact";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${isContactPage ? "navbar-contact" : ""}`}
        >
            <div className="navbar-container">

                {/* LOGO */}
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img
                        src={rkLogo}
                        alt="RK Industries Logo"
                        className="navbar-logo-image"
                    />

                    <span className="logo-text">
                        <strong>RK INDUSTRIES</strong>
                        <small>MOULDING YOUR VISION</small>
                    </span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="desktop-nav" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* RIGHT SIDE */}
                <div className="navbar-actions">
                    <Link
                        to="/contact"
                        className="quote-button"
                        onClick={closeMenu}
                    >
                        Request a Quote
                        <span>↗</span>
                    </Link>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* MOBILE NAVIGATION */}
            <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
                {navItems.map((item, index) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/"}
                        onClick={closeMenu}
                    >
                        <span>{item.label}</span>
                        <small>0{index + 1}</small>
                    </NavLink>
                ))}

                <Link
                    to="/contact"
                    className="mobile-quote-button"
                    onClick={closeMenu}
                >
                    Request a Quote ↗
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
