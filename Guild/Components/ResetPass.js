import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";


export default class ResetPass extends Component{


    constructor(props){
        super(props);
        this.state ={
            email:"",

        };
        this.handleSubmit =this.handleSubmit.bind(this);
    }

   
     handleSubmit(e){
        e.preventDefault();

        const {email} = this.state;
        console.log(email);
        fetch("http://localhost:4000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Enter your Mail First");
        // console.log(data,"userRegister"); 
        // window.location.href = "./CheckMail";
        // alert(data.status);
        if (data.status === "Ok") {
            alert("Check Your Mail");
            window.location.href = "./CheckMail";
          }
       
      });
  };
    

    render(){
        return (
           
             
            <div className='login-bg' style={{backgroundColor:"black"}}>
            <Navbar/>
            <div className="home-bannerImage-container">
              <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
            </div>
            <div className="auth-wrapper">

              <div className="auth-inner">
                
              <form onSubmit={this.handleSubmit}>
            <h3>Forget password</h3>
    
            <div className="mb-3">
                    <label>Email Address</label>
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) =>this.setState({email:e.target.value})}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="secondary-button"  > 
                        Submit
                    </button>
                </div>
            
            
          </form>
    
    
              </div>
              </div>
          
    <Footer />
          </div>
        );
    }

}