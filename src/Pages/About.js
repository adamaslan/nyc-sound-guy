import React from "react";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function About() {
  return (
    <div>
      <Emph2>
        NYC SOUND GUY is a service that connects productions to many of the most
        talented sound mixers out there.
        <br />
        <br /> <p>We are in direct contact with all the sound mixers on this page
        as to their availability and rates. Feel free to contact us with any nyc
        sound mixer needs you may have. Even if all the sound mixers we have
        listed are busy there are a ton of other New York City sound mixers we
        know that we can confirm are available at a rate fair to any type of
        production.</p> <br />
        
        We are able to travel to any location in the world and have the travel gear necessary to expedite shoots associated with lots of travel.
        <br /> <br />
        Contact us today!
        <h3>
          <Button onClick={() => alert("8432843462")}>
            Click here to get our number
          </Button>{" "}
          <br />
          <Button onClick={() => alert("nycsoundpeople@gmail.com")}>
            Click here to get our email
          </Button>{" "}
        </h3>
      </Emph2>
    </div>
  );
}
