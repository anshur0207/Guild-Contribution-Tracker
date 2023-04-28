import "./App.css";
import Home from "./Components/Home";
import React from "react";
import Work from "./Components/Work";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import AboutUs from "./AboutUs";
import Login from "./Components/login.component";
import SignUp from "./Components/signup.component";
import LoginUi from "./LoginUi";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/material";
import logo from './Assets/Guild.png';
import UserDetails from "./Components/UserDetails";
import Dashboard from "./Components/Dashboard";




function App() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  const isLoggedIn=window.localStorage.getItem("loggedIn");
  return (
    
        <Router>
          
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/sign-in" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route exact path="/userdetails" element={<UserDetails />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        
      </Routes>
     
      
          
        <div>
          
          
        </div>
           {/* <div className="auth-wrapper">
        <h1>GUILD CONTRIBUTION TRACKER</h1>
          <div className="auth-inner">
          
            <Routes>
              <Route exact path="/" element={isLoggedIn ==="true" ?<UserDetails />: <Login/>} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              
            </Routes>
          </div>
        </div> */}
   
      
    </Router>

  );
}

export default App;
