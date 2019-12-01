import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import MainSearch from "../Search/MainSearch";

import bannerOneImage from "../../assets/img/beach1.jpg";
import bannerTwoImage from "../../assets/img/venice.jpg";
import bannerThreeImage from "../../assets/img/aside-03.jpg";
import bannerFourImage from "../../assets/img/aside-02.jpeg";
import bannerFiveImage from "../../assets/img/test.jpg";
import bannerSixImage from "../../assets/img/slider.jpeg";

import whyUs from "../../assets/img/travel-moment.jpg";

class MainSlider extends Component {
  render() {
    var backgroundImageOne = {
      backgroundImage: `url(${bannerOneImage})`
    };
    var backgroundImageTwo = {
      backgroundImage: `url(${bannerTwoImage})`
    };
    var backgroundImageThree = {
      backgroundImage: `url(${bannerThreeImage})`
    };
    var backgroundImageFour = {
      backgroundImage: `url(${bannerFourImage})`
    };
    var backgroundImageFive = {
      backgroundImage: `url(${bannerFiveImage})`
    };
    var backgroundImageSix = {
      backgroundImage: `url(${bannerSixImage})`
    };

    var whychooseUs = {
      backgroundImage: `url(${whyUs})`
    };

    const settings = {
      dots: true,
      autoplay: false,
      arrows: false,
      infinite: true,
      autoplaySpeed: 14000,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      fade: true,
      draggable: true,
      slidesToScroll: 1,
      touchThreshold: 1000,
      cssEase: "ease"
    };

    return (
      <div id="featured-slider" className="featured-slider pattern-2 clearfix">
        <div className="ws-travel-banner slider">
          <Slider className="ws-travel-banner slider" {...settings}>
            <div className="ws-theme-addons-banner-slider">
              <div
                className="ws-slider-image-wrapper"
                style={backgroundImageOne}
              >
                <div className="container">
                  <div className="ws-featured-slider-contents">
                    <h2 className="banner-title mb-30 text-white font28">
                      The World’s Best Beach Resorts
                    </h2>
                    <p className="caption font18 text-white mb-20 line30">
                      Brazil Beaches Tours. Rio de Janeiro &amp; Costa Verde
                      Tour. Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Quisque velit nisi, pretium…
                    </p>
                    <em>from</em>
                    <div className="wp-detail-review-wrap">
                      <div className="wp-travel-trip-detail">
                        <div className="trip-price">
                          <span className="person-count">
                            <ins>
                              <span>$ 1000</span>
                            </ins>
                            /Person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ws-slider-buttons">
                      <a href="#" className="slider-info">
                        Read More
                      </a>
                      <a href="#" className="slider-book-now">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ws-theme-addons-banner-slider"
              style={backgroundImageTwo}
            >
              <div
                className="ws-slider-image-wrapper"
                style={backgroundImageTwo}
              >
                <div className="container">
                  <div className="ws-featured-slider-contents">
                    <h2 className="banner-title mb-30 text-white font28">
                      Venice, Italy Tourism
                    </h2>
                    <p className="caption font18 text-white mb-20 line30">
                      Discover the greatest treasures of ‘minor Venice’ on this
                      2-hour combined walking tour and gondola ride. Start
                      things off on a dreamy note,…
                    </p>
                    <em>from</em>
                    <div className="wp-detail-review-wrap">
                      <div className="wp-travel-trip-detail">
                        <div className="trip-price">
                          <span className="person-count">
                            <ins>
                              <span>$ 1000</span>
                            </ins>
                            /Person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ws-slider-buttons">
                      <a href="#" className="slider-info">
                        Read More
                      </a>
                      <a href="#" className="slider-book-now">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ws-theme-addons-banner-slider"
              style={backgroundImageThree}
            >
              <div
                className="ws-slider-image-wrapper"
                style={backgroundImageThree}
              >
                <div className="container">
                  <div className="ws-featured-slider-contents">
                    <h2 className="banner-title mb-30 text-white font28">
                      Experience The Best Trip Ever
                    </h2>
                    <p className="caption font18 text-white mb-20 line30">
                      We are committed to offering travel services of the
                      highest quality, combining our energy and enthusiasm, with
                      our years of experience. Donec sollicitudin molestie
                      malesuada.
                    </p>
                    <em>from</em>
                    <div className="wp-detail-review-wrap">
                      <div className="wp-travel-trip-detail">
                        <div className="trip-price">
                          <span className="person-count">
                            <ins>
                              <span>$ 1000</span>
                            </ins>
                            /Person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ws-slider-buttons">
                      <a href="#" className="slider-info">
                        Read More
                      </a>
                      <a href="#" className="slider-book-now">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ws-theme-addons-banner-slider"
              style={backgroundImageFour}
            >
              <div
                className="ws-slider-image-wrapper"
                style={backgroundImageFour}
              >
                <div className="container">
                  <div className="ws-featured-slider-contents">
                    <h2 className="banner-title mb-30 text-white font28">
                      Experience The Best Trip Ever
                    </h2>
                    <p className="caption font18 text-white mb-20 line30">
                      We are committed to offering travel services of the
                      highest quality, combining our energy and enthusiasm, with
                      our years of experience. Donec sollicitudin molestie
                      malesuada.
                    </p>
                    <div className="ws-slider-buttons">
                      <a href="#" className="slider-info">
                        Read More
                      </a>
                      <a href="#" className="slider-book-now">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ws-theme-addons-banner-slider"
              style={backgroundImageFive}
            >
              <div
                className="ws-slider-image-wrapper"
                style={backgroundImageFive}
              >
                <div className="container">
                  <div className="ws-featured-slider-contents">
                    <h2 className="banner-title mb-30 text-white font28">
                      Full Day Tour to The Rainbow Mountain
                    </h2>
                    <p className="caption font18 text-white mb-20 line30">
                      Rainbow Mountain full day hike – Imperial Service. The
                      Rainbow Mountain of Peru, also known as Winicunca, is
                      stunning and can be seen…
                    </p>
                    <em>from</em>
                    <div className="wp-detail-review-wrap">
                      <div className="wp-travel-trip-detail">
                        <div className="trip-price">
                          <span className="person-count">
                            <ins>
                              <span>$ 1000</span>
                            </ins>
                            /Person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ws-slider-buttons">
                      <a href="#" className="slider-info">
                        Read More
                      </a>
                      <a href="#" className="slider-book-now">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ws-theme-addons-banner-slider"
              style={backgroundImageSix}
            >
              <div
                className="ws-slider-image-wrapper"
                style={backgroundImageSix}
              >
                <div className="container">
                  <div className="ws-featured-slider-contents">
                    <h2 className="banner-title mb-30 text-white font28">
                      Experience The Best Trip Ever
                    </h2>
                    <p className="caption font18 text-white mb-20 line30">
                      We are committed to offering travel services of the
                      highest quality, combining our energy and enthusiasm, with
                      our years of experience. Donec sollicitudin molestie
                      malesuada.
                    </p>
                    <em>from</em>
                    <div className="wp-detail-review-wrap">
                      <div className="wp-travel-trip-detail">
                        <div className="trip-price">
                          <del>
                            <span> $ 900 </span>
                          </del>
                          <span className="person-count">
                            <ins>
                              <span>$ 1000</span>
                            </ins>
                            /Person
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ws-slider-buttons">
                      <a href="#" className="slider-info">
                        Read More
                      </a>
                      <a href="#" className="slider-book-now">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <MainSearch />
      </div>
    );
  }
}

export default MainSlider;
