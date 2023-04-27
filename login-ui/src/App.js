import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import UserDetails from "./components/userDetails";
import logo from './images/Guild.png';


function App() {
  const isLoggedIn=window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Guild Contribution Tracker
            </Link>
            { <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div> }
          </div>
        </nav> */}
       <Navbar bg="primary" variant="dark">
        <Container>
        <Link className="navbar-brand" to={'/sign-in'}>
        <img src={logo}width={150} height={50}></img>
            </Link>
          <Nav className="me-auto">
           
          {/* <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Sign in
                  </Link>
                  </li>
            <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
            </li> */}
            
          </Nav>
        </Container>
      </Navbar>
        
        <div>
          
          
        </div>
          
        <div className="auth-wrapper">
        <h1>GUILD CONTRIBUTION TRACKER</h1>
          <div className="auth-inner">
          
            <Routes>
              <Route exact path="/" element={isLoggedIn ==="true" ?<UserDetails />: <Login/>} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              
            </Routes>
          </div>
        </div>
     </div>
      
    </Router>
  )
}

export default App
