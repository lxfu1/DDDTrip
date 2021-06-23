import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "../pages";
import { MultiPoint } from "../pages/chapter1/multi-point";
import { Triangle } from "../pages/chapter1/triangle";

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Page />
      </Route>
      <Route exact path="/page">
        <Page />
      </Route>
      <Route path="/multi-point">
        <MultiPoint />
      </Route>
      <Route path="/triangle">
        <Triangle />
      </Route>
    </Switch>
  </Router>
);

export default routes;
