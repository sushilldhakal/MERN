import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onChangeSearch() {}

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <div
        id="header"
        className={classnames(
          "navbar header-section type-header-1 header-skin-dark header-no-transparent",
          { sticky: !this.state.visible }
        )}
      >
        <div className="header-wrapper-for-sticky">
          <div className="ws-theme-top-header bg-black">
            <div className="container">
              <div className="visible-under-xs">
                <span className="top-header-mobile-title">
                  Welcome To Travel Log
                </span>
                <span id="top-mobile-menu" className="travel-mobile-menu">
                  <i className="fa fa-bars"></i>
                </span>
              </div>
              <div
                className="navbar-collapse ws-theme-topnavbar-collapse"
                aria-expanded="false"
              >
                <ul className="nav navbar-nav ws-theme-top-left">
                  <li>
                    <div
                      id="header-contact-info"
                      className="top-contact-info font12"
                    >
                      <ul className="header-contact-details">
                        <li>
                          <span>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            +12 123 456 789
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            Mon – Sat 8.00 – 18.00. Sunday CLOSED
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right ws-theme-top-right">
                  <li className="extra-nav header-top-cart">
                    <a className="cart-empty cart-icon" href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="extra-nav header-top-search">
                    <a href="#search-form" className="hidden-above-xs">
                      <i className="fa fa-search"></i>
                    </a>
                    <form
                      method="get"
                      action=""
                      className="search-form visible-under-xs"
                    >
                      <div className="input-group">
                        <input
                          type="text"
                          value="Search"
                          name="s"
                          className="form-control"
                          placeholder="Search"
                          onChange={this.onChangeSearch}
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-search" type="submit">
                            Go
                          </button>
                        </span>
                      </div>
                    </form>
                  </li>
                  <li>
                    <div id="header-sidebar-social" className="sidebar-social">
                      <ul className="ws-theme-social-icons soc-icon-rounded ">
                        <li className="facebook">
                          <a target="_blank" href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a target="_blank" href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li className="linkedin">
                          <a target="_blank" href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li className="pinterest">
                          <a target="_blank" href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li className="google-plus">
                          <a target="_blank" href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li className="youtube">
                          <a target="_blank" href="#">
                            <i className="fa fa-youtube"></i>
                          </a>
                        </li>
                        <li className="rss">
                          <a target="_blank" href="#">
                            <i className="fa fa-rss"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <header id="masthead" className="site-header " role="banner">
            <div className="ws-theme-addon-main-header">
              <div className="container">
                <div className="header-main-menu">
                  <div className="site-branding">
                    <div id="site-identity">
                      <div className="site-branding-text">
                        <h1 className="site-title">
                          <Link to="/">Travel Easy</Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <nav id="main-nav">
                    <input id="main-menu-state" type="checkbox" />
                    <label className="main-menu-btn" htmlFor="main-menu-state">
                      <span className="main-menu-btn-icon"></span> Toggle main
                      menu visibility
                    </label>

                    <ul id="main-menu" className="sm sm-clean">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/listing">Tour Listing</Link>
                      </li>
                      <li>
                        <Link to="/singlePage">Single Tour</Link>
                      </li>

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-633">
                        <a href="/cart">Cart</a>
                      </li>

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-633">
                        <a href="/Checkout">Checkout</a>
                      </li>

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-633">
                        <a href="/blog">Blog</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-has-children menu-item-object-page menu-item-634 ws-theme-mega-menu mega-menu-col-1">
                        <a href="#">About LordBuddha</a>
                        <ul className="mega-menu">
                          <li>
                            <div className="mega-menu-wrap">
                              <p>
                                This is a mega drop down test. Just set the
                                "mega-menu" class to the parent UL element to
                                inform the SmartMenus script. It can contain{" "}
                                <strong>any HTML</strong>.
                              </p>
                              <p>
                                This is a mega drop down test. Just set the
                                "mega-menu" class to the parent UL element to
                                inform the SmartMenus script. It can contain{" "}
                                <strong>any HTML</strong>.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="extra-nav header-top-cart"
                        id="header-cart"
                      >
                        <a className="cart-empty cart-icon" href="#">
                          <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                          ></i>
                          <span className="badge rounded-circle bg-primary text-white font10">
                            2
                          </span>
                        </a>
                        <div className="woo-cart">
                          <div className="shopping-cart">
                            <div className="shopping-cart-header">
                              <i className="fa fa-shopping-cart cart-icon"></i>
                              <span className="badge rounded-circle bg-primary text-white font10">
                                2
                              </span>
                              <div className="shopping-cart-total">
                                <span className="lighter-text">Total:</span>
                                <span className="main-color-text">
                                  $2,229.97
                                </span>
                              </div>
                            </div>
                            <ul className="shopping-cart-items">
                              <li className="clearfix">
                                <a href="#0" className="item-name font14">
                                  ABC Trekking
                                </a>
                                <span className="item-price font12">$100</span>
                                <span className="item-quantity font12">
                                  Person: 01
                                </span>
                                <span className="remove btn btn-outline-primary">
                                  x
                                </span>
                              </li>

                              <li className="clearfix">
                                <a href="#0" className="item-name font14">
                                  Thailand Tour
                                </a>
                                <span className="item-price font12">$200</span>
                                <span className="item-quantity font12">
                                  Person: 01
                                </span>
                                <span className="remove btn btn-outline-primary">
                                  x
                                </span>
                              </li>
                            </ul>
                            <a
                              href="#"
                              className="btn btn-outline-primary waves-effect font14 line14"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="extra-nav header-top-search ">
                        <a
                          href="#search-form"
                          className="dispaly-search-form hidden-above-xs"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                        <form
                          method="get"
                          action=""
                          className="search-form visible-under-xs"
                        >
                          <div className="input-group">
                            <input
                              type="text"
                              value="search"
                              name="s"
                              className="form-control"
                              placeholder="Search"
                              onChange={this.onChangeSearch}
                            />
                            <span className="input-group-btn">
                              <button className="btn btn-search" type="submit">
                                Go
                              </button>
                            </span>
                          </div>
                        </form>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <div id="search-form" className="hidden-search-form">
            <div className="container">
              <form>
                <input type="search" placeholder="Search..." />
                <button className="search-header-input">
                  <i className="fa fa-search"></i>
                </button>
                <div className="ws-theme-select">
                  <span>in</span>
                  <div className="form-control wp-toolbar-filter-field pl-20">
                    <select
                      name="type"
                      className="selectpicker"
                      title="Select Categories"
                      data-size="10"
                    >
                      <option value="all-categories">all Categories</option>
                      <option value="category1">Trekk</option>
                      <option value="category2">Tour</option>
                      <option value="category3">Short Vacation</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="search-live-result padding-15 bg-light">
                <ul className="p-15 margin-0 no-list-style">
                  <li>
                    <a className="image-wrapper" href="#0">
                      <img
                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/placeholder.png"
                        alt="News image"
                      />
                    </a>
                    <h4 className="mt-0 mb-10 font16">
                      <a className="cd-nowrap" href="#0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </a>
                    </h4>
                    <time dateTime="2016-01-12">Feb 03, 2016</time>
                  </li>
                  <li>
                    <a className="image-wrapper" href="#0">
                      <img
                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/placeholder.png"
                        alt="News image"
                      />
                    </a>
                    <h4 className="mt-0 mb-10 font16">
                      <a className="cd-nowrap" href="#0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </a>
                    </h4>
                    <time dateTime="2016-01-12">Feb 03, 2016</time>
                  </li>
                  <li>
                    <a className="image-wrapper" href="#0">
                      <img
                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/placeholder.png"
                        alt="News image"
                      />
                    </a>
                    <h4 className="mt-0 mb-10 font16">
                      <a className="cd-nowrap" href="#0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </a>
                    </h4>
                    <time dateTime="2016-01-12">Feb 03, 2016</time>
                  </li>
                  <li>
                    <a className="image-wrapper" href="#0">
                      <img
                        src="https://raw.githubusercontent.com/sushilldhakal/lordbuddha/master/assets/img/placeholder.png"
                        alt="News image"
                      />
                    </a>
                    <h4 className="mt-0 mb-10 font16">
                      <a className="cd-nowrap" href="#0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </a>
                    </h4>
                    <time dateTime="2016-01-12">Feb 03, 2016</time>
                  </li>
                </ul>
              </div>
              <a href="#0" className="close-action"></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
