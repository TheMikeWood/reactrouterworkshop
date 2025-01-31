import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
