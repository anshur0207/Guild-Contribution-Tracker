import React, {useState}from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import NavBarSignup from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {

  const isLoggedIn=window.localStorage.getItem("loggedIn");
  const [userData, setUserData] = useState("");
const [admin, setAdmin] = useState(false);



useEffect(() => {
  fetch("http://localhost:4000/userData", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token: window.localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      if (data.data.userType === "Admin") {
        setAdmin(true);
      }

      setUserData(data.data);

      
    });
}, []);
  // return (
  //   <div className="home-container">
  //    <NavBarSignup/>
  //    <div className="home-bannerImage-container">
  //         <img src={BannerBackground} alt="banner" style={{height:"50rem"}} />
  //       </div>
  //     <div className="home-banner-container">
        
  //       <div className="home-text-section">
  //         <h1 className="primary-heading">
  //          Guild Contribution Tracker
  //         </h1>
  //         <p className="primary-text">
  //           Want to get Community Points ? &nbsp;&nbsp;&nbsp;&nbsp;Just Contribute 
  //         </p>
  //         <button className="secondary-button">
  //           Contribute <FiArrowRight />{" "}
  //         </button>
  //       </div>
  //       <div className="home-image-section">
  //         <img src={BannerImage} style={{marginTop:'100px',marginLeft:'50px'} }alt="" />
  //       </div>
        
  //     </div>
  //     <Work />
  //     <Contact />
  //     <Footer />
  //   </div>



    
  // );
  if(isLoggedIn ){
    if(userData.userType==="Admin"){
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
        
         </div>
        <div className="home-image-section">
           <img src={BannerImage} style={{marginTop:'100px',marginLeft:'50px'} }alt="" />
         </div>
        
       </div>
       <Work />
      <Contact />
       <Footer />
     </div>
        )}
        else{
          
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
          
          <a style={{textDecoration:"none"}} href="mailto:Contributions123@gmail.com?subject=Contribution Towards Guild Contribution tracker !&body=Contribution_Type:">
          <button className="secondary-button">
             Contribute <FiArrowRight />
           </button></a>
        
         </div>
        <div className="home-image-section">
           <img src={BannerImage} style={{marginTop:'100px',marginLeft:'50px'} }alt="" />
         </div>
        
       </div>
       <Work />
      <Contact />
       <Footer />
     </div>
            )}
        }
      
    
  
    
    
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
          <a href="/sign-in" style={{textDecoration:"none"}}><button className="secondary-button" >
             Contribute <FiArrowRight />
           </button></a>
        
         </div>
        <div className="home-image-section">
           <img src={BannerImage} style={{marginTop:'100px',marginLeft:'50px'} }alt="" />
         </div>
        
       </div>
       <Work />
      <Contact />
       <Footer />
     </div>
    )
};

export default Home;
