import React, { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import BannerBackground from "../Assets/home-banner-background.png";




export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "anshu") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:4000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "Ok") {
            if(userType === "Admin"){
              alert("Admin Registration Successful");
              window.location.href = "./sign-in";
            }
            else{
              alert("User Registration Successful");
              window.location.href = "./sign-in";

            }
           
           
          } else {
            alert("Something went wrong");
          }
        });
    }
  };
  
    return (
      <div className='login-bg' style={{backgroundColor:"black"}}>
        <Navbar />
      <div className="auth-wrapper">
      <div className="home-bannerImage-container">
          <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
        </div>
        
        
          <div className="auth-inner">
          <form onSubmit={handleSubmit}>
       
          <h3>Sign Up</h3>
          Register As :
          <div className="radio-button" style={{display:"flex",justifyContent:"space-evenly"}}>
            
            <input
            
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
           
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType === "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className=" secondary-button" style={{marginLeft:"-0.1rem" , marginTop:"0.2rem"}}>
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-center">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>

          </div>
          </div>
          <Footer />
          </div>
     
      
    )
  }




  