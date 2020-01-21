import React from "react";

import AreaCode from "../Assets/843.jpg";
import joy from "../Assets/joy.jpg";

export default function Drewjoy() {
  return (
    <div>
      <p>
        <img src={joy} alt="Drew" /> <br /> <br />
        Drew Joy is a a sound mixer, boom op, and sound designer with years of
        experience. He also has experience with ADR, Foley, and other types of
        post sound.
        <br /> <br />
        Based in New York City, He is available for jobs in the tristate area as
        well as travel shoots all over the U.S. and the world. Drew has the gear
        necessary for an incredible range of sound projects narrative, reality,
        and documentaries to commercials, corporate, studio recording, musical
        performances, and any type of ENG sound work.
        <br />
        <br />
        Contact us at nycsoundpeople@gmail.com or at{" "}
        <img src={AreaCode} alt="area code" />
        -284-3462{" "}
      </p>
    </div>
  );
}
