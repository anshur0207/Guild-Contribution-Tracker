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

           
           <h1 style={{textAlign:'center',marginTop:'50px', color:"white"}}>This is User Dashboard </h1>
           <div className="home-bannerImage-container" >
          <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
        </div>
        <div className="main-card">
    <div className="card-1">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Your Contribution</Card.Title>
        {/* <Card.Text>
          Mail Data
        </Card.Text> */}
        <Link to ='/UserContribution'>
        <Button className="dashboard-btn" >Show</Button></Link>
      </Card.Body>
    </Card>

    </div>
    <div className="card-1">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Title>Your Points</Card.Title>
        {/* <Card.Text>
          Mail Data
        </Card.Text> */}
        <Link to ='/TotalContributionPoints'>
        <Button className="dashboard-btn" >Show</Button></Link>
      </Card.Body>
    </Card>

    </div>
    
    
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