import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/font-awesome.css";
import "./assets/front-style.css";
import "./assets/scss/style.css";

//import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleTour from "./components/Single/singlePage";
import Footer from "./components/Footer/Footer";
//import Listing from "./components/ListingPage/Listing";
//import singlePage from "./components/Single/singlePage";
import Error from "./components/Error/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <div id="page" className="site animate-bottom">
              {/* <Loader /> */}
              <Header />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/SinglePage" component={SingleTour} />
                {/* <Route path="/Listing" component={Listing} />
                <Route component={Error} /> */}
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
