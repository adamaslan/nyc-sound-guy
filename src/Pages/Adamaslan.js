import React from "react";

import AreaCode from "../Assets/843.jpg";
import Adam from "../Assets/adam.JPG";

export default function Adamaslan() {
  return (
    <div>
      <p>
        <img src={Adam} alt="adam" /> <br />
        Adam Aslan is a sound mixer boom op, and sound designer with years of
        experience handling audio both on set and in post. Based in New York
        City, he is available for jobs in the tristate area as well as travel
        shoots all over the U.S. and the world. From narrative features,
        reality, and documentaries to commercials, corporate, and ENG.
        <br />
        He has the equipment and expertise to get great results and make audio
        one less thing for you to worry about
        <br />
        <br />
        Contact us at nycsoundpeople@gmail.com or at{" "}
        <img src={AreaCode} alt="area code" />
        -284-3462{" "}
      </p>
    </div>
  );
}
