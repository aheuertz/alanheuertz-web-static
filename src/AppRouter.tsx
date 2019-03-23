import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";
import { NavigationBar } from "./components/NavigationBar";
import { BoardGamesPage } from "./pages/BoardGamesPage";

const AppRouter = () => (
  <Router>
    <div>
      <NavigationBar title="Alan Heuertz" />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects/" component={ProjectsPage} />
        <Route path="/board-games/" component={BoardGamesPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
