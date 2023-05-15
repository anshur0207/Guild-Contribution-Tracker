import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";


export default class Checkmail extends Component{

    

    render(){
        return (
           
             
            <div className='login-bg' style={{backgroundColor:"black"}}>
            <Navbar/>
            <div className="home-bannerImage-container">
              <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
            </div>
            <div className="auth-wrapper">

              <div className="auth-inner">
                
             
            <h3>Check Your Mail</h3>
             <div>
                <h3>We have Sended Mail in your Email id Check Your Mail and reset Password from there </h3>
            
                </div>
            
            
        
    
    
              </div>
              </div>
          
    <Footer />
          </div>
        );
    }

}