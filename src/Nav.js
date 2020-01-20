import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </ul>
  </nav>
);
export default Nav;

//     <nav className="navbar navbar-inverse">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//       <a className="navbar-brand" href="/">NYC SOUND GUY</a>
//     </div>
//     <div className="collapse navbar-collapse" id="myNavbar">
//       <ul className="nav navbar-nav">

//         <li><a href="about">About</a></li>
//         <li><a href="services">Services</a></li>
//         <li><a href="soundmixers">Sound Mixers</a></li>
//         <li><a href="experience">Experience</a></li>
//         <li><a href="gear">Gear</a></li>
//      	   <li><a href="travel">Travel</a></li>
//       </ul>

//     </div>
//   </div>
// </nav>
