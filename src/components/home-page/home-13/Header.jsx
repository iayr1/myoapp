import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import { Link } from "react-router-dom";

const Header = () => {
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
      className={`theme-main-menu sticky-menu theme-menu-seven white-vr ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/" className="d-block">
              <img src="/images/logo/logo_06.png" alt="logo" />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <Link
              to="/login"
              className="login-btn-two fw-500 d-flex align-items-center me-4"
            >
              <img src="/images/icon/icon_90.svg" alt="logo" className="me-2" />
              <span>login</span>
            </Link>
            <Link
              to="/signup"
              className="signup-btn-two fw-500 tran3s d-none d-lg-block"
            >
              Sign Up
            </Link>
          </div>
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
