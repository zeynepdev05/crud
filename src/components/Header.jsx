import React from "react";
import { Link } from "react-router-dom";
import img from "../image/image 2.png";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="hero_img">
            <img src={img} alt="" />
          </div>
          <div className="hero_text">
            <Link to="/menu">
              <a href="#">Menu</a>
            </Link>
            <Link to="/orders">
              <a href="#">Orders</a>
            </Link>
            <Link to="/admin">
              <a href="#">Admin</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
