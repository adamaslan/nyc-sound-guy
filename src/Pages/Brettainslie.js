import React from "react";

import AreaCode from "../Assets/843.jpg";
import brettainslie from "../Assets/brettainslie.jpg";

export default function Brettainslie() {
  return (
    <div>
      <p>
        <img src={brettainslie} alt="Brett" /> <br /> <br />
        Brett Ainslie is a NYC based freelance Production Sound Mixer / Boom
        Operator. Brett's sound work ranges from TV commercials to corporate
        videos, network reality shows, web-series, documentaries, narrative
        shorts and feature films. <br />
        Over the last 7 years, he's done work for Bravo, HBO, Showtime, TBS,
        A&E, MTV, Discovery, Disney, ABC, ESPN, Oxygen, National Geographic and
        more.
        <br />
        <br />
        Contact us at nycsoundpeople@gmail.com or at{" "}
        <img src={AreaCode} alt="area code" />
        -284-3462{" "}
      </p>
    </div>
  );
}
