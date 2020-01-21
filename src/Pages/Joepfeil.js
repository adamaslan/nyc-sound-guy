import React from "react";

import AreaCode from "../Assets/843.jpg";
import pfeil from "../Assets/pfeil.jpg";

export default function Joepfeil() {
  return (
    <div>
      <p>
        <img src={pfeil} alt="Joe" /> <br />
        With over 10 years experience in location sound engineering, Joe Pfeil
        is the owner/operator of State of Sound LLC. Born and raised in Alaska,
        Joe has worked extensively across the country as an audio engineer for
        the film, TV and video game industries.
        <br />
        <br />
        Outside of video production, Joe has worked 8 years as an Alaskan
        commercial fisherman. He also worked on Yukon and Arctic expeditions to
        land survey and provide demarcation for 100 miles of the Alaska/Canada
        border.
        <br />
        <br />
        Contact us at nycsoundpeople@gmail.com or at{" "}
        <img src={AreaCode} alt="area code" />
        -284-3462{" "}
      </p>
    </div>
  );
}
