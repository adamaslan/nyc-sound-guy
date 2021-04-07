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
import Flexdiv from "./Flexdiv";

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
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/gear">
            <Gear />
          </Route>
          <Route path="/adamaslan">
            <Adamaslan />
          </Route>
          <Route path="/joepfeil">
            <Joepfeil />
          </Route>
          <Route path="/allistairjohnson">
            <Allistairjohnson />
          </Route>
          <Route path="/michaelmoote">
            <Michaelmoote />
          </Route>
          <Route path="/brettainslie">
            <Brettainslie />
          </Route>
          <Route path="/billpierce">
            <Billpierce />
          </Route>
          <Route path="/drewjoy">
            <Drewjoy />
          </Route>

          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Flexdiv>
          <script
            type="text/javascript"
            src="https://form.jotform.com/jsform/72077025484154"
          ></script>
        </Flexdiv>
      </div>
    </Router>
  );
}
