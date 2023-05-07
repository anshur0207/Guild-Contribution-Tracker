import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import NavBarSignup from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home-container">
     <NavBarSignup/>
     <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="banner" style={{height:"50rem"}} />
        </div>
      <div className="home-banner-container">
        
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
      <Work />
      <Contact />
      <Footer />
    </div>
    
  );
};

export default Home;
