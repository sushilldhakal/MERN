import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const BASE_URL = "http://localhost:8083";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              />
            );
          })}
          {/* <Route path="/edit-post/:id" component={UpdatePostInfo} />
          <Route path="/show-post/:id" component={ShowPostDetails} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
