import React from "react";

import brettainslie from "../Assets/brettainslie.jpg";
import Button from "../Button";
import Emph2 from "../Emph2";
import Flexdiv from "../Flexdiv";
import Flexitem from "../Flexitem";

export default function Brettainslie() {
  return (
    <Flexdiv>
      <Emph2>
        <Flexitem src={brettainslie} alt="Brett" />
        <p>
          Brett Ainslie is a NYC based freelance Production Sound Mixer / Boom
          Operator. Brett's sound work ranges from TV commercials to corporate
          videos, network reality shows, web-series, documentaries, narrative
          shorts and feature films. <br />
        </p>
        <p>
          Over the last 7 years, he's done work for Bravo, HBO, Showtime, TBS,
          A&E, MTV, Discovery, Disney, ABC, ESPN, Oxygen, National Geographic
          and more.
        </p>

        <Flexdiv>
          <Button onClick={() => alert("8432843462")}>
            Click here to get our number
          </Button>
          <Button onClick={() => alert("nycsoundpeople@gmail.com")}>
            Click here to get our email
          </Button>{" "}
        </Flexdiv>
      </Emph2>
    </Flexdiv>
  );
}
