import React, { Component } from "react";

import customHeader from "../../assets/img/beach1.jpg";
import whyUs from "../../assets/img/travel-moment.jpg";

class Listing extends Component {
  render() {
    var customHeaderImage = {
      backgroundImage: `url(${customHeader})`
    };
    var whychooseUs = {
      backgroundImage: `url(${whyUs})`
    };
    return (
      <div className="layout-right-sidebar">
        <div className="custom-header" style={customHeaderImage}>
          <div className="container">
            <div className="row">
              <header className="entry-header">
                <h1 className="entry-title">Trip Listing</h1>
              </header>
            </div>
          </div>
        </div>

        <div id="breadcrumb">
          <div className="container">
            {/* <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-breadcrumb">
                            <li><a href="#0">Home</a></li>
                            <li><a href="#0">Gallery</a></li>
                            <li><a href="#0">Web</a></li>
                            <li className="current"><em>Project</em></li>
                        </ol>
                    </nav>
                    <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-breadcrumb custom-separator">
                            <li><a href="#0">Home</a></li>
                            <li><a href="#0">Gallery</a></li>
                            <li><a href="#0">Web</a></li>
                            <li className="current"><em>Project</em></li>
                        </ol>
    </nav> */}
            <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
              <ol className="ws-theme-breadcrumb custom-separator custom-icons">
                <li>
                  <a href="#0">
                    {" "}
                    <i className="fa fa-home" aria-hidden="true" /> Home
                  </a>
                </li>
                <li className="current">
                  <i className="fa fa-th-large" aria-hidden="true" />{" "}
                  <em> Trip Listing</em>
                </li>
              </ol>
            </nav>
            {/* <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-breadcrumb triangle">
                            <li><a href="#0">Home</a></li>
                            <li><a href="#0">Gallery</a></li>
                            <li><a href="#0">Web</a></li>
                            <li className="current"><em>Project</em></li>
                        </ol>
                    </nav>
                    <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-breadcrumb triangle custom-icons">
                            <li><a href="#0">Home</a></li>
                            <li><a href="#0">Gallery</a></li>
                            <li className="current"><em>Web</em></li>
                            <li><em>Project</em></li>
                        </ol>
                    </nav>
                    <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-multi-steps text-center">
                            <li className="visited"><a href="#0">Cart</a></li>
                            <li className="visited" ><a href="#0">Billing</a></li>
                            <li className="current"><em>Delivery</em></li>
                            <li><em>Review</em></li>
                        </ol>
                    </nav>
                    <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-multi-steps text-center custom-icons">
                            <li className="visited"><a href="#0">Cart</a></li>
                            <li className="visited" ><a href="#0">Billing</a></li>
                            <li className="current"><em>Delivery</em></li>
                            <li><em>Review</em></li>
                        </ol>
                    </nav>
                    <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-multi-steps text-top">
                            <li className="visited"><a href="#0">Cart</a></li>
                            <li className="visited" ><a href="#0">Billing</a></li>
                            <li className="current"><em>Delivery</em></li>
                            <li><em>Review</em></li>
                        </ol>
                    </nav>
                    <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-multi-steps text-bottom count">
                            <li className="visited"><a href="#0">Cart</a></li>
                            <li className="visited" ><a href="#0">Billing</a></li>
                            <li className="current"><em>Delivery</em></li>
                            <li><em>Review</em></li>
                        </ol>
                    </nav>  */}
          </div>
        </div>

        <div id="content" className="site-content">
          <div className="container">
            <div className="row">
              <div id="primary" className="content-area">
                <main id="main" className="site-main" role="main">
                  <div className="ws-theme-section-filter  clearfix">
                    <div className="wp-travel-toolbar wp-toolbar-left">
                      <h4 className="font16">
                        Filter By
                      </h4>
                      <div className="form-control wp-toolbar-filter-field wt-filter-by-price">
                        <select
                          name="price"
                          className="wp_travel_input_filters price selectpicker show-tick"
                          title="Price"
                        >
                          <option value="low_high" data-type="meta">
                            Price low to high
                          </option>
                          <option value="high_low" data-type="meta">
                            Price high to low
                          </option>
                        </select>
                      </div>
                      <div className="form-control wp-toolbar-filter-field wt-filter-by-itinerary-types ">
                        <select
                          name="type"
                          id="type"
                          className="wp_travel_input_filters type selectpicker show-tick"
                          data-live-search="true"
                          title="Trip Type"
                          data-size="10"
                        >
                          <option className="level-0" value="16">
                            Casual Tours
                          </option>
                          <option className="level-0" value="16">
                            Casual Tours
                          </option>
                          <option className="level-0" value="16">
                            Casual Tours
                          </option>
                          <option className="level-0" value="16">
                            Casual Tours
                          </option>
                          <option className="level-0" value="16">
                            Casual Tours
                          </option>
                          <option className="level-0" value="16">
                            Casual Tours
                          </option>
                        </select>
                      </div>
                      <div className="form-control wp-toolbar-filter-field wt-filter-by-travel-locations">
                        <select
                          name="location"
                          id="location"
                          className="wp_travel_input_filters location selectpicker show-tick"
                          data-live-search="true"
                          title="Location"
                          data-size="10"
                        >
                          <option className="level-0" value="8">
                            Bhutan
                          </option>
                          <option className="level-0" value="9">
                            Nepal
                          </option>
                          <option className="level-0" value="15">
                            Thailand
                          </option>
                          <option className="level-0" value="8">
                            Bhutan
                          </option>
                          <option className="level-0" value="9">
                            Nepal
                          </option>
                          <option className="level-0" value="15">
                            Thailand
                          </option>
                          <option className="level-0" value="8">
                            Bhutan
                          </option>
                          <option className="level-0" value="9">
                            Nepal
                          </option>
                          <option className="level-0" value="15">
                            Thailand
                          </option>
                          <option className="level-0" value="8">
                            Bhutan
                          </option>
                          <option className="level-0" value="9">
                            Nepal
                          </option>
                          <option className="level-0" value="15">
                            Thailand
                          </option>
                        </select>
                      </div>
                      <div className="form-control wp-travel-filter-button">
                        <button className="btn-wp-travel-filter">Show</button>
                      </div>
                      <div className="view-control">
                        <a
                          className=""
                          href="//skynet.wensolutions.com/travel-log/itinerary/?view_mode=grid"
                        >
                          <i className="fa fa-th-large" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="view-control">
                        <a
                          className="active"
                          href="//skynet.wensolutions.com/travel-log/itinerary/?view_mode=list"
                        >
                          <i className="fa fa-bars" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* list view and grid view design 

                        add class in ws-listing-trips 
                        for grid view .listing-grid-view and for multiple column .one-column .two-column .three-column .four-column
                        for grid view content only of 10 words

                        for list view .listing-list-view 

                        for list view content of 24 words
                         */}
                  <div className="ws-listing-trips listing-grid-view three-column wow fadeInUp clearfix">
                    <div className="card clearfix">
                      <div className="featured-image">
                        <div className="wp-travel-offer">
                          <span>Offer</span>
                        </div>
                        <a href="#">
                          <div className="feature-image-thumb">
                            <p className="time">7 Days 8 Nights</p>
                            <picture>
                              <source
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/slide-767.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
                                alt=""
                              />
                            </picture>
                          </div>
                        </a>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#">Switzerland</a>
                        </h3>

                        <p className="avilable-date">
                          Availability: Jan 18’ - Dec 16’
                        </p>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam[...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                          <span>Offer</span>
                        </div>
                        <a href="#">
                          <div className="feature-image-thumb">
                            <p className="time">7 Days 8 Nights</p>
                            <picture>
                              <source
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/slide-767.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
                                alt=""
                              />
                            </picture>
                          </div>
                        </a>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#">Switzerland</a>
                        </h3>

                        <p className="avilable-date">
                          Availability: Jan 18’ - Dec 16’
                        </p>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam[...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                            <p className="time">7 Days 8 Nights</p>
                            <picture>
                              <source
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/slide-767.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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

                        <p className="avilable-date">
                          Availability: Jan 18’ - Dec 16’
                        </p>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam[...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                            <p className="time">7 Days 8 Nights</p>
                            <picture>
                              <source
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/slide-767.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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

                        <p className="avilable-date">
                          Availability: Jan 18’ - Dec 16’
                        </p>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam[...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                            <p className="time">7 Days 8 Nights</p>
                            <picture>
                              <source
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/slide-767.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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

                        <p className="avilable-date">
                          Availability: Jan 18’ - Dec 16’
                        </p>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam[...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                            <p className="time">7 Days 8 Nights</p>
                            <picture>
                              <source
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/slide-767.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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

                        <p className="avilable-date">
                          Availability: Jan 18’ - Dec 16’
                        </p>
                        <p className="card-text">
                          Etiam porta sem malesuada magna mollis euismod.
                          Maecenas sed diam[...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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

                  <div className="ws-listing-trips listing-list-view wow fadeInUp clearfix">
                    <div className="card clearfix">
                      <div className="featured-image">
                        <div className="wp-travel-offer">
                          <span>Offer</span>
                        </div>
                        <a href="#">
                          <div className="feature-image-thumb">
                            <picture>
                              <source
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-default.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus vel augue laoreet
                          [...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-default.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus vel augue laoreet
                          [...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-default.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus vel augue laoreet
                          [...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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
                                media="(min-width: 1200px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-default.jpg"
                              />
                              <source
                                media="(min-width: 992px)"
                                srcSet="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-992.jpg"
                              />
                              <img
                                src="http://skynet.wensolutions.com/ws-theme-addon/wp-content/plugins/ws-theme-addons-pro/assets/public/images/zermatt-smallscreen.jpg"
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
                          Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Vivamus sagittis lacus vel augue laoreet
                          [...]
                        </p>
                      </div>
                      <aside className="right-wrapper">
                        <div className="prices clearfix">
                          <p className="from">
                            from <del className="hidden-above-md">$4,300</del>
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
                            <span>2 Review</span>
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

                  <nav role="navigation" className="pagination">
                    <ul className="ws-theme-pagination">
                      <li className="button">
                        <a className="disabled" href="#0">
                          Prev
                        </a>
                      </li>
                      <li>
                        <a className="current" href="#0">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#0">2</a>
                      </li>
                      <li>
                        <a href="#0">3</a>
                      </li>
                      <li>
                        <a href="#0">4</a>
                      </li>
                      <li>
                        <span>...</span>
                      </li>
                      <li>
                        <a href="#0">20</a>
                      </li>
                      <li className="button">
                        <a href="#0">Next</a>
                      </li>
                    </ul>
                  </nav>
                </main>
              </div>
              <aside
                id="secondary"
                className="widget-area"
                role="complementary"
              >
                <div className="sticky-sidebar">
                  {/* dark and light layout for advance form .dark-layout and .light-layout*/}
                  <div
                    className="ws-advance-form light-layout  wow fadeInUp"
                    data-wow-duration="0.4s"
                    data-wow-delay="1s"
                    id="ws-advance-form"
                  >
                    <form action="/action_page.php">
                      <h3 className="mt-0 font24 text-uppercase mb-15 font-weight-500 ">
                        search tours
                      </h3>
                      <div className="form-content-wrapper">
                        <div className="form-top-wrapper">
                          <div className="form-content">
                            <label
                              className="d-block ml-5 mb-5 mt-0 font14"
                              htmlFor="ws-keyword"
                            >
                              Search Keyword
                            </label>
                            <input
                              type="text"
                              id="ws-keyword"
                              name="firstname"
                              placeholder="Search by keyboard"
                            />
                          </div>
                          <div className="form-content">
                            <label
                              className="d-block ml-5 mb-5 mt-0 font14"
                              htmlFor="ws-destination"
                            >
                              Choose Destinations
                            </label>
                            <select
                              className="select form-control trip-destinations selectpicker show-menu-arrow show-tick"
                              data-live-search="true"
                              title="Select Destination"
                              id="ws-destination"
                              data-size="10"
                            >
                              <optgroup label="Asia">
                                <option value="1">Nepal</option>
                                <option value="2">Bhutan</option>
                                <option value="3">India</option>
                                <option value="4">Thailand</option>
                              </optgroup>
                              <optgroup label="Europe">
                                <option value="11">Germany</option>
                                <option value="12">England</option>
                                <option value="13">Span</option>
                                <option value="14">France</option>
                                <option value="15">Austria</option>
                                <option value="16">Turkey</option>
                                <option value="17">Russia</option>
                                <option value="18">Portugal</option>
                              </optgroup>
                              <optgroup label="North America">
                                <option value="21">USA</option>
                                <option value="22">Canada</option>
                                <option value="23">Cuba</option>
                                <option value="24">Mexico</option>
                              </optgroup>
                              <optgroup label="South America">
                                <option value="31">Brazil</option>
                                <option value="32">Argentina</option>
                                <option value="33">Cuba</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-content">
                            <label
                              className="d-block ml-5 mb-5 mt-0 font14"
                              htmlFor="ws-trip-type"
                            >
                              Choose Trip Type
                            </label>
                            <select
                              className="select form-control trip-type selectpicker show-menu-arrow show-tick"
                              id="ws-trip-type"
                              data-live-search="true"
                              title="Select Trip Type"
                              data-selected-text-format="count"
                              multiple
                            >
                              <option value="31">Rafting</option>
                              <option value="32">Paragliding</option>
                              <option value="33">Jungle Safari</option>
                              <option value="34">Trekk</option>
                              <option value="35">Boating</option>
                              <option value="36">Sight Seeing</option>
                            </select>
                          </div>
                          <div className="form-content">
                            <label
                              className="d-block ml-5 mb-5 mt-0 font14"
                              htmlFor="ws-trip-duration"
                            >
                              Choose Trip duration
                            </label>
                            <select
                              className="select form-control trip-duration selectpicker show-menu-arrow show-tick"
                              title="Select Duration"
                              id="ws-trip-duration"
                              data-live-search="true"
                              data-size="10"
                            >
                              <option value="41">2 days</option>
                              <option value="42">4 days</option>
                              <option value="43">1 week</option>
                            </select>
                          </div>
                          <div className="form-content wp-travel-form-field wp-travel-trip-duration">
                            <label className="d-block ml-5 mb-5 mt-0 font14">
                              Trip Start End Range
                            </label>
                            <input
                              type="text"
                              data-range="true"
                              data-multiple-dates-separator=" - "
                              data-language="en"
                              placeholder="Select a date range"
                              className="range-datepicker"
                            />
                          </div>
                          <div className="prices price-min-max">
                            <label
                              className="d-block ml-5 mb-5 mt-0 font14"
                              htmlFor="ws-min-price"
                            >
                              Price Range
                            </label>
                            <input
                              className="irs-hidden-input"
                              type="number"
                              name=""
                              id="ws-min-price"
                            />
                          </div>
                        </div>

                        <input
                          type="submit"
                          value="Search"
                          className="button"
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    className="ws-question dotted-overlay ws-side-wrap wow fadeInUp"
                    style={whychooseUs}
                  >
                    <div className="ws-question-wrap">
                      <h3>Get a Question ?</h3>
                      <p className="info">
                        Do not hesitage to give us a call. We are an expert team
                        and we are happy to talk to you.
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
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
