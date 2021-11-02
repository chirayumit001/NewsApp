import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="science"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="science"
              />
            </Route>
            <Route exact path="/business">
              <News key="business"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News key="general"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="general"
              />
            </Route>
            <Route path="/health">
              <News key="health"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News key="science"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News key="sports"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News key="technology"
                page={2}
                pagesize={9}
                apiKey={"edbffe49f92e4dfaabd4f8f603f3940b"}
                country={"in"}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
