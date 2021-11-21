import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="science"
                page={3}
                pagesize={9}
                country={"in"}
                category="science"
              />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="business"
                page={1}
                pagesize={84}
                country={"in"}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"
                page={2}
                pagesize={9}
                country={"in"}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="general"
                page={2}
                pagesize={9}
                country={"in"}
                category="general"
              />
            </Route>
            <Route path="/health">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="health"
                page={2}
                pagesize={9}
                country={"in"}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="science"
                page={2}
                pagesize={9}
                country={"in"}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"
                page={2}
                pagesize={9}
                country={"in"}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology"
                page={2}
                pagesize={9}
                country={"in"}
                category={"technology"}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
