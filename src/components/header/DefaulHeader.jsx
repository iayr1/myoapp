import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            {/* Link to the homepage */}
            <Link to="/" className="d-block">
              {/* Logo with fixed width and height */}
              <img
                src="/images/logo/logo_01.png"
                alt="logo"
                style={{ width: '100px', height: 'auto', maxWidth: '100%' }} // Inline styles for the logo
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            {/* Login button */}
            <Link
              to="/login"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link>
            {/* Contact Us button */}
            <Link
              to="/contact/contact-v1"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              Contact us
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          {/* Main Menu */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
