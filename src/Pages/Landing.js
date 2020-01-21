import React from "react";
import Mixer from "../Assets/mixer.gif";
import AreaCode from "../Assets/843.jpg";

export default function Landing() {
  return (
    <div>
      <p>
        ----------------------------------------------------------------->
        Welcome to NYC Sound Guy, the home of world's only website exclusively
        dedicated to booking sound professionals for film, television, and web
        content. This site is designed and coded by freelance location
        soundmixer Adam Aslan. NYC Sound Guy makes it easy to work with the best
        film sound people in NYC. We are currently offering our booking services
        for free to both sound mixers and the productions that are seeking their
        services. Just fill out the contact form and we will get back to you
        promptly. <br />
        <br />
        Feel free to contact NYC Soundguy with any sound related questions you
        may have on your film, tv show, web content, branded content,
        commercial, or documentary even if you are not looking to book a sound
        mixer with us currently. We also are able to help you find a sound mixer
        in many parts of the world, but especially major cities like Los
        Angelas, Boston, Seattle, Portland, Las Vegas, Providence, and
        Philadelphia. <br />
        <br />
        We are here to help find the best audio solution for you.
        <br />
        <br /> Fill out the form below or Contact us at nycsoundpeople@gmail.com
        or at <img src={AreaCode} alt="area code" />
        -284-3462 <br />{" "}
        -----------------------------------------------------------------
      </p>

      <p>
        <img
          src={Mixer}
          width="600"
          height="600"
          usemap="#Map"
          border="0"
          alt="hands mixing"
        />
        <br /> <br />
        <script
          type="text/javascript"
          src="https://form.jotform.us/jsform/72077025484154"
        ></script>
        <br />
        <br />
        -----------------------------------------------------------------
        <br />
        <br />
      </p>
      <a href="/" title="Back to the Home page">
        <b>HOME</b>
      </a>
    </div>
  );
}
