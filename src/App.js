import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./Pages/About";
import Landing from "./Pages/Landing";
import Services from "./Pages/Services";
import Soundmixers from "./Pages/Soundmixers";
import Travel from "./Pages/Travel";
import Gear from "./Pages/Gear";
import Experience from "./Pages/Experience";
import Adamaslan from "./Pages/Adamaslan";
import Michaelmoote from "./Pages/Michaelmoote";
import Joepfeil from "./Pages/Joepfeil";
import Allistairjohnson from "./Pages/Allistairjohnson";
import Brettainslie from "./Pages/Brettainslie";
import Billpierce from "./Pages/Billpierce";
import Drewjoy from "./Pages/Drewjoy";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/soundmixers">
            <Soundmixers />
          </Route>
          <Route path="/Travel">
            <Travel />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
          <Route path="/Gear">
            <Gear />
          </Route>
          <Route path="/adamaslan">
            <Adamaslan />
          </Route>
          <Route path="/Joepfeil">
            <Joepfeil />
          </Route>
          <Route path="/Allistairjohnson">
            <Allistairjohnson />
          </Route>
          <Route path="/Michaelmoote">
            <Michaelmoote />
          </Route>
          <Route path="/Brettainslie">
            <Brettainslie />
          </Route>
          <Route path="/Billpierce">
            <Billpierce />
          </Route>
          <Route path="/Drewjoy">
            <Drewjoy />
          </Route>

          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
