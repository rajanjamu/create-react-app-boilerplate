import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
