import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";





function Dashboard(){
    return (
        <div>
           <Navbar />
           <h1 style={{textAlign:'center',marginTop:'50px'}}>This is Your Dashboard</h1>
           <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           <Footer />
        </div>
        
    )
}

export default Dashboard;