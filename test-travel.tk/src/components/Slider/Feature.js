import React, { Component } from "react";
import Slider from "react-slick";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          className="slider slider-single"
        >
          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>
          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>

          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>

          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>

          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>

          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>

          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>

          <div className="item-video">
            <div className="slick-video-wrapper">
              <a
                className="slick-video"
                href="https://www.youtube.com/watch?v=LF0wJgg6WCk"
              />
              <div className="slick-video-frame" />
              <div className="slick-video-play-icon" />
              <div className="slick-video-tn">
                <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/single-2.jpg" />
              </div>
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider slider-nav"
        >
          <div className="projectitem video-item playing">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
          <div className="projectitem video-item">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
          <div className="projectitem video-item">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
          <div className="projectitem video-item">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
          <div className="projectitem video-item">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
          <div className="projectitem video-item">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
          <div className="projectitem video-item">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
          <div className="projectitem video-item">
            <article className="module-post">
              <figure>
                <a href="#">
                  <img src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/blog-listing.jpg" />
                </a>
              </figure>
              <header className="entry-header">
                <h3 className="entry-title">
                  <a href="#">Travel Diary: Top 25 Places to Visit in Nepal.</a>
                </h3>
              </header>
            </article>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Feature;
