import React,{useEffect,useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";
import Table from 'react-bootstrap/Table';
import {
    MDBBadge,
   
  } from "mdb-react-ui-kit";


function TotalContributionPoints(){
    const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  
    useEffect(() => {
        fetch("http://localhost:4000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            if (data.data.userType === "Admin") {
              setAdmin(true);
            }
    
            setUserData(data.data);
    
            if (data.data === "token expired") {
              alert("Token expired login again");
              window.localStorage.clear();
              window.location.href = "./sign-in";
            }
          });
      }, []);
    
      const [data, setData] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:4000/getAllData", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "getAllData");
            setData(data.data);
          });
      }, []);

    return (
        <div className='login-bg' style={{backgroundColor:"black"}}>
           <Navbar />


           
           <h1 style={{textAlign:'center',marginTop:'50px', color:"white"}}>Total Points:  {userData.points} </h1>
           <br />
         <div className="container" >
         <Table striped>
      <thead style={{color:"white"}}>
        <tr style={{textAlign:"center"}}>
         
          <th>Contribution Type</th>
          <th>Points Credited</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {data.map((i) => {
              if (userData.email === i.email) {
                return (
        <tr>
          
          <td style={{color:"white",textAlign:"center"}}>{i.contribution_type}</td>
          <td>
                      {i.status === "Approved" ? (
                        <h5 style={{color:"white",textAlign:"center"}}>+500</h5>
                      ) : i.status === "Pending" ? (
                        <h5 style={{color:"white",textAlign:"center"}}>0</h5>
                      ) : (
                        <h5 style={{color:"white",textAlign:"center"}}>Rejected</h5>
                    
                      )}
                    </td>
          <td style={{color:"white",textAlign:"center"}}>NA</td>
        </tr>
                )}
      }
      )
    }
        
        
      </tbody>
    </Table>
         </div>
       <br /><br /><br />
        <Footer />
        </div>
    )
}


export default TotalContributionPoints;

