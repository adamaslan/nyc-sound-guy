import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./Nav"
import About from "./Pages/About"
import Landing from "./Pages/Landing"
import Services from "./Pages/Services"

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
          <Route path="/">
            <Landing/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
