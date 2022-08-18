import React from "react";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function Travel() {
  return (
    <div>
      <Emph2>
        <br />
      Zaxcom is one of the most trusted companies in location sound. Visit www.zaxcom.com to learn more.

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
