/*eslint-disable*/
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer
        id="footer"
        className="footer-widget-area travel-site-footer clearfix"
        role="contentinfo"
      >
        <div className="travel-site-bottom-footer clearfix">
          <div className="container">
            <div className="row">
              <div className="footer-inner-wrapper clearfix">
                <div className="col-sm-4">
                  <div className="footer-active">
                    <div className="wrap-col">
                      <section id="text-3" className="widget widget_text">
                        <h2 className="widget-title">About Us</h2>
                        <div className="textwidget">
                          <p>
                            Praesent sapien massa, convallis a pellentesque nec,
                            egestas non nisi. Praesent sapien massa, convallis a
                            pellentesque nec, egestas non nisi. Cras ultricies
                            ligula sed magna dictum porta. Proin eget tortor
                            risus.
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="footer-active">
                    <div className="wrap-col">
                      <section
                        id="recent-posts-4"
                        className="widget widget_recent_entries"
                      >
                        {" "}
                        <h2 className="widget-title">Recent Posts</h2>{" "}
                        <ul>
                          <li>
                            <a href="#">Why travel makes you awesome?</a>
                            <span className="post-date">08/14/2018</span>
                          </li>
                          <li>
                            <a href="#">
                              Obsessed with photography? Just travel
                            </a>
                            <span className="post-date">08/14/2018</span>
                          </li>
                          <li>
                            <a href="#">Bliss of Travel</a>
                            <span className="post-date">08/14/2018</span>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="footer-active">
                    <div className="wrap-col">
                      <section id="text-4" className="widget widget_text">
                        <h2 className="widget-title">Contact Info</h2>{" "}
                        <div className="textwidget">
                          <p>
                            <i className="fa fa-map-marker"> </i> 109 East
                            Street Road, Ohio, USA
                          </p>
                          <p>
                            <i className="fa fa-phone"> </i> (123)456-789
                          </p>
                          <p>
                            <i className="fa fa-envelope"> </i>{" "}
                            <a href="mailto:sus.hii.dhakal@gmail.com">
                              {" "}
                              company@domain.com
                            </a>
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="copy-right-footer">
                <div className="container">
                  <div className="row">
                    <div className="travel-copyright">
                      <p>© All Rights Reserved. </p>
                      <p>
                        Proudly powered by{" "}
                        <a href="https://reactjs.com/">React Js</a>
                        <span className="sep"> | </span>
                        Travel Log by{" "}
                        <a href="https://sushill.com.np" rel="designer">
                          Sus Hill
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
