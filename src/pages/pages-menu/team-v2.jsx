import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Team2 from "../../components/team/Team2";
import CallToAction from "../../components/team/CallToAction";

const TeamV2 = () => {
  return (
    <>
      <Seo pageTitle="Team V2" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Our Team
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  World most qualified team member.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two mt-20">
        <div className="pe-3 ps-3 ps-xxl-5 pe-xxl-5">
          <div className="row">
            <Team2 />
          </div>
          {/* /.row */}
        </div>
        {/* End pe-3 */}

        <div className="container">
          <CallToAction />
          {/* End  call to action*/}
        </div>
      </div>
      {/* /.team-section-two */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default TeamV2;
