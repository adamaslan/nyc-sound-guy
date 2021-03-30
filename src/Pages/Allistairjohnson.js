import React from "react";

import AreaCode from "../Assets/843.jpg";
import Allistair from "../Assets/Allistair.JPG";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function Allistairjohnson() {
  return (
    <div>
      <Emph2>
        <img src={Allistair} alt="Allistair" /> <br />
        Allistair Johnson is a a sound mixer, boom op, and sound designer with
        years of experience handling audio both on set and in post.
        <br />
        Based in New York City, He is available for jobs in the tristate area as
        well as travel shoots all over the U.S. and the world. From narrative
        features, reality, and documentaries to commercials, corporate, and ENG,
        He has the equipment and expertise to get great results and make audio
        one less thing for you to worry about.
        <br /> Originally from sunny Florida, Allistair studied film at Boston
        University, where he specialized in audio before moving to New York City
        to make movies sound great for a living.
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
