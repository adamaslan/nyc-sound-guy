import React from "react";
import { Link } from "react-router-dom";

import AreaCode from "../Assets/843.jpg";

export default function About() {
  return (
    <div>
      <p>
        NYC SOUND GUY is a service run by Adam Aslan, a location sound mixer
        based in NYC. Working as a sound mixer/recordist in film for the past 9
        years, I am able to spot some of the most talented sound mixers out
        there.
        <br /> I am available for hire when I am not working for my regular
        clients and am in direct contact with all the sound mixers on this page
        as to their availability and rates. Feel free to contact me with any nyc
        sound mixer needs you may have. Even if all the sound mixers I have
        listed are busy there are a ton of other New York City sound mixers I
        know that I can confirm are available at a rate fair to any type of
        production. <br />
        Contact us at nycsoundpeople@gmail.com or at{" "}
        <img src={AreaCode} alt="area code" />
        -284-3462
      </p>
    </div>
  );
}
