import React ,{ useEffect, useState } from "react";
import Navbar from "./Navbar";
import Table from 'react-bootstrap/Table';


import BannerBackground from "../Assets/home-banner-background.png";
import Footer from "./Footer";


export default function MailData(){
    const [data, setData] = useState([]);



    const getAllUser = () => {
        fetch("http://localhost:4000/getAllUser", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            setData(data.data);
          });
      };
    return (
        <div className='login-bg' style={{backgroundColor:"black"}}>
        <Navbar />
        <div className="home-bannerImage-container" >
          <img src={BannerBackground} style={{ position: 'relative',height:"50rem" }} alt="" />

        </div>
        <div className="container" style={{width:"100%",height:"250%"}}>
        {/* <table style={{ width: 1500,color:"white",zIndex:"1" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Delete</th>
          </tr>
          {data.map((i) => {
            return (
              <tr>
                <td>{i.fname}</td>
                <td>{i.email}</td>
                <td>{i.userType}</td>
                <td>
                  
                </td>
              </tr>
            );
          })}
        </table> */}
        <div className="container" >
        <Table striped bordered hover  >
      <thead className="tr-head" >
        <tr>
          <th >#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody className="tr-head">
        <tr >
          <td className="tr-head">1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

        </div>
       

        </div>
        
 
 <Footer />
        </div>
        
       
        

    )
    
        
    


};


