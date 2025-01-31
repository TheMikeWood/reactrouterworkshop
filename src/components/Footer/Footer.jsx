import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/">Home</Link>
    </footer>
  );
}

export default Footer;
