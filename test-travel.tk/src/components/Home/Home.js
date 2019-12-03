import React, { Component } from "react";
import MainSlider from "../Slider/MainSlider";

import TopTours from "../Slider/TopTours";

import PopularDeals from "../Slider/PopularDeals";

import Review from "../Slider/review";

import Feature from "../Slider/Feature";

import bannerOneImage from "../../assets/img/beach1.jpg";
import bannerTwoImage from "../../assets/img/venice.jpg";
import bannerThreeImage from "../../assets/img/aside-03.jpg";
import bannerFourImage from "../../assets/img/aside-02.jpeg";
import bannerFiveImage from "../../assets/img/test.jpg";
import bannerSixImage from "../../assets/img/slider.jpeg";

import whychooseUs from "../../assets/img/travel-moment.jpg";

class Home extends Component {
  render() {
    var whyUs = {
      backgroundImage: `url(${whychooseUs})`
    };
    return (
      <div>
        <div id="primary" className="content-area">
          <main id="main" className="site-main" role="main">
            <div className="front-page-home-sections ws-theme-addons-front-page">
              <div
                id="travel-log-front-page-slider-wrap"
                className="ws-theme-addons-show-partial-edit-shortcut"
              >
                <MainSlider />
              </div>
              <div className="featured-tour">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8 ">
                      <div className="ws-theme-section-title wow fadeInUp">
                        <h2 className="mb-30 font26 font-weight-500 text-dark text-uppercase mt-0 mb-15-xss">
                          top vacation tours{" "}
                          <span>
                            <a href="#">view all</a>
                          </span>
                        </h2>
                      </div>
                      <TopTours />
                    </div>

                    <div className="col-sm-4">
                      <div className="sticky-sidebar">
                        <div className="ws-latest-travel-tour ws-side-wrap">
                          <h3 className="aside-title wow fadeInUp font20">
                            latest travel tours
                          </h3>
                          <div className="ws-aside-listing wow fadeInUp">
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                      />

                                      <img
                                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        width="70px"
                                        height="70px"
                                        alt=""
                                      />
                                    </picture>
                                  </div>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <h4>
                                  <a href="#">
                                    America - Grand canyon, Golden Gate
                                  </a>
                                </h4>
                                <span className="price">15% off</span>
                                <span className="tour-prices">
                                  From <del>$2400</del> <b>$2800</b>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                      />

                                      <img
                                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        width="70px"
                                        height="70px"
                                      />
                                    </picture>
                                  </div>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <h4>
                                  <a href="#">
                                    America - Grand canyon, Golden Gate
                                  </a>
                                </h4>
                                <span className="price">15% off</span>
                                <span className="tour-prices">
                                  From <del>$2400</del> <b>$2800</b>
                                </span>
                              </div>
                            </div>

                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                      />

                                      <img
                                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        width="70px"
                                        height="70px"
                                      />
                                    </picture>
                                  </div>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <h4>
                                  <a href="#">
                                    America - Grand canyon, Golden Gate
                                  </a>
                                </h4>
                                <span className="price">15% off</span>
                                <span className="tour-prices">
                                  From <del>$2400</del> <b>$2800</b>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                      />

                                      <img
                                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        width="70px"
                                        height="70px"
                                      />
                                    </picture>
                                  </div>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <h4>
                                  <a href="#">
                                    America - Grand canyon, Golden Gate
                                  </a>
                                </h4>
                                <span className="price">15% off</span>
                                <span className="tour-prices">
                                  From <del>$2400</del> <b>$2800</b>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                      />

                                      <img
                                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        width="70px"
                                        height="70px"
                                      />
                                    </picture>
                                  </div>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <h4>
                                  <a href="#">
                                    America - Grand canyon, Golden Gate
                                  </a>
                                </h4>
                                <span className="price">15% off</span>
                                <span className="tour-prices">
                                  From <del>$2400</del> <b>$2800</b>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ws-whybook-us dotted-overlay" style={whyUs}>
                <div className="container">
                  <div className="row">
                    <div className="ws-section-title wow fadeInUp">
                      <h2 className="text-white text-uppercase font26">
                        Why to book with us?
                      </h2>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="ws-why-bookus-wrap wow fadeInUp">
                        <div className="ws-icon-why-bookus">
                          <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/whybookus-1.png" />
                        </div>
                        <div className="ws-title-why-bookus">
                          <h3 className="text-white text-uppercase font22 mv-20">
                            One stop Book
                          </h3>
                        </div>
                        <div className="ws-content-why-bookus">
                          <p className="text-white">
                            Widest range of 2,700 tours and activities from all
                            around the world to give you the best.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="ws-why-bookus-wrap wow fadeInUp">
                        <div className="ws-icon-why-bookus">
                          <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/whybookus-2.png" />
                        </div>
                        <div className="ws-title-why-bookus">
                          <h3 className="text-uppercase text-white font22 mv-20">
                            Refer to verified
                          </h3>
                        </div>
                        <div className="ws-content-why-bookus">
                          <p className="text-white">
                            We verify all reviews to give you the best advices
                            from trusted others travelers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="ws-why-bookus-wrap wow fadeInUp">
                        <div className="ws-icon-why-bookus">
                          <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/whybookus-3.png" />
                        </div>
                        <div className="ws-title-why-bookus">
                          <h3 className="text-uppercase text-white font22 mv-20">
                            Secret travel tips
                          </h3>
                        </div>
                        <div className="ws-content-why-bookus">
                          <p className="text-white">
                            Join 50,000 other subscribers and get weekly travel
                            tips from other travelers and local.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="ws-why-bookus-wrap wow fadeInUp">
                        <div className="ws-icon-why-bookus">
                          <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/whybookus-4.png" />
                        </div>
                        <div className="ws-title-why-bookus">
                          <h3 className="text-uppercase text-white font22 mv-20">
                            Best price guarantee
                          </h3>
                        </div>
                        <div className="ws-content-why-bookus">
                          <p className="text-white">
                            Our pricing is updated constantly to ensure you get
                            the best price available online or at your
                            destination
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popular-tour grey-background">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8 ">
                      <div className="ws-theme-section-title wow fadeInUp">
                        <h2 className="mb-30 font26 font-weight-500 text-dark text-uppercase mt-0 mb-15-xss">
                          Popular Deals{" "}
                          <span>
                            <a href="#">view all</a>
                          </span>
                        </h2>
                      </div>
                      <PopularDeals />
                    </div>

                    <div className="col-sm-4">
                      <div className="sticky-sidebar">
                        <div className="ws-feature-destination ws-side-wrap">
                          <h3 className="aside-title wow fadeInUp">
                            Featured Destinations
                          </h3>
                          <div className="ws-aside-listing wow fadeInUp">
                            <div className="ws-aside-listing-wrap">
                              <div className="destination-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 768px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal.jpg"
                                      />

                                      <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal-767.jpg" />
                                    </picture>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="destination-image-caption"
                                >
                                  Nepal
                                </a>
                              </div>
                              <div className="destination-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 768px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal.jpg"
                                      />

                                      <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal-767.jpg" />
                                    </picture>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="destination-image-caption"
                                >
                                  Nepal
                                </a>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="destination-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 768px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal.jpg"
                                      />

                                      <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal-767.jpg" />
                                    </picture>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="destination-image-caption"
                                >
                                  Nepal
                                </a>
                              </div>
                              <div className="destination-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 768px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal.jpg"
                                      />

                                      <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal-767.jpg" />
                                    </picture>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="destination-image-caption"
                                >
                                  Nepal
                                </a>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="destination-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 768px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal.jpg"
                                      />

                                      <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal-767.jpg" />
                                    </picture>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="destination-image-caption"
                                >
                                  Nepal
                                </a>
                              </div>
                              <div className="destination-image">
                                <a href="#">
                                  <div className="feature-image-thumb">
                                    <picture>
                                      <source
                                        media="(min-width: 768px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal.jpg"
                                      />

                                      <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/nepal-767.jpg" />
                                    </picture>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="destination-image-caption"
                                >
                                  Nepal
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ws-travel-moment dotted-overlay" style={whyUs}>
                <div className="container">
                  <div className="row">
                    <div className="ws-section-title wow fadeInUp">
                      <h2 className="text-white mt-0 text-uppercase font26">
                        Find Your Travel Moment
                      </h2>
                      <p className="text-white font18 font-weight-500">
                        We enables you to travel your dream vacation In Just 3
                        Steps
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <div className="ws-travel-moment-wrap wow fadeInUp pt-50 pb-30">
                        <div className="ws-icon-travel-moment">
                          <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/dream.png" />
                        </div>
                        <div className="ws-title-travel-moment">
                          <h3 className="text-uppercase text-white font22 mv-20">
                            Dream
                          </h3>
                        </div>
                        <div className="ws-content-travel-moment">
                          <p className="text-white">
                            Mattis interdum nunc massa. Velit. Nonummy penatibus
                            luctus. Aliquam. Massa aptent senectus elementum
                            taciti.Id sodales morbi felis eu mus auctor
                            ullamcorpe
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="ws-travel-moment-wrap wow fadeInUp pt-50 pb-30">
                        <div className="ws-icon-travel-moment">
                          <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/plan.png" />
                        </div>
                        <div className="ws-title-travel-moment">
                          <h3 className="text-uppercase text-white font22 mv-20">
                            Plan
                          </h3>
                        </div>
                        <div className="ws-content-travel-moment">
                          <p className="text-white">
                            Mattis interdum nunc massa. Velit. Nonummy penatibus
                            luctus. Aliquam. Massa aptent senectus elementum
                            taciti.Id sodales morbi felis eu mus auctor
                            ullamcorpe
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="ws-travel-moment-wrap wow fadeInUp pt-50 pb-30">
                        <div className="ws-icon-travel-moment">
                          <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/discover.png" />
                        </div>
                        <div className="ws-title-travel-moment">
                          <h3 className="text-uppercase text-white font22 mv-20">
                            Discover
                          </h3>
                        </div>
                        <div className="ws-content-travel-moment">
                          <p className="text-white">
                            Mattis interdum nunc massa. Velit. Nonummy penatibus
                            luctus. Aliquam. Massa aptent senectus elementum
                            taciti.Id sodales morbi felis eu mus auctor
                            ullamcorpe
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="dream-btn-wrap wow bounceInUp">
                        <a href="#" className="btn btn-dream">
                          Discover Dream Vacation{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recomended-tour">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8 ">
                      <div className="ws-theme-section-title wow fadeInUp">
                        <h2 className="mb-30 font26 font-weight-500 text-dark text-uppercase mt-0 mb-15-xss">
                          Recommended Trips{" "}
                          <span>
                            <a href="#">view all</a>
                          </span>
                        </h2>
                      </div>
                      <div className="ws-listing-trips listing-list-view wow fadeInUp">
                        <div className="card clearfix">
                          <div className="featured-image">
                            <div className="wp-travel-offer">
                              <span>Offer</span>
                            </div>
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-default.jpg"
                                  />
                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <source
                                    media="(min-width: 320px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h3 className="card-title">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h3>
                            <p className="time">7 Days 8 Nights</p>
                            <p className="avilable-date">
                              Availability: Jan 18’ - Dec 16’
                            </p>
                            <p className="card-text">
                              Etiam porta sem malesuada magna mollis euismod.
                              Maecenas sed diam eget risus varius blandit sit
                              amet non magna. Vivamus sagittis lacus vel augue
                              laoreet [...]
                            </p>
                          </div>
                          <aside className="right-wrapper">
                            <div className="prices clearfix">
                              <p className="from">
                                from{" "}
                                <del className="hidden-above-md">$4,300</del>
                              </p>
                              <p className="all-prices">
                                <del className="visible-under-md">$4,300</del>
                                <b>$3500</b>
                              </p>
                            </div>
                            <div className="ws-rating-more font14">
                              <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-half-o" />
                                <span>(2 Review)</span>
                              </div>

                              <div className="dream-btn-wrap">
                                <a href="#" className="btn btn-dream">
                                  More Info
                                </a>
                              </div>
                            </div>
                          </aside>
                        </div>

                        <div className="card clearfix">
                          <div className="featured-image">
                            <div className="wp-travel-offer">
                              <span>15% off</span>
                            </div>
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-default.jpg"
                                  />
                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <source
                                    media="(min-width: 320px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h3 className="card-title">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h3>
                            <p className="time">7 Days 8 Nights</p>
                            <p className="avilable-date">
                              Availability: Jan 18’ - Dec 16’
                            </p>
                            <p className="card-text">
                              Etiam porta sem malesuada magna mollis euismod.
                              Maecenas sed diam eget risus varius blandit sit
                              amet non magna. Vivamus sagittis lacus vel augue
                              laoreet [...]
                            </p>
                          </div>
                          <aside className="right-wrapper">
                            <div className="prices clearfix">
                              <p className="from">
                                from{" "}
                                <del className="hidden-above-md">$4,300</del>
                              </p>
                              <p className="all-prices">
                                <del className="visible-under-md">$4,300</del>
                                <b>$3500</b>
                              </p>
                            </div>
                            <div className="ws-rating-more font14">
                              <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-half-o" />
                                <span>(2 Review)</span>
                              </div>

                              <div className="dream-btn-wrap">
                                <a href="#" className="btn btn-dream">
                                  More Info
                                </a>
                              </div>
                            </div>
                          </aside>
                        </div>

                        <div className="card clearfix">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-default.jpg"
                                  />
                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <source
                                    media="(min-width: 320px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h3 className="card-title">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h3>
                            <p className="time">7 Days 8 Nights</p>
                            <p className="avilable-date">
                              Availability: Jan 18’ - Dec 16’
                            </p>
                            <p className="card-text">
                              Etiam porta sem malesuada magna mollis euismod.
                              Maecenas sed diam eget risus varius blandit sit
                              amet non magna. Vivamus sagittis lacus vel augue
                              laoreet [...]
                            </p>
                          </div>
                          <aside className="right-wrapper">
                            <div className="prices clearfix">
                              <p className="from">
                                from{" "}
                                <del className="hidden-above-md">$4,300</del>
                              </p>
                              <p className="all-prices">
                                <del className="visible-under-md">$4,300</del>
                                <b>$3500</b>
                              </p>
                            </div>
                            <div className="ws-rating-more font14">
                              <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-half-o" />
                                <span>(2 Review)</span>
                              </div>

                              <div className="dream-btn-wrap">
                                <a href="#" className="btn btn-dream">
                                  More Info
                                </a>
                              </div>
                            </div>
                          </aside>
                        </div>
                        <div className="card clearfix">
                          <div className="featured-image">
                            <a href="#">
                              <div className="feature-image-thumb">
                                <picture>
                                  <source
                                    media="(min-width: 992px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-default.jpg"
                                  />
                                  <source
                                    media="(min-width: 768px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <source
                                    media="(min-width: 320px)"
                                    srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                  />
                                  <img
                                    src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/zermatt-small.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <h3 className="card-title">
                              <a href="#">
                                Switzerland - 7 days in zurich, zermatt
                              </a>
                            </h3>
                            <p className="time">7 Days 8 Nights</p>
                            <p className="avilable-date">
                              Availability: Jan 18’ - Dec 16’
                            </p>
                            <p className="card-text">
                              Etiam porta sem malesuada magna mollis euismod.
                              Maecenas sed diam eget risus varius blandit sit
                              amet non magna. Vivamus sagittis lacus vel augue
                              laoreet [...]
                            </p>
                          </div>
                          <aside className="right-wrapper">
                            <div className="prices clearfix">
                              <p className="from">
                                from{" "}
                                <del className="hidden-above-md">$4,300</del>
                              </p>
                              <p className="all-prices">
                                <del className="visible-under-md">$4,300</del>
                                <b>$3500</b>
                              </p>
                            </div>
                            <div className="ws-rating-more font14">
                              <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-half-o" />
                                <span>(2 Review)</span>
                              </div>

                              <div className="dream-btn-wrap">
                                <a href="#" className="btn btn-dream">
                                  More Info
                                </a>
                              </div>
                            </div>
                          </aside>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="sticky-sidebar">
                        <div className="ws-latest-travel-tips ws-side-wrap">
                          <h3 className="aside-title wow fadeInUp">
                            Travel Tips
                          </h3>
                          <div className="ws-aside-listing wow fadeInUp">
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <a href="#">
                                    <div className="feature-image-thumb">
                                      <picture>
                                        <source
                                          media="(min-width: 992px)"
                                          srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        />

                                        <img
                                          src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                          width="70px"
                                          height="70px"
                                        />
                                      </picture>
                                    </div>
                                  </a>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <p>
                                  <a href="#">How to travel using mobile map</a>
                                </p>
                                <span className="date">
                                  <a href="#">
                                    <i className="fa fa-clock-o" /> Jan 06, 2018
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <a href="#">
                                    <div className="feature-image-thumb">
                                      <picture>
                                        <source
                                          media="(min-width: 992px)"
                                          srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        />

                                        <img
                                          src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                          width="70px"
                                          height="70px"
                                        />
                                      </picture>
                                    </div>
                                  </a>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <p>
                                  <a href="#">How to travel using mobile map</a>
                                </p>
                                <span className="date">
                                  <a href="#">
                                    <i className="fa fa-clock-o" /> Jan 06, 2018
                                  </a>
                                </span>
                              </div>
                            </div>

                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <a href="#">
                                    <div className="feature-image-thumb">
                                      <picture>
                                        <source
                                          media="(min-width: 992px)"
                                          srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        />

                                        <img
                                          src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                          width="70px"
                                          height="70px"
                                        />
                                      </picture>
                                    </div>
                                  </a>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <p>
                                  <a href="#">How to travel using mobile map</a>
                                </p>
                                <span className="date">
                                  <a href="#">
                                    <i className="fa fa-clock-o" /> Jan 06, 2018
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <a href="#">
                                    <div className="feature-image-thumb">
                                      <picture>
                                        <source
                                          media="(min-width: 992px)"
                                          srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        />

                                        <img
                                          src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                          width="70px"
                                          height="70px"
                                        />
                                      </picture>
                                    </div>
                                  </a>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <p>
                                  <a href="#">How to travel using mobile map</a>
                                </p>
                                <span className="date">
                                  <a href="#">
                                    <i className="fa fa-clock-o" /> Jan 06, 2018
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <a href="#">
                                    <div className="feature-image-thumb">
                                      <picture>
                                        <source
                                          media="(min-width: 992px)"
                                          srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        />

                                        <img
                                          src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                          width="70px"
                                          height="70px"
                                        />
                                      </picture>
                                    </div>
                                  </a>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <p>
                                  <a href="#">How to travel using mobile map</a>
                                </p>
                                <span className="date">
                                  <a href="#">
                                    <i className="fa fa-clock-o" /> Jan 06, 2018
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <a href="#">
                                    <div className="feature-image-thumb">
                                      <picture>
                                        <source
                                          media="(min-width: 992px)"
                                          srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        />

                                        <img
                                          src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                          width="70px"
                                          height="70px"
                                        />
                                      </picture>
                                    </div>
                                  </a>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <p>
                                  <a href="#">How to travel using mobile map</a>
                                </p>
                                <span className="date">
                                  <a href="#">
                                    <i className="fa fa-clock-o" /> Jan 06, 2018
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="ws-aside-listing-wrap">
                              <div className="featured-image">
                                <a href="#">
                                  <a href="#">
                                    <div className="feature-image-thumb">
                                      <picture>
                                        <source
                                          media="(min-width: 992px)"
                                          srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                        />

                                        <img
                                          src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/aside-thumb.jpg"
                                          width="70px"
                                          height="70px"
                                        />
                                      </picture>
                                    </div>
                                  </a>
                                </a>
                              </div>
                              <div className="ws-card-body">
                                <p>
                                  <a href="#">How to travel using mobile map</a>
                                </p>
                                <span className="date">
                                  <a href="#">
                                    <i className="fa fa-clock-o" /> Jan 06, 2018
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="ws-question dotted-overlay ws-side-wrap wow fadeInUp"
                          style={whyUs}
                        >
                          <div className="ws-question-wrap">
                            <h3>Get a Question ?</h3>
                            <p className="info">
                              Do not hesitage to give us a call. We are an
                              expert team and we are happy to talk to you.
                            </p>
                            <p>
                              <a href="tel:(123)456-789">(123)456-789</a>
                            </p>
                            <p>
                              <a href="mailto:company@domain.com">
                                company@domain.com
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="ws-subscribe wow fadeInUp">
                          <h3 className="aside-title wow fadeInUp">
                            Newsletter
                          </h3>

                          <form className="ws-subscribe-form">
                            <input
                              type="email"
                              name=""
                              placeholder="Your Email Address"
                            />
                            <input type="submit" name="" value="Subscribe" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Review />
              <div className="section-half-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog-listing">
                        <div className="ws-theme-section-title wow fadeInUp">
                          <h2 className="mb-30 font26 font-weight-500 text-dark text-uppercase mt-0 mb-15-xss">
                            Blog{" "}
                            <span>
                              <a href="#">view all</a>
                            </span>
                          </h2>
                        </div>

                        <div className="blog-listing-wrap wow fadeInUp">
                          <div className="single-blog-listing">
                            <div className="featured-image">
                              <a href="#">
                                <div className="feature-image-thumb">
                                  <picture>
                                    <source
                                      media="(min-width: 992px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg"
                                    />
                                    <source
                                      media="(min-width: 768px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-991.jpg"
                                    />
                                    <img
                                      src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-767.jpg"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                              </a>
                            </div>

                            <div className="card-body">
                              <h3 className="card-title">
                                <a href="#">
                                  America - Grand canyon, Golden Gate
                                </a>
                              </h3>
                              <p className="time">Jan 06, 2018</p>
                              <p className="card-text">
                                Etiam porta sem malesuada magna mollis euismod.
                                Maecenas sed diam eget risus varius blandit sit
                                amet non magna. Vivamus sagittis lacus vel augue
                                laoreet. Etiam portsit amet non magna. Vivamus
                                sagittis lacus vel augue laoreet [...]
                              </p>
                            </div>
                          </div>

                          <div className="single-blog-listing">
                            <div className="featured-image">
                              <a href="#">
                                <div className="feature-image-thumb">
                                  <picture>
                                    <source
                                      media="(min-width: 992px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg"
                                    />
                                    <source
                                      media="(min-width: 768px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-991.jpg"
                                    />
                                    <img
                                      src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-767.jpg"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                              </a>
                            </div>

                            <div className="card-body">
                              <h3 className="card-title">
                                <a href="#">
                                  America - Grand canyon, Golden Gate
                                </a>
                              </h3>
                              <p className="time">Jan 06, 2018</p>
                              <p className="card-text">
                                Etiam porta sem malesuada magna mollis euismod.
                                Maecenas sed diam eget risus varius blandit sit
                                amet non magna. Vivamus sagittis lacus vel augue
                                laoreet. Etiam portsit amet non magna. Vivamus
                                sagittis lacus vel augue laoreet [...]
                              </p>
                            </div>
                          </div>

                          <div className="single-blog-listing">
                            <div className="featured-image">
                              <a href="#">
                                <div className="feature-image-thumb">
                                  <picture>
                                    <source
                                      media="(min-width: 992px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg"
                                    />
                                    <source
                                      media="(min-width: 768px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-991.jpg"
                                    />
                                    <img
                                      src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-767.jpg"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                              </a>
                            </div>

                            <div className="card-body">
                              <h3 className="card-title">
                                <a href="#">
                                  America - Grand canyon, Golden Gate
                                </a>
                              </h3>
                              <p className="time">Jan 06, 2018</p>
                              <p className="card-text">
                                Etiam porta sem malesuada magna mollis euismod.
                                Maecenas sed diam eget risus varius blandit sit
                                amet non magna. Vivamus sagittis lacus vel augue
                                laoreet. Etiam portsit amet non magna. Vivamus
                                sagittis lacus vel augue laoreet [...]
                              </p>
                            </div>
                          </div>
                          <div className="single-blog-listing">
                            <div className="featured-image">
                              <a href="#">
                                <div className="feature-image-thumb">
                                  <picture>
                                    <source
                                      media="(min-width: 992px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg"
                                    />
                                    <source
                                      media="(min-width: 768px)"
                                      srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-991.jpg"
                                    />
                                    <img
                                      src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-767.jpg"
                                      alt=""
                                    />
                                  </picture>
                                </div>
                              </a>
                            </div>

                            <div className="card-body">
                              <h3 className="card-title">
                                <a href="#">
                                  America - Grand canyon, Golden Gate
                                </a>
                              </h3>
                              <p className="time">Jan 06, 2018</p>
                              <p className="card-text">
                                Etiam porta sem malesuada magna mollis euismod.
                                Maecenas sed diam eget risus varius blandit sit
                                amet non magna. Vivamus sagittis lacus vel augue
                                laoreet. Etiam portsit amet non magna. Vivamus
                                sagittis lacus vel augue laoreet [...]
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ws-feature-video">
                        <div className="ws-theme-section-title wow fadeInUp">
                          <h2 className="mb-30 font26 font-weight-500 text-dark text-uppercase mt-0 mb-15-xss">
                            Featured Video{" "}
                            <span>
                              <a href="#">view all</a>
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="ws-single-nav-slider ws-theme-feature-video-slider bg-white-slider wow fadeInUp">
                        <Feature />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
