import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";

const Header5 = () => {
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
      className={`theme-main-menu sticky-menu theme-menu-ten ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/">
              <img src="/images/logo/logo_07.png" alt="logo" />
            </Link>
          </div>
          {/* End logo */}
          <div className="right-widget d-flex align-items-center order-lg-3">
            <form
              action="#"
              className="header-search-two position-relative me-4 me-xxl-5 d-none d-xl-block"
            >
              <input type="text" placeholder="Search Here..." required />
              <img
                src="/images/icon/icon_122.svg"
                alt="icon"
                className="icon position-absolute"
              />
            </form>
            <Link
              to="/login"
              className="login-btn-four rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link>
            <Link
              to="/signup"
              className="signup-btn-four fw-500 tran3s d-none d-lg-block"
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

export default Header5;
