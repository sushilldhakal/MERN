import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
        <div id="onload" className="loader-active">
            <div id="stage" className="loader-spinner">
            </div>
        </div>
    );
  }
}

export default Loader;
