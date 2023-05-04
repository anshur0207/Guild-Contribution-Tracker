import "./App.css";
import Home from "./Components/Home";
import React from "react";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';

import Login from "./Components/login.component";
import SignUp from "./Components/signup.component";

import UserDetails from "./Components/UserDetails";
import AdminHome from "./Components/adminHome";
import Dashboard from "./Components/Dashboard";
import MailData from "./Components/MailData";




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
       
        
        <Route exact path="/adminHome" element={<AdminHome />}></Route>
        <Route exact path="/Dashboard" element={<Dashboard />}></Route>
        <Route exact path="/MailData" element={<MailData />}></Route>


        
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
