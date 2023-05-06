import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";

// function userHome(userData){
//     return (
//         <div className='login-bg' style={{backgroundColor:"black"}}>
//   <Navbar />
 
//   <div className="home-bannerImage-container">
// <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
//  </div>


// <div className="auth-wrapper">
// <div className="auth-inner">
//   <div>
//     Name<h1>{userData.fname}</h1>
//     Email <h1>{userData.email}</h1>
//     <br />
    
//   </div>
 
// </div>
// <Footer />
// </div></div>

//     )
// }

// export default userHome;


export default function UserHome({ userData }) {
  
  return (
    <div className='login-bg' style={{backgroundColor:"black"}}>
      <Navbar />
      <div className="home-bannerImage-container">
 <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
  </div>
       <div className="auth-wrapper">
      <div className="auth-inner">
      <div>
          Full Name<h1>{userData.fname} &nbsp;{userData.lname}</h1>
          Email <h3>{userData.email}</h3>
          UserType<h3>{userData.userType}</h3>
          <br />
          
        </div>
      </div>
      <Footer />
    </div>

    </div>
   
  );
}