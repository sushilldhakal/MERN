import React, { Component } from "react";
import Slider from "react-slick";
import bannerOneImage from "../../assets/img/beach1.jpg";
import bannerTwoImage from "../../assets/img/venice.jpg";
import bannerThreeImage from "../../assets/img/aside-03.jpg";
import bannerFourImage from "../../assets/img/aside-02.jpeg";
import bannerFiveImage from "../../assets/img/test.jpg";
import bannerSixImage from "../../assets/img/slider.jpeg";

import whychooseUs from "../../assets/img/travel-moment.jpg";

class Review extends Component {
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

    var whyUs = {
      backgroundImage: `url(${whychooseUs})`
    };

    const review = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 6000,
      variableWidth: true
    };

    return (
      <div className="ws-travel-testimonial dotted-overlay" style={whyUs}>
        <div className="ws-section-title text-center wow fadeInUp">
          <h2 className="text-white text-uppercase font26 mt-0">
            Latest CUSTOMERS Review
          </h2>
          <p className="text-white font18 font-weight-500">
            What our customers saying about us
          </p>
        </div>
        <Slider
          className="ws-travel-testimonial-slider wow fadeInUp"
          {...review}
        >
          <div className="ws-travel-moment-wrap bg-white p-20 m-20">
            <div className="ws-travel-moment-wrap-child">
              <div className="ws-icon-travel-moment">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/test-img.png" />
                <div className="visible-under-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="ws-travel-moment-wrap-inside">
                <div className="hidden-above-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
                <div className="ws-trips-review border-bottom">
                  <p>
                    <i>
                      Trips Reviewed : <a href="#">Trekk to Tilicho</a>
                    </i>
                  </p>
                </div>
                <div className="ws-content-travel-moment">
                  <p>
                    “ Excellent – a great package the company offered, left me
                    wanting to see more. Our tour guide, was the ultimate
                    professional, able to meet the many different needs of all
                    the travelers. The food and hotels were outstanding value.
                    Looking ”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ws-travel-moment-wrap bg-white p-20 m-20">
            <div className="ws-travel-moment-wrap-child">
              <div className="ws-icon-travel-moment">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/test-img.png" />
                <div className="visible-under-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="ws-travel-moment-wrap-inside">
                <div className="hidden-above-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
                <div className="ws-trips-review border-bottom">
                  <p>
                    <i>
                      Trips Reviewed : <a href="#">Trekk to Tilicho</a>
                    </i>
                  </p>
                </div>
                <div className="ws-content-travel-moment">
                  <p>
                    “ Excellent – a great package the company offered, left me
                    wanting to see more. Our tour guide, was the ultimate
                    professional, able to meet the many different needs of all
                    the travelers. The food and hotels were outstanding value.
                    Looking ”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ws-travel-moment-wrap bg-white p-20 m-20">
            <div className="ws-travel-moment-wrap-child">
              <div className="ws-icon-travel-moment">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/test-img.png" />
                <div className="visible-under-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="ws-travel-moment-wrap-inside">
                <div className="hidden-above-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
                <div className="ws-trips-review border-bottom">
                  <p>
                    <i>
                      Trips Reviewed : <a href="#">Trekk to Tilicho</a>
                    </i>
                  </p>
                </div>
                <div className="ws-content-travel-moment">
                  <p>
                    “ Excellent – a great package the company offered, left me
                    wanting to see more. Our tour guide, was the ultimate
                    professional, able to meet the many different needs of all
                    the travelers. The food and hotels were outstanding value.
                    Looking ”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ws-travel-moment-wrap bg-white p-20 m-20">
            <div className="ws-travel-moment-wrap-child">
              <div className="ws-icon-travel-moment">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/test-img.png" />
                <div className="visible-under-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="ws-travel-moment-wrap-inside">
                <div className="hidden-above-xs">
                  <div className="ws-title-travel-moment">
                    <h3 className="mv-5 font18 font-weight-600 text-dark">
                      Grish R.
                    </h3>
                  </div>
                  <p className="time">
                    <i>15th September</i>
                  </p>
                  <div className="ws-travel-momnet-info">
                    <span className="trip-ratting rating">
                      Trip Rating: 5<i className="fa fa-star" />
                    </span>
                  </div>
                </div>
                <div className="ws-trips-review border-bottom">
                  <p>
                    <i>
                      Trips Reviewed : <a href="#">Trekk to Tilicho</a>
                    </i>
                  </p>
                </div>
                <div className="ws-content-travel-moment">
                  <p>
                    “ Excellent – a great package the company offered, left me
                    wanting to see more. Our tour guide, was the ultimate
                    professional, able to meet the many different needs of all
                    the travelers. The food and hotels were outstanding value.
                    Looking ”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Review;
