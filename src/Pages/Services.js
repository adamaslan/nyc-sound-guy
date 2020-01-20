import React from "react";
import {
  Link
} from "react-router-dom";
import "./styles.css"

export default function Services() {
  return (<div>
    <h2 className="services_title">Services</h2>
    <Link to="/"> Go home</Link>
  </div>)
}