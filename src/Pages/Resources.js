import React from "react";
import Button from "../Button";
import Emph2 from "../Emph2";
import Emph from "../Emph";

export default function Travel() {
  return (
    <div>
      <Emph>Resources on Location Sound Equipment</Emph>
      <Emph2>
        <br />
      Zaxcom is one of the most trusted companies in location sound for recorders, mixers, and lavs.  Visit  <a href="https://www.zaxcom.com">www.zaxcom.com</a> to learn more.

        <br />
        Sound Devices is another one of the most trusted companies in location sound for mixers and recorders. Visit  <a href="https://www.sounddevices.com">www.sounddevices.com</a> to learn more.

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
