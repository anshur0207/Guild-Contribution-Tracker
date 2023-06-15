// import React,{useEffect,useState} from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';

// function TotalContributionPoints(){
//     const [userData, setUserData] = useState("");
//   const [admin, setAdmin] = useState(false);

//     useEffect(() => {
//         fetch("http://localhost:4000/userData", {
//           method: "POST",
//           crossDomain: true,
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             token: window.localStorage.getItem("token"),
//           }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data, "userData");
//             if (data.data.userType === "Admin") {
//               setAdmin(true);
//             }

//             setUserData(data.data);

//             if (data.data === "token expired") {
//               alert("Token expired login again");
//               window.localStorage.clear();
//               window.location.href = "./sign-in";
//             }
//           });
//       }, []);

//       const [data, setData] = useState([]);

//       useEffect(() => {
//         fetch("http://localhost:4000/getAllData", {
//           method: "GET",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data, "getAllData");
//             setData(data.data);
//           });
//       }, []);

//     return (
//         <div className='login-bg' style={{backgroundColor:"black"}}>
//            <Navbar />

//            <br />
//            <div className="main-card">

//     </div>
//     <h1 style={{textAlign:'center',marginTop:'50px', color:"white"}}>Points Summary:  {userData.points} </h1>
//          <div className="container" >
//          <Table striped>
//       <thead style={{color:"white"}}>
//         <tr style={{textAlign:"center"}}>

//           <th>Contribution Type</th>
//           <th>Points Credited</th>
//           <th>Date</th>
//         </tr>
//       </thead>
//       <tbody>
//       {data.map((i) => {
//               if (userData.email === i.email) {
//                 return (
//         <tr>

//           <td style={{color:"white",textAlign:"center"}}>{i.contribution_type}</td>
//           <td>
//                       {i.status === "Approved" ? (
//                         <h5 style={{color:"white",textAlign:"center"}}>{i.community_points}</h5>
//                       ) : i.status === "Rejected" ? (
//                         <h5 style={{color:"white",textAlign:"center"}}>Rejected</h5>
//                       ) : (
//                         <h5 style={{color:"white",textAlign:"center"}}>Pending</h5>

//                       )}
//                     </td>
//           <td style={{color:"white",textAlign:"center"}}>{i.date}</td>

//         </tr>

//                 )}
//       }
//       )
//     }

//       </tbody>
//     </Table>
//          </div>
//        <br /><br /><br />
//         <Footer />
//         </div>
//     )
// }

// export default TotalContributionPoints;

import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";

import Footer from "./Footer";

import Table from "react-bootstrap/Table";



import Card from "react-bootstrap/Card";

import Carousel from "react-bootstrap/Carousel";

import Select from "react-select";


function TotalContributionPoints() {
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

  const d1 = new Date();

  let curr_year = d1.getFullYear();

  const options1 = [
    { value: curr_year, label: curr_year },

    { value: curr_year - 1, label: curr_year - 1 },

    { value: curr_year - 2, label: curr_year - 2 },

    { value: curr_year - 3, label: curr_year - 3 },

    { value: curr_year - 4, label: curr_year - 4 },
  ];

  const options2 = [
    { value: "Q1", label: "Q1" },

    { value: "Q2", label: "Q2" },

    { value: "Q3", label: "Q3" },

    { value: "Q4", label: "Q4" },
  ];

  const [year, setYear] = useState(options1[0].value);

  const [quater, setQuater] = useState(options2[0].value);

  const [total, setTotal] = useState(0);

  const handleClick = () => {
    console.log(quater + " " + year);

    fetch("http://localhost:4000/quaterDetails", {
      method: "POST",

      crossDomain: true,

      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",

        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        year,

        quater,

        email: userData.email,
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);

        setTotal(data.data);
      });
  };

  return (
    <div className="login-bg" style={{ backgroundColor: "black" }}>
      <Navbar />

      <br />

     

      <div className="main-card">
      <div className="card-1">
    <Card style={{
              backgroundColor: "#eee",

              display: "flex",

              alignItems: "center",

              textAlign: "center",

              width: "20rem",

              height: "15rem",
            }}>

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
        <Card.Text style={{fontSize:"20px"}}>
        {userData.q1} Points
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
        <Card.Text style={{fontSize:"20px"}}>
        {userData.q2} Points
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
        <Card.Text style={{fontSize:"20px"}}>
        {userData.q3} Points
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
        <Card.Text style={{fontSize:"20px"}}>
        {userData.q4} Points
        </Card.Text>

      </Carousel.Item>
    </Carousel>

      </Card.Body>
    </Card>

    </div>

    
 

        <div className="card-1">
          <Card
            style={{
              backgroundColor: "#eee",

              display: "flex",

              alignItems: "center",

              textAlign: "center",

              width: "20rem",

              height: "15rem",
            }}
          >
            <Card.Body>
              {/* <img

          className="d-block w-200"

          src="https://definition.zone/wp-content/uploads/2022/04/Current-Year.png"

          alt="slide-1"

        /> */}

              <Card.Text style={{ marginTop: "2rem" }}>
                <br></br>

                <h2 style={{color:"black"}}>
                  Current Year:&nbsp; &nbsp; {userData.curr_yr_points}
                  <br></br>
                  Previous Year: &nbsp; &nbsp; {userData.prev_yr_points}
                  <br />
                  <br />
                </h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="card-1">
          <Card
            style={{
              backgroundColor: "#eee",

              display: "flex",

              alignItems: "center",

              textAlign: "center",

              width: "20rem",

              height: "15rem",
            }}
          >
            <Card.Body>
              <h3>Find Points</h3>

              <div>
                <Select
                  options={options1}
                  defaultValue={options1[0]}
                  onChange={(e) => {
                    setYear(e.value);
                  }}
                />
              </div>

              <div>
                <Select
                  options={options2}
                  defaultValue={options2[0]}
                  onChange={(e) => {
                    setQuater(e.value);
                  }}
                />
              </div>

              <Card>
                <button className="btn-primary btn" onClick={handleClick}>
                  Find Points
                </button>
              </Card>

              <Card> {total}</Card>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br></br>

      <br></br>

      <br></br>
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Points &nbsp; Summary &nbsp;: &nbsp;{userData.points}{" "}
      </h1>
      <br></br>

      <div className="container">
        <Table striped>
          <thead style={{ color: "white" }}>
            <tr style={{ textAlign: "center" }}>
              <th>Contribution &nbsp; Type</th>

              <th>Points &nbsp; Credited</th>

              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((i) => {
              if (userData.email === i.email) {
                return (
                  <tr>
                    <td style={{ color: "white", textAlign: "center" }}>
                      {i.contribution_type}
                    </td>

                    <td>
                      {i.status === "Approved" ? (
                        <h5 style={{ color: "white", textAlign: "center" }}>
                          {i.community_points}
                        </h5>
                      ) : i.status === "Rejected" ? (
                        <h5 style={{ color: "white", textAlign: "center" }}>
                          Rejected
                        </h5>
                      ) : (
                        <h5 style={{ color: "white", textAlign: "center" }}>
                          Pending
                        </h5>
                      )}
                    </td>

                    <td style={{ color: "white", textAlign: "center" }}>
                      {i.date}
                    </td>

                    {/* <td style={{color:"white",textAlign:"center"}}>Quarter = {moment(i.date).quarter(4)}</td> */}
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </div>

      <br />

      <br />

      <br />

      <Footer />
    </div>
  );
}

export default TotalContributionPoints;
