import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import Footer from './Footer';
import BannerBackground from "../Assets/home-banner-background.png";
import User from "../Assets/user.png"

export default function ProfilePage({ userData }) {
  return (
    
        <div className='login-bg' style={{backgroundColor:"black"}}>

            <section style={{ backgroundColor: '#eee' }}></section>
            <Navbar />
            <div className="home-bannerImage-container">
          <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />
        </div>
        
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
           
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4" style={{height:"19.5rem"}}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={User}
                  alt="avatar"
                  className="square"
                  style={{ width: '200px' }}
                  fluid />
                  <br/>
                <p className="text-normal mb-1">{userData.userType}</p>
                
               
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Edit</MDBBtn>
                  <MDBBtn outline className="ms-1">Contributions : </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

           
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody style={{marginTop:"1.75rem"}}>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.fname} &nbsp; {userData.lname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Company</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Cognizant</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
      </div>
 
    
  );
}