import React from 'react';
import Services from './Services';
import Properties from './Properties';


const Home = () => {
  const carouselItemStyle = {
    backgroundImage: 'url(/assets/img/slide-2.jpg)',
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
  };
  return (
    <>
      <div className="intro intro-carousel swiper position-relative">
        <div className="swiper-wrapper">

          <div className="swiper-slide carousel-item-a intro-item bg-image" style={carouselItemStyle}>
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">

                      <div className="intro-body">
                        <p className="intro-title-top">Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 className="intro-title mb-4 ">
                          <span className="color-b">204 </span> Mount
                          <br /> Olive Road Two
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="swiper-slide carousel-item-a intro-item bg-image" style={carouselItemStyle}>
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        <p className="intro-title-top">Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 className="intro-title mb-4">
                          <span className="color-b">204 </span> Rino
                          <br /> Venda Road Five
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide carousel-item-a intro-item bg-image" >
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        <p className="intro-title-top">Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 className="intro-title mb-4">
                          <span className="color-b">204 </span> Alira
                          <br /> Roan Road One
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Services />
      <section class="intro-single ">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Our Amazing Properties</h1>
              <span class="color-text-a">Grid Properties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Properties />
    </>
  );
}

export default Home;
