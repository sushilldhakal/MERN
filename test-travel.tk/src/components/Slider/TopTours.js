import React, { Component } from "react";
import Slider from "react-slick";

import bannerOneImage from "../../assets/img/beach1.jpg";
import bannerTwoImage from "../../assets/img/venice.jpg";
import bannerThreeImage from "../../assets/img/aside-03.jpg";
import bannerFourImage from "../../assets/img/aside-02.jpeg";
import bannerFiveImage from "../../assets/img/test.jpg";
import bannerSixImage from "../../assets/img/slider.jpeg";

import whyUs from "../../assets/img/travel-moment.jpg";

class TopTours extends Component {
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

    const multipleSettings = {
      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 991.99,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            draggable: true
          }
        },
        {
          breakpoint: 767.99,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            draggable: true,
            arrows: false
          }
        },
        {
          breakpoint: 575.99,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            draggable: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };

    return (

        <Slider
                        className="multiple-items wow fadeInUp"
                        {...multipleSettings}
                      >
                        <div className="card">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />

                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-991.jpg"
                                  />
                                  <source
                                    media="(min-width: 576px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font16">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h5>
                            <p className="time">7 Days</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(2 Review)</span>
                            </p>
                          </div>
                          <div className="prices">
                            <p className="from">from</p>
                            <p className="all-prices">
                              <del>$4,300</del>
                              <b>$3500</b>
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />

                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-991.jpg"
                                  />
                                  <source
                                    media="(min-width: 576px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font16">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h5>
                            <p className="time">7 Days</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(2 Review)</span>
                            </p>
                          </div>
                          <div className="prices">
                            <p className="from">from</p>
                            <p className="all-prices">
                              <del>$4,300</del>
                              <b>$3500</b>
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />

                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-991.jpg"
                                  />
                                  <source
                                    media="(min-width: 576px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font16">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h5>
                            <p className="time">7 Days</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(2 Review)</span>
                            </p>
                          </div>
                          <div className="prices">
                            <p className="from">from</p>
                            <p className="all-prices">
                              <del>$4,300</del>
                              <b>$3500</b>
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />

                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-991.jpg"
                                  />
                                  <source
                                    media="(min-width: 576px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font16">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h5>
                            <p className="time">7 Days</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(2 Review)</span>
                            </p>
                          </div>
                          <div className="prices">
                            <p className="from">from</p>
                            <p className="all-prices">
                              <del>$4,300</del>
                              <b>$3500</b>
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />

                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-991.jpg"
                                  />
                                  <source
                                    media="(min-width: 576px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font16">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h5>
                            <p className="time">7 Days</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(2 Review)</span>
                            </p>
                          </div>
                          <div className="prices">
                            <p className="from">from</p>
                            <p className="all-prices">
                              <del>$4,300</del>
                              <b>$3500</b>
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />

                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-991.jpg"
                                  />
                                  <source
                                    media="(min-width: 576px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font16">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h5>
                            <p className="time">7 Days</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(2 Review)</span>
                            </p>
                          </div>
                          <div className="prices">
                            <p className="from">from</p>
                            <p className="all-prices">
                              <del>$4,300</del>
                              <b>$3500</b>
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />

                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-991.jpg"
                                  />
                                  <source
                                    media="(min-width: 576px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-default.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title font16">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h5>
                            <p className="time">7 Days</p>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <p className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>(2 Review)</span>
                            </p>
                          </div>
                          <div className="prices">
                            <p className="from">from</p>
                            <p className="all-prices">
                              <del>$4,300</del>
                              <b>$3500</b>
                            </p>
                          </div>
                        </div>
                      </Slider>


            );
}
}

export default TopTours;