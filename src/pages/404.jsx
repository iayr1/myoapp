import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";

const NotFound = () => {
  return (
    <>
      <Seo pageTitle="404" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Error Page
			============================================== 
			*/}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Opps! you’r on the wrong place.</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
                Can not find what you need? Take a moment and do a search below
                or start from our Homepage.
              </p>
              <Link to="/" className="btn-twentyOne fw-500 tran3s">
                Back to home
              </Link>
            </div>
          </div>
          <img src="/images/assets/ils_06.svg" alt="" className="m-auto" />
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default NotFound;
