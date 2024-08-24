import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import PortfolioTopTitle from "../../components/portfolio/PortfolioTopTitle";
import PortfolioGallery5 from "../../components/portfolio/PortfolioGallery5";
import CallToAction from "../../components/portfolio/CallToAction";

const PortfolioV5 = () => {
  return (
    <>
      <Seo pageTitle="Portfolio V5" />
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
      <PortfolioTopTitle />

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <PortfolioGallery5 />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV5;
