import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import PortfolioTopTitle from "../../components/portfolio/PortfolioTopTitle";
import PortfolioGallery4 from "../../components/portfolio/PortfolioGallery4";

const PortfolioV4 = () => {
  return (
    <>
      <Seo pageTitle="Portfolio V4" />
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
      <PortfolioGallery4 />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV4;
