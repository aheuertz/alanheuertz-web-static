import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";
import { NavigationBar } from "./components/NavigationBar";
import { BoardGamesPage } from "./pages/BoardGamesPage";
import { LoginPage } from "./pages/LoginPage";
import { ChartsPage } from "./pages/ChartsPage";
import { FeedsPage } from "./pages/FeedsPage";

const AppRouter = () => (
  <Router>
    <div>
      <NavigationBar title="Alan Heuertz" />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects/" component={ProjectsPage} />
        <Route path="/board-games/" component={BoardGamesPage} />
        <Route path="/charts/" component={ChartsPage} />
        <Route path="/feeds/" component={FeedsPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
