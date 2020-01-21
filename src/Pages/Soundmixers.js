import React from "react";
import { Link } from "react-router-dom";

import AreaCode from "../Assets/843.jpg";

export default function Soundmixers() {
  return (
    <div>
      <p>
        Hit us up to work with the following top notch soundmixers:
        <br />
        <br />
        <Link to="/adamaslan">Adam Aslan </Link>
        <br />
        <br />
        <Link to="/billpierce">Bill Pierce </Link>
        <br />
        <br />
        <Link to="/michaelmoote">Michael Moote </Link>
        <br />
        <br />
        <Link to="/allistairjohnson">Allistair Johnson </Link>
        <br />
        <br />
        <Link to="/brettainslie">Brett Ainslie </Link>
        <br />
        <br />
        <Link to="/joepfeil">Joe Pfeil </Link>
        <br />
        <br />
        <Link to="drewjoy">Drew Joy </Link>
        <br />
        <br />
        Contact us at nycsoundpeople@gmail.com or at{" "}
        <img src={AreaCode} alt="area code" />
        -284-3462
      </p>
    </div>
  );
}
