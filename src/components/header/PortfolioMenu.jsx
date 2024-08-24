import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { title: "About me", href: "#s1" },
  { title: "Services", href: "#s2" },
  { title: "Portfolio", href: "#s3" },
  { title: "Skill", href: "#s4" },
  { title: "Contact", href: "#s5" },
];

const PortfolioMenu = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#one-page-nav"
        aria-controls="one-page-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse" id="one-page-nav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link to="/" className="d-block">
                <img src="/images/logo/logo_04.png" alt="logo" />
              </Link>
            </div>
          </li>
          {navItems.map((navItem, i) => (
            <li key={i} className="nav-item">
              <a
                className={`nav-link ${activeLink === i ? "active" : ""}`}
                href={navItem.href}
                onClick={() => handleLinkClick(i)}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PortfolioMenu;
