import React from "react";

import AreaCode from "../Assets/843.jpg";
import Moote from "../Assets/moote.JPG";

export default function Michaelmoote() {
  return (
    <div>
      <p>
        <img src={Moote} alt="Moote" /> <br />
        Michael Moote is a a sound mixer, boom op, and sound designer with years
        of experience handling audio both on set and in post. Based in New York
        City, He is available for jobs in the tristate area as well as travel
        shoots all over the U.S. and the world. <br />
        From narrative features, reality, and documentaries to commercials,
        corporate, and ENG, He has the equipment and expertise to get great
        results and make audio one less thing for you to worry about. <br />
        Originally from Connecticut, Michael studied film at Boston University,
        where he specialized in audio before moving to New York City to make
        movies sound great for a living.
        <br />
        <br />
        Contact us at nycsoundpeople@gmail.com or at{" "}
        <img src={AreaCode} alt="area code" />
        -284-3462{" "}
      </p>
    </div>
  );
}
