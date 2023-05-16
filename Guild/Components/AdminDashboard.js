import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";







export default function Dashboard() {
    
    
    return (

        <div className='login-bg' style={{backgroundColor:"black"}}>
           <Navbar />

           
           <h1 style={{textAlign:'center',marginTop:'50px', color:"white"}}>This is Admin Dashboard </h1>
           <div className="home-bannerImage-container" >
          <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />

        </div>
<div className="main-card">
    <div className="card-1">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>All Details</Card.Title>
        <Card.Text>
         Contribution Data
        </Card.Text>
        <Link to ='/MailData'>
        <Button className="dashboard-btn" >Show Data</Button></Link>
      </Card.Body>
    </Card>

    </div>
    <div className="card-1">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>All Registerd Users</Card.Title>
        <Card.Text>
          Registered Users Data
        </Card.Text>
        <Link to ='/UserData'>
        <Button className="dashboard-btn">Show Data</Button>
        </Link>
      </Card.Body>
    </Card>

    </div>
    {/* <div className="card-1">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>All Details</Card.Title>
        <Card.Text>
          Mail Data
        </Card.Text>
        <Button variant="primary" >Show Data</Button>
      </Card.Body>
    </Card>

    </div> */}
    </div>
        
       
        
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