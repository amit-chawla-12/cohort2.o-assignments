import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>yourMART</h1>
      </div>
      <div className="links">
        
        <Link to="/">Home</Link>
        <Link to="/product">product</Link>
      </div>
    </div>
  );
};

export default Navbar;
