import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-13/Header";
import Hero from "../../components/home-page/home-13/hero";
import Feedback from "../../components/home-page/home-13/Feedback";
import Feature from "../../components/home-page/home-13/Feature";
import Leads from "../../components/home-page/home-13/Leads";
import FeaturesBlock from "../../components/home-page/home-13/FeaturesBlock";
import Counter from "../../components/home-page/home-13/Counter";
import SuccessStory from "../../components/home-page/home-13/SuccessStory";
import Testimonial from "../../components/home-page/home-13/Testimonial";
import Faq from "../../components/home-page/home-13/Faq";
import { Link } from "react-router-dom";
import FooterContent from "../../components/home-page/home-13/FooterContent";
import Subscribe from "../../components/home-page/home-13/Subscribe";
import CopyrightFooter from "../../components/home-page/home-13/CopyrightFooter";

const LeadGeneration = () => {
  return (
    <>
      <Seo pageTitle="Insurance" />
      {/* <!-- 
      =============================================
    Theme Default Menu
     ============================================== 	
    --> */}
      <Header />
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />
      {/* /.hero-banner-nine */}
      {/*
        =====================================================
        Feedback Section Eight
        =====================================================
        */}
      <Feedback />
      {/* /.feedback-section-eight */}
      {/* 
        =============================================
        Feature Section Thirty
        ============================================== 
        */}
      <Feature />
      {/* /.fancy-feature-thirty */}

      {/* 
        =============================================
        Feature Section Thirty One
        ============================================== 
        */}
      <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 pb-140 lg-pt-100 lg-pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Get
                  <span className="position-relative">
                    {" "}
                    Quality
                    <img src="/images/shape/shape_122.svg" alt="icon shape" />
                  </span>
                  Leads
                </h2>
                <p className="fs-20 mt-20">
                  Our digital advertising approach focuses on capturing the
                  essential information you need to be able to generate a real
                  ROI.
                </p>
              </div>
              {/* /.title-style-ten */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Leads />
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_124.svg"
          alt="icon shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_125.svg"
          alt="icon shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-thirtyOne */}

      {/* 
        =============================================
        Feature Section Thirty Two
        ============================================== 
        */}
      <div className="fancy-feature-thirtyTwo mt-190 lg-mt-120">
        <div className="container">
          <div className="row">
            <FeaturesBlock />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="wrapper mt-90 lg-mt-30">
          <div className="container">
            <div className="row">
              <Counter />
            </div>
          </div>
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.fancy-feature-thirtyTwo */}
      {/*
			=====================================================
				Feedback Section Nine
			=====================================================
			*/}
      <div className="feedback-section-nine position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ms-lg-auto" data-aos="fade-left">
              <div className="title-style-ten">
                <div className="sc-title">SUCCESS STORIES</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  See success{" "}
                  <span className="position-relative">
                    stories <img src="/images/shape/shape_122.svg" alt="img" />
                  </span>
                  of our customers.
                </h2>
              </div>
              {/* /.title-style-ten */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <SuccessStory />
        {/* /.wrapper */}
      </div>
      {/* /.feedback-section-nine */}

      {/* 
			=============================================
				Feedback Section Ten
			============================================== 
			*/}
      <div className="feedback-section-ten position-relative pt-200 lg-pt-150">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title">FEEDBACK</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    What
                    <span className="position-relative">
                      {" "}
                      client <img src="/images/shape/shape_129.svg" alt="" />
                    </span>
                    think about us.
                  </h2>
                </div>
                {/* /.title-style-ten */}
              </div>
            </div>
            {/* End .row */}
            <Testimonial />
          </div>
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_130.svg"
          alt=""
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_131.svg"
          alt=""
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.feedback-section-ten */}

      {/* 
        =============================================
        Feature Section Thirty Three
        ============================================== 
        */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers <img src="/images/shape/shape_132.svg" alt="" />
              </span>
            </h2>
          </div>
          {/* /.title-style-ten */}

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            aos="fade-up"
          >
            <Faq />
            <img
              src="/images/shape/shape_133.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/*
        =====================================================
        Fancy Short Banner Twelve
        =====================================================
        */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let’s Talk <img src="/images/shape/shape_132.svg" alt="" />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                to="/contact"
                className="btn-twenty fw-500 tran3s"
                data-aos-delay="300"
                data-aos="fade-up"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>
      {/* /.fancy-short-banner-twelve */}
      {/*
        =====================================================
        Footer
        =====================================================
        */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo/logo_06.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <FooterContent />

              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newslettert</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}

        <CopyrightFooter />

        <div className="shapes shape-one" />
        <img
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.footer-style-nine */}
    </>
  );
};

export default LeadGeneration;
