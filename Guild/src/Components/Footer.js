import React from "react";
import Logo from "../Assets/logo-final.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} style={{height:'50px',width:'700px'}} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Home</span>
          <span>Help</span>
          <span>Share</span>
          <span>Developers</span>
          <span>Testimonials</span>
          
        </div>
        <div className="footer-section-columns">
          
          <span>Harshal@contributor.com</span>
          <span>Priya@contributor.com</span>
          <span>Anshu@contributor.com</span>
          <span>Jit@contributor.com</span>
          <span>Aditya@contributor.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
