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
      className={`theme-main-menu sticky-menu theme-menu-three white-vr ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/" className="d-block">
              <img src="/images/logo/logo_02.png" alt="logo" />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              to="/login"
              className="login-btn-two fw-500 d-flex align-items-center me-3"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="signup-btn-one tran3s position-relative ps-3 d-none d-lg-block"
            >
              <span className="fw-500">Sign up</span>- It’s Free
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
