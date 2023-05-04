import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";







export default function Dashboard() {
    
    
    return (

        <div className='login-bg' style={{backgroundColor:"black"}}>
           <Navbar />

           
           <h1 style={{textAlign:'center',marginTop:'50px', color:"white"}}>This is User Dashboard </h1>
           <div className="home-bannerImage-container" >
          <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
        </div>
        {/* <AdminHome /> */}
        
        
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


            
      

    
    
;