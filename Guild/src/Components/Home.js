import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Guild Contribution Tracker
          </h1>
          <p className="primary-text">
            Want to get Community Points ? &nbsp;&nbsp;&nbsp;&nbsp;Just Contribute 
          </p>
          <button className="secondary-button">
            Contribute <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} style={{marginTop:'100px',marginLeft:'50px'} }alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
