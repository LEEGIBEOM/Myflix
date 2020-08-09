import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "./Header";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/movie" component={Home} />
      <Route exact path="/tv" component={TV} />
      <Route exact path="/search/:q" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/tv/:id" component={Detail} />
      <Redirect from="*" to="/movie" />
    </Switch>
  </Router>
);
