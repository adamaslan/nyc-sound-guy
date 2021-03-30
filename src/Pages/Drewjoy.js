import React from "react";
import joy from "../Assets/joy.jpg";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function Drewjoy() {
  return (
    <div>
      <Emph2>
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
        <Button onClick={() => alert("8432843462")}>
          Click here to get our number
        </Button>
        <br />
        <Button onClick={() => alert("nycsoundpeople@gmail.com")}>
          Click here to get our email
        </Button>{" "}
      </Emph2>
    </div>
  );
}
