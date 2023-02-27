import React from "react";
import "./footerStyles.css";
import { FaFacebook, FaInstagram, FaTwitter, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <h1>logo</h1>
        <p>choose your fav destination</p>
      
      <div>
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaMailBulk />
        </a>
      </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">ChangeLog</a>

          <a href="/">status</a>

          <a href="/">liseance</a>

          <a href="/">all version</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">ChangeLog</a>

          <a href="/">status</a>

          <a href="/">liseance</a>

          <a href="/">all version</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">ChangeLog</a>

          <a href="/">status</a>

          <a href="/">liseance</a>

          <a href="/">all version</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
