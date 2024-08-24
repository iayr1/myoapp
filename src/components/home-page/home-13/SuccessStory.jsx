const SuccessStory = () => {
  return (
    <>
      <div className="wrapper position-relative zn2 pt-70 pb-100 mt-90 md-mt-40">
        <div className="container">
          <div className="feedback-block-nine text-lg-end position-relative">
            <div className="row">
              <div
                className="col-xl-6 col-lg-7 order-lg-last"
                data-aos="fade-left"
              >
                <p className="mb-35">
                  “WordPress has been a great success—with
                  <span style={{ color: "#FF1292" }}>WordPress VIP</span>
                  giving us that enterprise”
                </p>
                <h4 className="text-white fw-normal m0">
                  Hasan Jannat. <span className="opacity-75">Pran inc.</span>
                </h4>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6 m-auto order-lg-first">
                <img
                  src="/images/media/img_50.jpg"
                  alt="img"
                  className="lazy-img img-one md-mt-40"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>

          <div className="feedback-block-nine position-relative mt-110">
            <div className="row">
              <div className="col-lg-10 ms-auto">
                <div
                  className="rating d-flex flex-column align-items-center justify-content-center mb-55 lg-mb-30"
                  data-aos="fade-up"
                >
                  <div className="font-recoleta tx-dark rating-value">4.8</div>
                  <div className="fs-20 tx-dark">Rating</div>
                </div>
                {/* /.rating */}
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-lg-5 ms-auto" data-aos="fade-right">
                <h4 className="text-white fw-normal mb-25">
                  Hasan Jannat. <span className="opacity-75">Pran inc.</span>
                </h4>
                <p className="m0">
                  “<span style={{ color: "#00FFFF" }}>Conversation</span> has
                  been a great success with top assured quality.”
                </p>
              </div>
              {/* End .col */}
              <div className="col-lg-5">
                <img
                  src="/images/media/img_51.jpg"
                  alt="img"
                  className="lazy-img img-two "
                  data-aos="fade-up"
                />
                <img
                  src="/images/shape/shape_128.svg"
                  alt="img"
                  className="lazy-img shapes shape-two"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="customer-data d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <div className="fw-500 tx-dark amount">32k</div>
          <div className="text-lg tx-dark">Customer</div>
        </div>
        {/* /.customer-data */}

        <img
          src="/images/media/img_52.jpg"
          alt="img"
          className="lazy-img img-three"
          data-aos="fade-up"
        />
        <img
          src="/images/shape/shape_127.svg"
          alt="img"
          className="lazy-img shapes shape-one"
        />
      </div>
    </>
  );
};

export default SuccessStory;
