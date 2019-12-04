import React, { Component } from "react";

import customHeader from "../../assets/img/beach1.jpg";
import Feature from "../Slider/Feature";

class singlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.tabClick = this.tabClick.bind(this);
  }
  tabClick = e => {
    e.preventDefault();

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-pane");
    tablinks = document
      .getElementById("myTab")
      .getElementsByTagName("li")
      .getElementsByTagName("a")
      .getAttribute("href");

    console.log(tablinks);

    // document.getElementById(tabName).style.display = "block";
    // e.currentTarget.className += "show";
  };

  render() {
    var customHeaderImage = {
      backgroundImage: `url(${customHeader})`
    };
    return (
      <div className="layout-right-sidebar">
        <div className="custom-header" style={customHeaderImage}>
          <div className="container">
            <div className="row">
              <header className="entry-header">
                <h1 className="entry-title">singlePage</h1>
              </header>
            </div>
          </div>
        </div>

        <div id="breadcrumb">
          <div className="container">
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
                  <em> SinglePage</em>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div id="content" className="site-content">
          <div className="container">
            <div className="row">
              <div id="primary" className="content-area">
                <main id="main" className="site-main" role="main">
                  <div className="top_content_single">
                    <div className="title-single clearfix">
                      <div className="title">
                        <h2 className="font26 ">Anchorage to Ushuaia</h2>
                      </div>
                      <div className="tour_code">
                        <strong>Code: </strong>
                        <code>VBGRDS</code>
                      </div>
                    </div>

                    <div id="social-share" className="single-post-social-share">
                      <ul className="ws-theme-social-icons soc-icon-circle dark-layout">
                        <li className="facebook">
                          <a target="_blank" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="twitter">
                          <a target="_blank" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="linkedin">
                          <a target="_blank" href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="pinterest">
                          <a target="_blank" href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                        <li className="google-plus">
                          <a target="_blank" href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="youtube">
                          <a target="_blank" href="#">
                            <i className="fa fa-youtube" />
                          </a>
                        </li>
                        <li className="rss">
                          <a target="_blank" href="#">
                            <i className="fa fa-rss" />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tour-info tour-has-image-itinerary">
                      <div className="tour-info-box clearfix">
                        <div
                          className="tour-info-column"
                          style={{ flexWrap: "wrap" }}
                        >
                          <span className="tour-info-item tour-info-type">
                            <i className="fa fa-flag" aria-hidden="true" />
                            Special Tour
                          </span>
                          <span className="tour-info-item tour-info-address">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
                            Nha Trang, Vietnam
                          </span>
                          <span className="tour-info-item tour-info-duration">
                            <i className="fa fa-clock-o" aria-hidden="true" />4
                            day 3 night
                          </span>
                          <span className="tour-info-item tour-info-destination">
                            <i className="fa fa-globe" aria-hidden="true" />
                            Asia
                          </span>
                          <span className="tour-info-item tour-info-land">
                            <i
                              className="flaticon-transport"
                              aria-hidden="true"
                            />
                            Kathmandu
                          </span>
                          <span className="tour-info-item tour-info-takeoff">
                            <i
                              className="flaticon-transport-1"
                              aria-hidden="true"
                            />
                            Kathmandu
                          </span>
                          <span className="tour-info-item tour-info-date">
                            <i className="fa fa-calendar" aria-hidden="true" />
                            Availability: 2018-10-31
                            <span
                              className="tooltip-area"
                              title="Click here to see othere's available dates."
                            >
                              <a href="#availabily-wrapper">
                                {" "}
                                <i
                                  className="fa fa-info-circle"
                                  aria-hidden="true"
                                />
                              </a>
                            </span>
                          </span>
                          <span className="tour-info-item tour-info-guider">
                            <i className="fa fa-user" aria-hidden="true" />
                            <a href="#0">Tour Guide: Nick Anderson</a>
                          </span>
                          <span className="tour-info-item tour-info-age-limit">
                            <i className="fa fa-user" />
                            Min Age : 10+
                          </span>
                          <span className="tour-info-item tour-info-age-limit">
                            <i className="fa fa-users" />
                            Group Size : 1-20
                          </span>
                          <span className="tour-info-item tour-grade">
                            <i className="fa fa-signal" />
                            Grade: Moderate
                          </span>
                          <span className="tour-info-item tour-altitude">
                            <i className="fa fa-area-chart" />
                            Max Altitude: 1350m
                          </span>
                          <span className="tour-info-item tour-trek-duration">
                            <i className="flaticon-sport" />
                            Per Day Hiking: 5-6 Hour
                          </span>
                          <span className="tour-info-item tour-best-time">
                            <i className="fa fa-cloud" />
                            Best Season: Sept - Nov &amp; Mar - May
                          </span>
                          <span className="tour-info-item tour-accomodation">
                            <i className="fa fa-bed" />
                            Accomodation: Hotel
                          </span>
                          <span className="tour-info-item tour-transportation">
                            <i className="fa fa-car" />
                            Transportation: Vai car /Bus/fly
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="download-pdf clearfix">
                      <a
                        href="#0"
                        className="btn btn-block simple rounded-0"
                        type="button"
                        target="_blank"
                      >
                        Download brochure (pdf)
                      </a>
                      <a
                        href="#availabily-wrapper"
                        className="btn btn-block simple rounded-0"
                        type="button"
                      >
                        See Dates and Book Now
                      </a>
                    </div>
                    {
                      //   <div className="ws-single-nav-slider">
                      //   <div className="slider slider-single">
                      //     <div className="item-video">
                      //       <div
                      //         className="slick-video-wrapper"
                      //         data-href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
                      //       >
                      //         {/* <!-- <div className="slick-video-frame">
                      //                             load iframe here after clicking on image by a href link
                      //                         </div> --> */}
                      //         <div className="slick-video-play-icon" />
                      //         <div className="slick-video-tn">
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-3.jpg" />
                      //         </div>
                      //       </div>
                      //     </div>
                      //     <div className="item-image">
                      //       <div className="slick-image-wrapper">
                      //         {/* <!-- data-effect="mfp-zoom-in"
                      //                         data-effect="mfp-newspaper"
                      //                         data-effect="mfp-move-horizontal"
                      //                         data-effect="mfp-move-from-top"
                      //                         data-effect="mfp-3d-unfold"
                      //                         data-effect="mfp-zoom-out"
                      //                         --> */}
                      //         <a
                      //           className="slick-image"
                      //           data-effect="mfp-zoom-out"
                      //           href="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg"
                      //         >
                      //           <div className="slick-image-tn">
                      //             <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg" />
                      //           </div>
                      //         </a>
                      //       </div>
                      //     </div>
                      //     <div className="item-image">
                      //       <div className="slick-image-wrapper">
                      //         <a
                      //           className="slick-image"
                      //           data-effect="mfp-zoom-out"
                      //           href="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg"
                      //         >
                      //           <div className="slick-image-tn">
                      //             <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg" />
                      //           </div>
                      //         </a>
                      //       </div>
                      //     </div>
                      //     <div className="item-image">
                      //       <div className="slick-image-wrapper">
                      //         <a
                      //           className="slick-image"
                      //           data-effect="mfp-zoom-out"
                      //           href="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg"
                      //         >
                      //           <div className="slick-image-tn">
                      //             <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg" />
                      //           </div>
                      //         </a>
                      //       </div>
                      //     </div>
                      //     <div className="item-image">
                      //       <div className="slick-image-wrapper">
                      //         <a
                      //           className="slick-image"
                      //           data-effect="mfp-zoom-out"
                      //           href="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg"
                      //         >
                      //           <div className="slick-image-tn">
                      //             <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg" />
                      //           </div>
                      //         </a>
                      //       </div>
                      //     </div>
                      //     <div className="item-image">
                      //       <div className="slick-image-wrapper">
                      //         <a
                      //           className="slick-image"
                      //           data-effect="mfp-zoom-out"
                      //           href="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg"
                      //         >
                      //           <div className="slick-image-tn">
                      //             <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg" />
                      //           </div>
                      //         </a>
                      //       </div>
                      //     </div>
                      //     <div className="item-image">
                      //       <div className="slick-image-wrapper">
                      //         <a
                      //           className="slick-image"
                      //           data-effect="mfp-zoom-out"
                      //           href="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg"
                      //         >
                      //           <div className="slick-image-tn">
                      //             <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg" />
                      //           </div>
                      //         </a>
                      //       </div>
                      //     </div>
                      //     <div className="item-image">
                      //       <div className="slick-image-wrapper">
                      //         <a
                      //           className="slick-image"
                      //           data-effect="mfp-zoom-out"
                      //           href="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg"
                      //         >
                      //           <div className="slick-image-tn">
                      //             <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-31.jpg" />
                      //           </div>
                      //         </a>
                      //       </div>
                      //     </div>
                      //   </div>
                      //   <div className="slider slider-nav">
                      //     <div className="projectitem video-item">
                      //       <article className="module-post">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-6.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //     <div className="projectitem">
                      //       <article className="module-post video-thumb">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-61.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //     <div className="projectitem">
                      //       <article className="module-post video-thumb">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-61.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //     <div className="projectitem">
                      //       <article className="module-post image-thumb">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-61.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //     <div className="projectitem">
                      //       <article className="module-post image-thumb">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-61.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //     <div className="projectitem">
                      //       <article className="module-post image-thumb">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-61.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //     <div className="projectitem">
                      //       <article className="module-post image-thumb">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-61.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //     <div className="projectitem">
                      //       <article className="module-post image-thumb">
                      //         <figure>
                      //           <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slider-small-61.jpg" />
                      //         </figure>
                      //       </article>
                      //     </div>
                      //   </div>
                      // </div>
                    }
                    <div className="ws-single-nav-slider ws-theme-feature-video-slider bg-white-slider wow fadeInUp">
                      <Feature />
                    </div>

                    <div className="ws-theme-tabs clearfix">
                      <div id="someTab">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div role="tabpanel">
                              <nav className="for-equal-height">
                                <ul
                                  id="myTab"
                                  className="nav nav-tabs ws-theme-tabs-navigation"
                                  role="tablist"
                                >
                                  <li role="presentation" className="active">
                                    <a
                                      href="#ws-theme-tab-description"
                                      aria-controls="ws-theme-tab-description"
                                      role="tab"
                                      data-toggle="tab"
                                      onClick={this.tabClick}
                                    >
                                      <i
                                        className="fa fa-info-circle"
                                        aria-hidden="true"
                                      />
                                      Description
                                    </a>
                                  </li>
                                  <li role="presentation">
                                    <a
                                      href="#ws-theme-tab-itinerary"
                                      aria-controls="ws-theme-tab-itinerary"
                                      role="tab"
                                      data-toggle="tab"
                                      onClick={this.tabClick}
                                    >
                                      <i
                                        className="fa fa-calendar-check-o"
                                        aria-hidden="true"
                                      />
                                      Itinerary and Direction
                                    </a>
                                  </li>
                                  <li role="presentation">
                                    <a
                                      href="#ws-theme-tab-location"
                                      aria-controls="ws-theme-tab-location"
                                      role="tab"
                                      data-toggle="tab"
                                      onClick={this.tabClick}
                                    >
                                      <i
                                        className="fa fa-location-arrow"
                                        aria-hidden="true"
                                      />
                                      Location
                                    </a>
                                  </li>
                                  <li role="presentation">
                                    <a
                                      href="#ws-theme-tab-reviews"
                                      aria-controls="ws-theme-tab-reviews"
                                      role="tab"
                                      data-toggle="tab"
                                      onClick={this.tabClick}
                                    >
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      Reviews
                                    </a>
                                  </li>
                                  <li role="presentation">
                                    <a
                                      href="#trip-ws-theme-tab-faq"
                                      aria-controls="ws-theme-tab-trip-faq"
                                      role="tab"
                                      data-toggle="tab"
                                      onClick={this.tabClick}
                                    >
                                      <i
                                        className="fa fa-question-circle"
                                        aria-hidden="true"
                                      />
                                      Trip FAQ
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                              <div className="tab-content">
                                <div
                                  role="tabpanel"
                                  className="tab-pane active"
                                  id="ws-theme-tab-description"
                                >
                                  <div className="ws-theme-description-overview">
                                    <p>
                                      We have only one of the best{" "}
                                      <strong>Royal trek</strong> in Nepal near
                                      Pokhara north of the{" "}
                                      <strong>Annapurna region.</strong> This is
                                      one of the short trek follows a shrub like
                                      path along the foothills of valley. The
                                      Royal trek is named because Prince Charles
                                      and his 90 person entourage had explored
                                      this route in the early eighties. The
                                      royal treks provide the opportunities for
                                      meaningful cultural experience with the
                                      diverse miz of peoples and cultural that
                                      inhabit this region.
                                    </p>

                                    <p>
                                      <strong>The Royal treks </strong>is star
                                      from attractive village from vijiayapur
                                      Gurung hamlet village .During the trek u
                                      can enjoy spectacular views of the
                                      powerfully build hillside rice terraces
                                      and the magnificent Annapurna Himalayan
                                      range with all snow cover mountain. This
                                      trip is end at the scenic began as Lake
                                      Which is 30 kilo meter from Pokhara down.
                                    </p>

                                    <p>
                                      <strong>The Royal treks </strong>trip is
                                      basically recommended for beginners who
                                      are restricted be time to trek longer.
                                    </p>

                                    <p>
                                      Royal treks in front of a true picture of
                                      uniqueness and allowing us the chance to
                                      capture the traditional life styles of the
                                      tribes whose ancient religious practices
                                      and traditions have remained unchanged for
                                      thousands of year.
                                    </p>

                                    <p>
                                      Compare to{" "}
                                      <strong>
                                        other trekking areas in Annapurna region
                                      </strong>{" "}
                                      of the Royal trekking route is less
                                      crowded, so you can get more close nature,
                                      cultural and life styles.
                                    </p>
                                  </div>
                                  <div
                                    className="availabily-wrapper"
                                    id="availabily-wrapper"
                                  >
                                    <div className="section-title text-left">
                                      <h4 className="mt-30">Availability</h4>
                                    </div>
                                    <ul className="availabily-list">
                                      <li className="availabily-heading clearfix">
                                        <div className="date-from">start</div>
                                        <div className="date-to">end</div>
                                        <div className="status">status</div>
                                        <div className="price">price</div>
                                        <div className="action">&nbsp;</div>
                                      </li>
                                      <li className="availabily-content clearfix">
                                        <div className="date-from">
                                          <span className="availabily-heading-label">
                                            start:
                                          </span>{" "}
                                          Monday
                                          <span>March 7, 2016</span>
                                        </div>
                                        <div className="date-to">
                                          <span className="availabily-heading-label">
                                            end:
                                          </span>{" "}
                                          Thursday
                                          <span>March 10, 2016</span>
                                        </div>
                                        <div className="status">
                                          <span className="availabily-heading-label">
                                            status:
                                          </span>{" "}
                                          seats left
                                          <span>15</span>
                                        </div>
                                        <div className="price">
                                          <span className="availabily-heading-label">
                                            price:
                                          </span>
                                          <del>
                                            <span> $ 400 </span>
                                          </del>
                                          <span className="person-count">
                                            <ins>
                                              <span>$ 300</span>
                                            </ins>
                                            /Person
                                          </span>
                                        </div>
                                        <div className="action">
                                          <a
                                            href="#"
                                            className="btn btn-outline-primary btn-sm rounded-0"
                                          >
                                            Book now
                                          </a>
                                        </div>
                                      </li>
                                      <li className="availabily-content clearfix">
                                        <div className="date-from">
                                          <span className="availabily-heading-label">
                                            start:
                                          </span>{" "}
                                          Saturday
                                          <span>March 26, 2016</span>
                                        </div>
                                        <div className="date-to">
                                          <span className="availabily-heading-label">
                                            end:
                                          </span>{" "}
                                          Tuesday
                                          <span>March 29, 2016</span>
                                        </div>
                                        <div className="status">
                                          <span className="availabily-heading-label">
                                            status:
                                          </span>{" "}
                                          seats left
                                          <span>20</span>
                                        </div>
                                        <div className="price">
                                          <span className="availabily-heading-label">
                                            price:
                                          </span>
                                          <span>$1400</span>
                                        </div>
                                        <div className="action">
                                          <a
                                            href="#"
                                            className="btn btn-outline-primary btn-sm rounded-0"
                                          >
                                            Book now
                                          </a>
                                        </div>
                                      </li>

                                      <li className="availabily-content sold-out clearfix">
                                        <div className="date-from">
                                          <span className="availabily-heading-label">
                                            start:
                                          </span>{" "}
                                          Sunday
                                          <span>April 10, 2016</span>
                                        </div>
                                        <div className="date-to">
                                          <span className="availabily-heading-label">
                                            end:
                                          </span>{" "}
                                          Wednesday
                                          <span>April 13, 2016</span>
                                        </div>
                                        <div className="status">
                                          <span className="availabily-heading-label">
                                            status:
                                          </span>
                                          <span className="text-danger">
                                            sold-out
                                          </span>
                                        </div>
                                        <div className="price">
                                          <span className="availabily-heading-label">
                                            price:
                                          </span>
                                          <span>$1300</span>
                                        </div>
                                        <div className="action">
                                          <a
                                            href="#"
                                            className="btn btn-outline-primary btn-sm rounded-0"
                                          >
                                            Book now
                                          </a>
                                        </div>
                                      </li>
                                      <li className="availabily-content clearfix">
                                        <div className="date-from">
                                          <span className="availabily-heading-label">
                                            start:
                                          </span>{" "}
                                          Friday
                                          <span>April 18, 2016</span>
                                        </div>
                                        <div className="date-to">
                                          <span className="availabily-heading-label">
                                            end:
                                          </span>{" "}
                                          Monday
                                          <span>April 21, 2016</span>
                                        </div>
                                        <div className="status">
                                          <span className="availabily-heading-label">
                                            status:
                                          </span>{" "}
                                          seats left
                                          <span>4</span>
                                        </div>
                                        <div className="price">
                                          <span className="availabily-heading-label">
                                            price:
                                          </span>
                                          <span>$1458</span>
                                        </div>
                                        <div className="action">
                                          <a
                                            href="#"
                                            className="btn btn-outline-primary btn-sm rounded-0"
                                          >
                                            Book now
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <table className="tours-tabs_table pt-15">
                                    <tbody>
                                      <tr>
                                        <th>
                                          <strong>
                                            DEPARTURE/RETURN LOCATION
                                          </strong>
                                        </th>
                                        <td>
                                          San Francisco International Airport
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>
                                          <strong>DEPARTURE TIME</strong>
                                        </th>
                                        <td>
                                          Please arrive at least&nbsp;2 hours
                                          before the flight.
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>
                                          <strong>INCLUDED</strong>
                                        </th>
                                        <td>
                                          <table>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <i className="fa fa-check icon-tick icon-tick--on" />
                                                  Airport / Hotel / Airport pick
                                                  up &nbsp; drop by private car
                                                  or van. It is depend of the
                                                  group.
                                                </td>
                                                <td>
                                                  <i className="fa fa-check icon-tick icon-tick--on" />
                                                  2 nights accommodation in 2/3
                                                  star category hotel in
                                                  Kathmandu located tourist
                                                  center, or up to you.
                                                </td>

                                                <td>
                                                  <i className="fa fa-check icon-tick icon-tick--on" />
                                                  Meals on full board
                                                  (Breakfast, lunch and dinner)
                                                  during the in trekking.
                                                </td>
                                                <td>
                                                  <i className="fa fa-check icon-tick icon-tick--on" />
                                                  Local fresh fruits like
                                                  orange, apple, banana and
                                                  grape etc.
                                                </td>

                                                <td>
                                                  <i className="fa fa-check icon-tick icon-tick--on" />
                                                  All accommodations during the
                                                  trek
                                                </td>
                                                <td>
                                                  <i className="fa fa-check icon-tick icon-tick--on" />
                                                  Annapurna Trekking Map
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>
                                          <b>NOT INCLUDED</b>
                                        </th>
                                        <td>
                                          <table>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  Entrance fees
                                                </td>
                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  Guide&nbsp;gratuity
                                                </td>
                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  Meals yourself Kathmandu
                                                  (L+D).
                                                </td>
                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  Your Travel insurance.
                                                </td>

                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  International airfare.
                                                </td>
                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  Nepal entry visa ( You can
                                                  obtain a visa easily upon your
                                                  arrival at Nepal’s Airport in
                                                  Kathmandu).
                                                </td>
                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  All kind drinks (Alcoholic,
                                                  hot and cold drinks)
                                                </td>
                                                <td>
                                                  <i className="fa fa-times icon-tick icon-tick--off" />
                                                  Personal shopping and laundry
                                                  etc.
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div
                                  role="tabpanel"
                                  className="tab-pane"
                                  id="ws-theme-tab-itinerary"
                                >
                                  <div className="itinerary-item intro-item">
                                    <h5>Introduction</h5>
                                    <div className="intro-item-body">
                                      <p>
                                        Elit scelerisque mauris pellentesque
                                        pulvinar pellentesque habitant. Orci
                                        sagittis eu volutpat odio facilisis.
                                        Quis risus sed vulputate odio ut enim
                                        blandit. Nunc sed augue lacus viverra
                                        vitae. Odio facilisis mauris sit amet
                                        massa. Tincidunt lobortis feugiat
                                        vivamus at augue. Arcu bibendum at
                                        varius vel pharetra vel.
                                      </p>
                                    </div>
                                  </div>

                                  <iframe
                                    id="location-map"
                                    src="https://www.google.com/maps/d/embed?mid=1W6wzNwgZHkX_JsIxLT27lrP6pLqwzeRM"
                                    width="100%"
                                    height="480"
                                  />

                                  <div className="itinerary-day-label mt-40">
                                    <span>Day</span>
                                  </div>
                                  <div
                                    id="ws-theme-timeline"
                                    className="ws-theme-container"
                                  >
                                    <div className="panel-group number-accordion">
                                      <div className="panel ws-theme-timeline-block">
                                        <div
                                          className="panel-heading"
                                          data-toggle="collapse"
                                          data-parent=".number-accordion"
                                          href="#number-accordion1"
                                        >
                                          <div className="ws-theme-timeline-img">
                                            1
                                          </div>
                                          <h4 className="panel-title">
                                            Arrive in Kathmandu airport and
                                            transfer your Hotel (1350m){" "}
                                          </h4>
                                        </div>
                                        <div
                                          id="number-accordion1"
                                          className="panel-collapse collapse in"
                                        >
                                          <div className="panel-body">
                                            <p>
                                              Meet the international Airport and
                                              We will transferred to our hotel
                                              after hotel we will invite to
                                              visit our office give the some
                                              briefing about the each day
                                              program with tomorrow departure
                                              time etc . Overnight in Kathmandu.
                                            </p>
                                            <span className="time">Jan 14</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="panel ws-theme-timeline-block">
                                        <div
                                          className="panel-heading collapsed"
                                          data-toggle="collapse"
                                          data-parent=".number-accordion"
                                          href="#number-accordion2"
                                        >
                                          <div className="ws-theme-timeline-img">
                                            2
                                          </div>
                                          <h4 className="panel-title">
                                            Fly from Kathmandu to Pokhara and
                                            drive to Nayapul 50km and Trek to
                                            hot sparing (1730m)
                                          </h4>
                                        </div>
                                        <div
                                          id="number-accordion2"
                                          className="panel-collapse collapse"
                                        >
                                          <div className="panel-body">
                                            <p>
                                              After having breakfast early in
                                              the morning with fly to Pokhara
                                              and drive to Nayapul and It is
                                              about 1 hour:20 minute to get
                                              there via car or van , it is
                                              depend of the our group. We start
                                              our trekking from Nayapul. During
                                              the hike we pass many local
                                              villages, tea houses, gentle green
                                              rolling hills, rivers and local
                                              people.
                                            </p>

                                            <p>
                                              {" "}
                                              After crossing the Modhi Khola and
                                              walk to Nepalese flat , after rich
                                              the saylu bazzar then trail begins
                                              to climb up quite steeply on a
                                              stone staircase that is more than
                                              1600 steps then we can see Mt.
                                              Annapurna south (7219m.) and
                                              Hiunchuli (6441m.).Pokhara to
                                              Ghandurk Village(1960m, 4/5 hours
                                              walking)and then overnight at
                                              Lodge
                                            </p>
                                            <span className="time">Jan 14</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="panel ws-theme-timeline-block">
                                        <div
                                          className="panel-heading collapsed"
                                          data-toggle="collapse"
                                          data-parent=".number-accordion"
                                          href="#number-accordion3"
                                        >
                                          <div className="ws-theme-timeline-img">
                                            3
                                          </div>
                                          <h4 className="panel-title">
                                            Trek Ghadruk Village to
                                            Sinuwa(1900m)
                                          </h4>
                                        </div>
                                        <div
                                          id="number-accordion3"
                                          className="panel-collapse collapse"
                                        >
                                          <div className="panel-body">
                                            <p>
                                              After morning breakfast in
                                              Ghandurk Village trail slightly
                                              goes uphill to Ghandurng Hill.
                                              2010m last permanent arrangement
                                              in the valley and the trail
                                              descends down to stone steps to
                                              kimrung khlao than ascends to
                                              Chhumrung village . After a short
                                              stop, we trek to Chumrung by
                                              passing the Sinuwa dada. Overnight
                                              in lodge
                                            </p>
                                            <span className="time">Jan 14</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="ws-theme-timeline-block">
                                      <div className="ws-theme-timeline-img">
                                        1
                                      </div>

                                      <div className="ws-theme-timeline-content">
                                        <h4>
                                          Arrive in Kathmandu airport and
                                          transfer your Hotel (1350m)
                                        </h4>
                                        <p>
                                          Meet the international Airport and We
                                          will transferred to our hotel after
                                          hotel we will invite to visit our
                                          office give the some briefing about
                                          the each day program with tomorrow
                                          departure time etc . Overnight in
                                          Kathmandu.
                                        </p>
                                        <span className="cd-date">Jan 14</span>
                                      </div>
                                    </div>

                                    <div className="ws-theme-timeline-block">
                                      <div className="ws-theme-timeline-img">
                                        2
                                      </div>

                                      <div className="ws-theme-timeline-content">
                                        <h4>
                                          Fly from Kathmandu to Pokhara and
                                          drive to Nayapul 50km and Trek to hot
                                          sparing (1730m)
                                        </h4>
                                        <p>
                                          After having breakfast early in the
                                          morning with fly to Pokhara and drive
                                          to Nayapul and It is about 1 hour:20
                                          minute to get there via car or van ,
                                          it is depend of the our group. We
                                          start our trekking from Nayapul.
                                          During the hike we pass many local
                                          villages, tea houses, gentle green
                                          rolling hills, rivers and local
                                          people.
                                        </p>

                                        <p>
                                          {" "}
                                          After crossing the Modhi Khola and
                                          walk to Nepalese flat , after rich the
                                          saylu bazzar then trail begins to
                                          climb up quite steeply on a stone
                                          staircase that is more than 1600 steps
                                          then we can see Mt. Annapurna south
                                          (7219m.) and Hiunchuli
                                          (6441m.).Pokhara to Ghandurk
                                          Village(1960m, 4/5 hours walking)and
                                          then overnight at Lodge
                                        </p>
                                        <span className="cd-date">Jan 18</span>
                                      </div>
                                    </div>

                                    <div className="ws-theme-timeline-block">
                                      <div className="ws-theme-timeline-img">
                                        3
                                      </div>

                                      <div className="ws-theme-timeline-content">
                                        <h4>
                                          Trek Ghadruk Village to Sinuwa(1900m)
                                        </h4>
                                        <p>
                                          After morning breakfast in Ghandurk
                                          Village trail slightly goes uphill to
                                          Ghandurng Hill. 2010m last permanent
                                          arrangement in the valley and the
                                          trail descends down to stone steps to
                                          kimrung khlao than ascends to
                                          Chhumrung village . After a short
                                          stop, we trek to Chumrung by passing
                                          the Sinuwa dada. Overnight in lodge
                                        </p>
                                        <span className="cd-date">Jan 24</span>
                                      </div>
                                    </div>

                                    <div className="ws-theme-timeline-block">
                                      <div className="ws-theme-timeline-img cd-location">
                                        4
                                      </div>

                                      <div className="ws-theme-timeline-content">
                                        <h4>Trek to Deurali dada (3300m)</h4>
                                        <p>
                                          Leaving Sinuwa, The path from Sinuwa
                                          will be rather smooth. The track
                                          passes all through thick rhododendron
                                          unglues up to Khuldighar.
                                          Subsequently, we walk down a lengthy
                                          and vertical stone steps into bamboo
                                          and rhododendron jungles through which
                                          we clim up to Deurali.
                                        </p>
                                        <span className="cd-date">Feb 14</span>
                                      </div>
                                    </div>
                                    <div className="ws-theme-timeline-block">
                                      <div className="ws-theme-timeline-img cd-movie">
                                        5
                                      </div>

                                      <div className="ws-theme-timeline-content">
                                        <h4>
                                          Trek from Deruli to /Annapurna base
                                          camp (4130m){" "}
                                        </h4>
                                        <p>
                                          The trail leads you uphill to
                                          Annapurna base camp at 4130m and it
                                          will take 3/4 hours and better to do
                                          early in the day before clouds roll
                                          in. if there is snow trail is
                                          difficult to follow. There are amazing
                                          views of the south facade of
                                          Annapurna. Annapurna Base Camp grips a
                                          stunning view of peaks setting 360
                                          degrees. We will get to view Annapurna
                                          I, Machhapuchhre, Annapurna south,
                                          Hiunchuli and a number of more peaks.
                                          Overnight we will stay at Annapurna
                                          Base Camp.
                                        </p>
                                        <span className="cd-date">Feb 26</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  role="tabpanel"
                                  className="tab-pane"
                                  id="ws-theme-tab-reviews"
                                >
                                  <div className="content reviews">
                                    <div
                                      id="comments"
                                      className="comments-area"
                                    >
                                      <h2 className="comments-title">
                                        5 Reviews
                                      </h2>
                                      <div className="review-overall">
                                        <h5>Excellent</h5>
                                        <p className="review-overall-point">
                                          <span>4.6</span> / 5.0
                                        </p>
                                        <p className="review-overall-recommend">
                                          90% recommend this package
                                        </p>
                                      </div>
                                      <ol className="comment-list">
                                        <li
                                          className="comment byuser comment-author-tzwordpress bypostauthor even thread-even depth-1"
                                          id="li-comment-135"
                                        >
                                          <article
                                            id="comment-135"
                                            className="comments"
                                          >
                                            <div className="comment-meta comment-author vcard">
                                              <img
                                                src="/assets/img/desktop-1756727_640-150x150.jpg"
                                                alt="avatar"
                                              />
                                            </div>
                                            <div className="comment-content">
                                              <h5 className="fn">
                                                <a
                                                  href="https://www.templaza.com/"
                                                  rel="external nofollow"
                                                  className="url"
                                                >
                                                  John Doe
                                                </a>
                                              </h5>
                                              <div className="content">
                                                <span className="time">
                                                  4:22 am
                                                </span>
                                                <span className="sp"> -</span>
                                                <span className="date">
                                                  Jul 4, 2017
                                                </span>
                                                <span className="sp"> /</span>
                                                <a
                                                  rel="nofollow"
                                                  className="comment-reply-link"
                                                  href=""
                                                  aria-label="Reply to John Doe"
                                                >
                                                  Reply
                                                </a>
                                              </div>
                                              <p>
                                                Neque porro quisquam est, qui
                                                dolorem ipsum quia dolor sit
                                                amet, consectetur, adipisci
                                                velit, sed quia non numquam eius
                                                modi tempora incidunt ut labore
                                                et dolore magnam aliquam quaerat
                                                voluptatem.
                                              </p>
                                              <div className="ws-theme-average-rating rating">
                                                <div className="rating">
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star-half-o" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="clearfix" />
                                          </article>
                                        </li>
                                        <li
                                          className="comment byuser comment-author-tzwordpress bypostauthor odd alt thread-odd thread-alt depth-1"
                                          id="li-comment-137"
                                        >
                                          <article
                                            id="comment-137"
                                            className="comments"
                                          >
                                            <div className="comment-meta comment-author vcard">
                                              <img
                                                src="/assets/img/desktop-1756727_640-150x150.jpg"
                                                alt="avatar"
                                              />
                                            </div>
                                            <div className="comment-content">
                                              <h5 className="fn">
                                                <a
                                                  href="https://www.templaza.com/"
                                                  rel="external nofollow"
                                                  className="url"
                                                >
                                                  John Doe
                                                </a>
                                              </h5>
                                              <div className="content">
                                                <span className="time">
                                                  4:24 am
                                                </span>
                                                <span className="sp"> -</span>
                                                <span className="date">
                                                  Jul 4, 2017
                                                </span>
                                                <span className="sp"> /</span>
                                                <a
                                                  rel="nofollow"
                                                  className="comment-reply-link"
                                                  href=""
                                                  aria-label="Reply to John Doe"
                                                >
                                                  Reply
                                                </a>
                                              </div>
                                              <p>
                                                Sed ut perspiciatis unde omnis
                                                iste natus singlePage sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem
                                                aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta
                                                sunt explicabo.
                                              </p>
                                              <div className="ws-theme-average-rating rating">
                                                <div className="rating">
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star-half-o" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="clearfix" />
                                          </article>
                                        </li>
                                        <li
                                          className="comment byuser comment-author-tzwordpress bypostauthor even thread-even depth-1"
                                          id="li-comment-138"
                                        >
                                          <article
                                            id="comment-138"
                                            className="comments"
                                          >
                                            <div className="comment-meta comment-author vcard">
                                              <img
                                                src="/assets/img/desktop-1756727_640-150x150.jpg"
                                                alt="avatar"
                                              />
                                            </div>
                                            <div className="comment-content">
                                              <h5 className="fn">
                                                <a
                                                  href="https://www.templaza.com/"
                                                  rel="external nofollow"
                                                  className="url"
                                                >
                                                  John Doe
                                                </a>
                                              </h5>
                                              <div className="content">
                                                <span className="time">
                                                  4:24 am
                                                </span>
                                                <span className="sp"> -</span>
                                                <span className="date">
                                                  Jul 4, 2017
                                                </span>
                                                <span className="sp"> /</span>
                                                <a
                                                  rel="nofollow"
                                                  className="comment-reply-link"
                                                  href=""
                                                  aria-label="Reply to John Doe"
                                                >
                                                  Reply
                                                </a>
                                              </div>
                                              <p>Good Tour</p>
                                              <div className="ws-theme-average-rating rating">
                                                <div className="rating">
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star-half-o" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="clearfix" />
                                          </article>
                                        </li>
                                        <li
                                          className="comment byuser comment-author-tzwordpress bypostauthor odd alt thread-odd thread-alt depth-1"
                                          id="li-comment-139"
                                        >
                                          <article
                                            id="comment-139"
                                            className="comments"
                                          >
                                            <div className="comment-meta comment-author vcard">
                                              <img
                                                src="assets/img/desktop-1756727_640-150x150.jpg"
                                                alt="avatar"
                                              />
                                            </div>
                                            <div className="comment-content">
                                              <h5 className="fn">
                                                <a
                                                  href="https://www.templaza.com/"
                                                  rel="external nofollow"
                                                  className="url"
                                                >
                                                  John Doe
                                                </a>
                                              </h5>
                                              <div className="content">
                                                <span className="time">
                                                  4:25 am
                                                </span>
                                                <span className="sp"> -</span>
                                                <span className="date">
                                                  Jul 4, 2017
                                                </span>
                                                <span className="sp"> /</span>
                                                <a
                                                  rel="nofollow"
                                                  className="comment-reply-link"
                                                  href=""
                                                  aria-label="Reply to John Doe"
                                                >
                                                  Reply
                                                </a>
                                              </div>
                                              <p>
                                                Nemo enim ipsam voluptatem quia
                                                voluptas sit aspernatur aut odit
                                                aut fugit, sed quia consequuntur
                                                magni dolores eos qui ratione
                                                voluptatem sequi nesciunt. Neque
                                                porro quisquam est, qui dolorem
                                                ipsum quia dolor sit amet,
                                                consectetur, adipisci velit, sed
                                                quia non numquam eius modi
                                                tempora incidunt ut labore et
                                                dolore magnam aliquam quaerat
                                                voluptatem.
                                              </p>
                                              <div className="ws-theme-average-rating rating">
                                                <div className="rating">
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star-half-o" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="clearfix" />
                                          </article>
                                        </li>
                                        <li
                                          className="comment byuser comment-author-tzwordpress bypostauthor even thread-even depth-1"
                                          id="li-comment-140"
                                        >
                                          <article
                                            id="comment-140"
                                            className="comments"
                                          >
                                            <div className="comment-meta comment-author vcard">
                                              <img
                                                src="/assets/img/desktop-1756727_640-150x150.jpg"
                                                alt="avatar"
                                              />
                                            </div>
                                            <div className="comment-content">
                                              <h5 className="fn">
                                                <a
                                                  href="https://www.templaza.com/"
                                                  rel="external nofollow"
                                                  className="url"
                                                >
                                                  John Doe
                                                </a>
                                              </h5>
                                              <div className="content">
                                                <span className="time">
                                                  4:25 am
                                                </span>
                                                <span className="sp"> -</span>
                                                <span className="date">
                                                  Jul 4, 2017
                                                </span>
                                                <span className="sp"> /</span>
                                                <a
                                                  rel="nofollow"
                                                  className="comment-reply-link"
                                                  href=""
                                                  aria-label="Reply to John Doe"
                                                >
                                                  Reply
                                                </a>
                                              </div>
                                              <p>
                                                Pellentesque pulvinar dolor eu
                                                erat aliquet iaculis. Ut lacus
                                                lectus, scelerisque at mi id,
                                                pharetra mollis elit. Fusce diam
                                                mi, laoreet non luctus et,
                                                iaculis a risus. Phasellus
                                                volutpat ipsum id facilisis
                                                sagittis. Integer eget laoreet
                                                nibh. Nullam fringilla sem
                                                rhoncus felis suscipit accumsan.
                                              </p>
                                              <div className="ws-theme-average-rating rating">
                                                <div className="rating">
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star" />
                                                  <i className="fa fa-star-half-o" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="clearfix" />
                                          </article>
                                        </li>
                                      </ol>
                                      <div className="ws-theme-CommentForm">
                                        <div
                                          id="respond"
                                          className="comment-respond"
                                        >
                                          <h3
                                            id="reply-title"
                                            className="comment-reply-title"
                                          >
                                            Write a Review
                                            <small>
                                              <a
                                                rel="nofollow"
                                                id="cancel-comment-reply-link"
                                                href=""
                                              >
                                                Cancel reply
                                              </a>
                                            </small>
                                          </h3>
                                          <form
                                            action=""
                                            method="post"
                                            id="commentform"
                                            className="comment-form"
                                          >
                                            <p className="comment-notes">
                                              <span id="email-notes">
                                                Your email address will not be
                                                published.
                                              </span>
                                              Required fields are marked
                                              <span className="required">
                                                *
                                              </span>
                                            </p>
                                            <p className="comment-form-comment">
                                              <textarea
                                                id="comment"
                                                name="comment"
                                                cols="90"
                                                rows="7"
                                                required="required"
                                                placeholder="Leave your comment..."
                                              />
                                            </p>
                                            <div className="content-form">
                                              <p className="comment-form-author clearfix">
                                                <input
                                                  id="author"
                                                  name="author"
                                                  type="text"
                                                  value=""
                                                  size="30"
                                                  aria-required="true"
                                                  placeholder="Your Name"
                                                />
                                              </p>
                                              <p className="comment-form-email clearfix">
                                                <input
                                                  id="email"
                                                  name="email"
                                                  type="text"
                                                  value=""
                                                  size="30"
                                                  aria-describedby="email-notes"
                                                  aria-required="true"
                                                  placeholder="Your Email"
                                                />
                                              </p>
                                              <p className="comment-form-url clearfix">
                                                <input
                                                  id="url"
                                                  name="url"
                                                  type="text"
                                                  value=""
                                                  size="30"
                                                  aria-required="true"
                                                  placeholder="Website"
                                                />
                                              </p>
                                            </div>
                                            <p
                                              className="ws-theme-field"
                                              className="clearfix"
                                            >
                                              <div id="wp-travel_rate" />
                                              <input
                                                type="hidden"
                                                name="ws-theme-rating"
                                                value="0"
                                              />
                                            </p>
                                            <p className="form-submit">
                                              <input
                                                name="submit"
                                                type="submit"
                                                id="submit"
                                                className="submit"
                                                value="Submit"
                                              />
                                            </p>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  role="tabpanel"
                                  className="tab-pane"
                                  id="trip-ws-theme-tab-faq"
                                >
                                  <div className="panel-group i-accordion">
                                    <div className="panel panel-success">
                                      <div
                                        className="panel-heading"
                                        data-toggle="collapse"
                                        data-parent=".i-accordion"
                                        href="#faq1"
                                      >
                                        <h4 className="panel-title">
                                          Do I need a visa to enter Nepal ?{" "}
                                          <i
                                            className="fa fa-question"
                                            aria-hidden="true"
                                          />
                                        </h4>
                                      </div>
                                      <div
                                        id="faq1"
                                        className="panel-collapse collapse in"
                                      >
                                        <div className="panel-body">
                                          <p>
                                            Sure, You could observe for a visa
                                            earlier than you travel or upon
                                            arrival on the airport. please
                                            notice, Nepal visa are valid from
                                            the date you arrive within the
                                            country. For extra information about
                                            visa, please go to visit
                                            https://skynet.wensolutions.com/ws-theme-addon
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel panel-success">
                                      <div
                                        className="panel-heading"
                                        data-toggle="collapse"
                                        data-parent=".i-accordion"
                                        href="#faq2"
                                      >
                                        <h4 className="panel-title">
                                          Can I get a VISA on arrival at
                                          Kathmandu airport ?
                                          <i
                                            className="fa fa-question-circle"
                                            aria-hidden="true"
                                          />
                                        </h4>
                                      </div>
                                      <div
                                        id="faq2"
                                        className="panel-collapse collapse"
                                      >
                                        <div className="panel-body">
                                          <p>
                                            Yes, you can get your entrance visa
                                            at Tribhuvan International Airport
                                            (TIA), Kathmandu upon your landing.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel panel-success">
                                      <div
                                        className="panel-heading"
                                        data-toggle="collapse"
                                        data-parent=".i-accordion"
                                        href="#faq3"
                                      >
                                        <h4 className="panel-title">
                                          How can I get there?
                                          <i
                                            className="fa fa-question-circle"
                                            aria-hidden="true"
                                          />
                                        </h4>
                                      </div>
                                      <div
                                        id="faq3"
                                        className="panel-collapse collapse"
                                      >
                                        <div className="panel-body">
                                          <p>
                                            Nepal has precise flight connections
                                            from united kingdom. There are
                                            several direct flights to Nepal from
                                            the UK. Although, there aren’t any
                                            direct flights from the london to
                                            kathmandu, nepal, you could choose
                                            to fly both through new delhi,
                                            dubai, muscat, bahrain or bangkok.
                                            Flight times range among 12-14 hours
                                            depending on which airlines you are
                                            flying with.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel panel-success">
                                      <div
                                        className="panel-heading"
                                        data-toggle="collapse"
                                        data-parent=".i-accordion"
                                        href="#faq4"
                                      >
                                        <h4 className="panel-title">
                                          When is the best time to go to Nepal?
                                          <i
                                            className="fa fa-question-circle"
                                            aria-hidden="true"
                                          />
                                        </h4>
                                      </div>
                                      <div
                                        id="faq4"
                                        className="panel-collapse collapse"
                                      >
                                        <div className="panel-body">
                                          <p>
                                            Usually, nepal’s weather is split
                                            into 3 seasons – summer season
                                            winter and the monsoon. Normally,
                                            winter season (october to february)
                                            is the desired and considered as
                                            quality time for lots travelers to
                                            go to travel. The Himalayas and
                                            Mountain stations are explored
                                            throughout the summer time (March to
                                            May additionally). The monsoon
                                            season (june to September) brings
                                            the heavy rain.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel panel-success">
                                      <div
                                        className="panel-heading"
                                        data-toggle="collapse"
                                        data-parent=".i-accordion"
                                        href="#faq5"
                                      >
                                        <h4 className="panel-title">
                                          Do I want a travel insurance?
                                          <i
                                            className="fa fa-question-circle"
                                            aria-hidden="true"
                                          />
                                        </h4>
                                      </div>
                                      <div
                                        id="faq5"
                                        className="panel-collapse collapse"
                                      >
                                        <div className="panel-body">
                                          <p>
                                            Oh yes, a few kind of journey
                                            coverage is relatively endorsed.
                                            maximum tour insurance covers
                                            emergency flights, clinical prices,
                                            and theft or lack of possessions. If
                                            you plan to move rafting or hiking,
                                            make sure your insurance covers
                                            these “dangerous sports.” keep in
                                            mind to keep your receipts to make
                                            claims. With a view to make claims
                                            on misplaced or stolen gadgets,
                                            you’ll need a police file issued in
                                            Nepal.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel panel-success">
                                      <div
                                        className="panel-heading"
                                        data-toggle="collapse"
                                        data-parent=".i-accordion"
                                        href="#faq6"
                                      >
                                        <h4 className="panel-title">
                                          What is the local currency and what
                                          currency should I take?
                                          <i
                                            className="fa fa-question-circle"
                                            aria-hidden="true"
                                          />
                                        </h4>
                                      </div>
                                      <div
                                        id="faq6"
                                        className="panel-collapse collapse"
                                      >
                                        <div className="panel-body">
                                          <p>
                                            The Nepalese rupee is the local
                                            money. It’s usually great to change
                                            your money once you arrive in Nepal.
                                            Euros, sterling and US dollars are
                                            all simple way to exchange for
                                            rupees at local banks and money
                                            exchange. The most of credit cards
                                            and debit cards are extensively
                                            commonplace at the ATMs shops,
                                            Hotels and eating places in tourist
                                            area.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel panel-success">
                                      <div
                                        className="panel-heading"
                                        data-toggle="collapse"
                                        data-parent=".i-accordion"
                                        href="#faq7"
                                      >
                                        <h4 className="panel-title">
                                          What is there to see and do?
                                          <i
                                            className="fa fa-question-circle"
                                            aria-hidden="true"
                                          />
                                        </h4>
                                      </div>
                                      <div
                                        id="faq7"
                                        className="panel-collapse collapse"
                                      >
                                        <div className="panel-body">
                                          <p>
                                            The Himalayan country, Nepal has
                                            lots to special offer to travellers.
                                            Nepal’s attractions are numerous and
                                            diverse, from its popular monuments
                                            and ancient sites just like the
                                            Kathmandu durbar square,
                                            Pashupatinath temple and the
                                            wildlife reserves like chitwan
                                            national park in which you can spot
                                            and meet many natural wildlife. You
                                            can looking to trekking within the
                                            Himalayas, exploring culture,
                                            historical past attractions or relax
                                            &npsb; unwind within the peace
                                            &nbsp; tranquility Nepal has them
                                            all.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="wp-travel-related-posts wp-travel-container-wrap clearfix">
                        <h4 className="mb-15 text-dark">Related Trips</h4>
                        <div className="wp-travel-itinerary-items">
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
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                      />
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
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
                                <h3 className="card-title">
                                  <a href="#">Switzerland</a>
                                </h3>

                                <p className="avilable-date">
                                  Availability: Jan 18’ - Dec 16’
                                </p>
                                <p className="card-text">
                                  Etiam porta sem malesuada magna mollis
                                  euismod. Maecenas sed diam[...]
                                </p>
                              </div>
                              <aside className="right-wrapper">
                                <div className="prices clearfix">
                                  <p className="from">
                                    from{" "}
                                    <del className="hidden-above-md">
                                      $4,300
                                    </del>
                                  </p>
                                  <p className="all-prices">
                                    <del className="visible-under-md">
                                      $4,300
                                    </del>
                                    <b>$3500</b>
                                  </p>
                                </div>
                                <div className="ws-rating-more">
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
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                      />
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
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
                                <h3 className="card-title">
                                  <a href="#">Switzerland</a>
                                </h3>

                                <p className="avilable-date">
                                  Availability: Jan 18’ - Dec 16’
                                </p>
                                <p className="card-text">
                                  Etiam porta sem malesuada magna mollis
                                  euismod. Maecenas sed diam[...]
                                </p>
                              </div>
                              <aside className="right-wrapper">
                                <div className="prices clearfix">
                                  <p className="from">
                                    from{" "}
                                    <del className="hidden-above-md">
                                      $4,300
                                    </del>
                                  </p>
                                  <p className="all-prices">
                                    <del className="visible-under-md">
                                      $4,300
                                    </del>
                                    <b>$3500</b>
                                  </p>
                                </div>
                                <div className="ws-rating-more">
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
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
                                      />
                                      <source
                                        media="(min-width: 992px)"
                                        srcSet="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/slide-767.jpg"
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
                                <h3 className="card-title">
                                  <a href="#">
                                    Switzerland - 7 days in zurich, zermatt
                                  </a>
                                </h3>

                                <p className="avilable-date">
                                  Availability: Jan 18’ - Dec 16’
                                </p>
                                <p className="card-text">
                                  Etiam porta sem malesuada magna mollis
                                  euismod. Maecenas sed diam[...]
                                </p>
                              </div>
                              <aside className="right-wrapper">
                                <div className="prices clearfix">
                                  <p className="from">
                                    from{" "}
                                    <del className="hidden-above-md">
                                      $4,300
                                    </del>
                                  </p>
                                  <p className="all-prices">
                                    <del className="visible-under-md">
                                      $4,300
                                    </del>
                                    <b>$3500</b>
                                  </p>
                                </div>
                                <div className="ws-rating-more">
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
                        </div>
                      </div>
                    </div>
                    <nav role="navigation" className="pagination">
                      <ul className="ws-theme-pagination animated-buttons custom-icons">
                        <li className="button">
                          <a href="#0">
                            <i>Prev</i>
                          </a>
                        </li>
                        <li className="button">
                          <a href="#0">
                            <i>Next</i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </main>
              </div>
              <aside
                id="secondary"
                className="widget-area"
                role="complementary"
              >
                <div className="sticky-sidebar">
                  <div className="ws-advance-booking-form ">
                    <div className="ws-theme-booking-head">
                      <div className="ws-theme-tour-contact-number">
                        <i className="fa fa-headphones" aria-hidden="true" />
                        Call Center: <span>+1-888-22-6666</span>
                      </div>
                      <div className="ws-theme-tour-price ">
                        <span className="ws-theme-tour-total-price">
                          Total:
                          <span className="total-price">
                            <span className="total_all_price">$1,050.00</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <nav className="for-equal-height">
                      <ul
                        id="booking-tab"
                        className="nav nav-tabs ws-theme-tabs-navigation"
                        role="tablist"
                      >
                        <li role="presentation" className="active">
                          <a
                            href="#ws-theme-tab-booking-form"
                            aria-controls="ws-theme-tab-booking-form"
                            role="tab"
                            data-toggle="tab"
                          >
                            Booking Form
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#ws-theme-tab-enquiry-form"
                            aria-controls="ws-theme-tab-enquiry-form"
                            role="tab"
                            data-toggle="tab"
                          >
                            Enquiry Form
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="tab-content ">
                      <div
                        role="tabpanel"
                        className="tab-pane active"
                        id="ws-theme-tab-booking-form"
                      >
                        <div className="form-content-wrapper">
                          <div className="form-top-wrapper">
                            <div className="form-content clearfix">
                              <label htmlFor="ws-full-name">Full Name</label>
                              <input
                                type="text"
                                id="ws-full-name"
                                name="name"
                              />
                            </div>
                            <div className="form-content clearfix">
                              <label htmlFor="ws-email">Your Email</label>
                              <input type="email" id="ws-email" name="email" />
                            </div>
                            <div className="form-content clearfix">
                              <label htmlFor="ws-number">Contact Number</label>
                              <input type="tel" id="ws-number" name="number" />
                            </div>

                            <div className="form-content clearfix">
                              <label htmlFor="ws-date">Departure Date</label>
                              <input
                                type="text"
                                id="ws-date"
                                name="booking date"
                              />
                            </div>
                            <div className="form-content clearfix">
                              <div className="group-number-count">
                                <label>Adults</label>
                                <div className="ws-theme-group-booking">
                                  <div className="input-number-ticket">
                                    <input
                                      className="input-number"
                                      name="number_adults"
                                      type="number"
                                      value="3"
                                      data-min="1"
                                      data-max="5"
                                      min="1"
                                      max="50"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="group-number-count">
                                <div className="ws-theme-book_price">
                                  <span className="adult_price">
                                    ×&nbsp;$200
                                  </span>
                                  <span className="total_price_adults">
                                    =&nbsp;$600.00
                                  </span>
                                </div>
                              </div>

                              <div className="group-number-count">
                                <label>Children</label>
                                <div className="ws-theme-group-booking">
                                  <div className="input-number-ticket">
                                    <input
                                      className="input-number"
                                      name="number_adults"
                                      type="number"
                                      value="3"
                                      data-min="1"
                                      data-max="5"
                                      min="1"
                                      max="50"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="group-number-count">
                                <div className="ws-theme-book_price">
                                  <span className="adult_price">
                                    ×&nbsp;$150
                                  </span>
                                  <span className="total_price_adults">
                                    =&nbsp;$450.00
                                  </span>
                                </div>
                              </div>
                            </div>
                            <input
                              type="submit"
                              value="Book Now"
                              className="button"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane"
                        id="ws-theme-tab-enquiry-form"
                      >
                        <div className="form-content-wrapper">
                          <div className="form-top-wrapper">
                            <div className="form-content clearfix">
                              <label htmlFor="ws-full-name">Full Name</label>
                              <input
                                type="text"
                                id="ws-full-name"
                                name="name"
                              />
                            </div>
                            <div className="form-content clearfix">
                              <label htmlFor="ws-email">Your Email</label>
                              <input type="email" id="ws-email" name="email" />
                            </div>
                            <div className="form-content clearfix">
                              <label htmlFor="ws-email">Your Message</label>
                              <textarea
                                type="text"
                                id="ws-message"
                                name="message"
                                cols="10"
                                rows="8"
                              />
                            </div>
                            <input
                              type="submit"
                              value="Send Enquiry"
                              className="button"
                            />
                          </div>
                        </div>
                      </div>
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

export default singlePage;
