import React,{useEffect,useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';




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



           
          
           
           <br />
           <div className="main-card">
    <div className="card-1">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448294248871-4MTPBZQEE8B5XITD0ZOZ/image-asset.png"
          alt="First slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
        <Card.Text>
        {userData.points} Points
        </Card.Text>
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448306925282-BJOPIR761AOTZCQCB5PY/image-asset.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        
         
        </Carousel.Caption>
        <Card.Text>
        1000 Points
        </Card.Text>
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448307491075-AUGS0DFI0OACM1JI34S7/image-asset.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
         
        </Carousel.Caption>
        <Card.Text>
        2000 Points
        </Card.Text>
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448307843429-NBBINO7KRPDHPUHOLMY3/image-asset.png"
          alt="Third slide"
        />

        <Carousel.Caption>
         
          
        </Carousel.Caption>
        <Card.Text>
        750 Points
        </Card.Text>
    
      </Carousel.Item>
    </Carousel>
        
       
      
      </Card.Body>
    </Card>

    </div>
    <div className="card-1">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Current Year  </Card.Title>
        <Card.Text>
        {userData.points} Points 
        </Card.Text>
    
      
      </Card.Body>
    </Card>

    </div>
    </div>
    <h1 style={{textAlign:'center',marginTop:'50px', color:"white"}}>Points Summary:  {userData.points} </h1>
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
                        <h5 style={{color:"white",textAlign:"center"}}>{i.community_points}</h5>
                      ) : i.status === "Rejected" ? (
                        <h5 style={{color:"white",textAlign:"center"}}>Rejected</h5>
                      ) : (
                        <h5 style={{color:"white",textAlign:"center"}}>Pending</h5>
                    
                      )}
                    </td>
          <td style={{color:"white",textAlign:"center"}}>{i.date}</td>
          
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

