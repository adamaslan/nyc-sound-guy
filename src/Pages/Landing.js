import React from "react";
import Mixer from "../Assets/mixer.gif";
import Carousel from "react-elastic-carousel";
import Caro from "../Caro";
import Img from "../Img";
import pfeil from "../Assets/pfeil.jpg";
import brettainslie from "../Assets/brettainslie.jpg";
import Moote from "../Assets/moote.JPG";
import Button from "../Button";
import Emph from "../Emph";
import Allistair from "../Assets/Allistair.JPG";
import joy from "../Assets/joy.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Landing() {
  return (
    <div>
      <p>
        <br />
        Welcome to NYC Sound Guy, the home of world's only website exclusively
        dedicated to booking sound professionals for film, television, and web
        content. NYC Sound Guy makes it easy to work with the best film sound
        people in NYC.
        <br />
        <div>
          <Carousel breakPoints={breakPoints}>
            <Caro>
              <Img src={pfeil} alt="Joe" />{" "}
            </Caro>
            <Caro>
              <Img src={Mixer} />
            </Caro>
            <Caro>
              <Img src={Moote} alt={Mixer} />
            </Caro>
            <Caro>
              {" "}
              <Img src={brettainslie} alt={Mixer} />
            </Caro>
            <Caro>
              {" "}
              <Img src={Allistair} alt={Mixer} />
            </Caro>
            <Caro>
              {" "}
              <Img src={joy} alt={Mixer} />
            </Caro>
          </Carousel>
        </div>
        <Emph>
          Our booking and consulatation services are FREE to all productions
          seeking one of our sound services.{" "}
        </Emph>
        <br />
        Feel free to contact NYC Soundguy with any sound related questions you
        may have on your film, tv show, web content, branded content,
        commercial, or documentary even if you are not looking to book a sound
        mixer with us currently. <br />{" "}
        <Button href="/about">Click here to hear more on our Services</Button>
        <br />
        We are here to help find the best audio solution for you.
        <br />
      </p>

      <h2>
        <Button onClick={() => alert("8432843462")}>
          Click here to get our number
        </Button>
        <Button onClick={() => alert("nycsoundpeople@gmail.com")}>
          Click here to get our email
        </Button>{" "}
      </h2>
      <br />
      <br />
      <br />
    </div>
  );
}
