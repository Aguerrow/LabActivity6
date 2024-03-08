import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="#">
        <img src="./img/logo1.png" className="App-logo" alt="logo" />
      </a>
      <a href="#">X COLLECTION</a>
      <a href="#">MENS</a>
      <a href="#">WOMENS</a>
      <a href="#">KIDS</a>
      <a href="#">ACCESSORIES</a>
      <div className="navbar-actions">
        <a href="#">ACCOUNT</a>
        <a href="#">SEARCH</a>
        <a href="#">CART (0)</a>
      </div>
    </nav>
  );
};

export default Navbar;
