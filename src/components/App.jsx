import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import TeamCarousel from "./TeamCarousle";
import Business from "./Business";
import Investors from "./Investors";
import Indivisual from "./Indivisual";
import Intern from "./Intern";
import Footer from "./Footer";
import Application from "./Application"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Application />
          {/* <Navbar /> */}
          {/* <Carousel /> */}
          {/* <About /> */}
          {/* <TeamCarousel /> */}
          {/* <Business /> */}
          {/* <Investors /> */}
          {/* <Indivisual /> */}
          {/* <Intern /> */}
          {/* <Footer /> */}

        </Route>

      </Switch>
    </Router>
  );
}
