import React, { Component } from "react";

import customHeader from "../../assets/img/beach1.jpg";
class Error extends Component {
  render() {
    var customHeaderImage = {
        backgroundImage: `url(${customHeader})`
      };
    return (
      <div>
        <div className="custom-header" style={customHeaderImage}>
                <div className="container">
                    <div className="row">
                        <header className="entry-header">
                            <h1 className="entry-title">Error</h1>
                        </header>
                    </div>
                </div>
            </div>

            <div id="breadcrumb">
                <div className="container">

                     
                    <nav role="breadcrumb" className="ws-theme-addons-breadcrumb">
                        <ol className="ws-theme-breadcrumb custom-separator custom-icons">
                            <li><a href="#0"> <i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                            <li className="current"><i className="fa fa-th-large" aria-hidden="true"></i> <em> Error</em></li>
                        </ol>
                    </nav>
                   
                </div>
            </div>
      </div>
    );
  }
}

export default Error;