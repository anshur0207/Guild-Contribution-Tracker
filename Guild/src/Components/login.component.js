import React, { Component} from 'react';
import NavBarSignup from './NavBarSignup'
import Footer from './Footer';
import BannerBackground from "../Assets/home-banner-background.png";

import 'bootstrap/dist/css/bootstrap.min.css';  





export default class Login extends Component {
  

  
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  
  handleSubmit(e){
    e.preventDefault();
    const {email,password}=this.state;
    console.log(email,password);
    fetch("http://localhost:4000/login-user",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
        password,
      }),
    }) 
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data,"userRegister");
      if(data.status === "ok"){
        
        window.localStorage.setItem("token",data.data);
        window.localStorage.setItem("loggedIn",true);
        window.location.href = "/";
      }
      else{

      alert("Logging Failed Because Your Credentials Might be Wrong");
      }
    });
  }
  render() {
    return (
      <div className='login-bg' style={{backgroundColor:"black"}}>
        <NavBarSignup/>

       
        <div className="home-bannerImage-container">
          <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
        </div>
        
        <div className="auth-wrapper">
        {/* <Container className='p-4'>  
   <Alert variant="danger" >Login Failed</Alert>  </Container> */}
          
        
        
        
       
          <div className="auth-inner">
            
          <form onSubmit={this.handleSubmit}>
        <h3>Log In to Your Account</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className=" secondary-button" style={{marginLeft:"-0.1rem"}}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-center">
          Don't have an Account ? <a href="/sign-up">Signup</a>
        </p>
        <p className="forgot-password text-center">
          Forget Password ? <a href="/ResetPass">Click here !</a>
        </p>
      </form>


          </div>
          </div>
      
<Footer />
      </div>

      
      
    )
  }
}
