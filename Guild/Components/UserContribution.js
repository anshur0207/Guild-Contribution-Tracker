import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Footer from "./Footer";
import Box from "@mui/material/Box";

// import Button from '@mui/material/Button';

import Modal from "@mui/material/Modal";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserContribution({ getAllData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  const [body, setBody] = useState("");

  const [type, setType] = useState("");
  const [email, setEmail] = useState("");

  // const chStatus = (status) => {
   
  //   fetch("http://localhost:4000/changeStatus", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       contribution_type:type,
  //       status,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
       
  //       // window.location.reload(true);
  //     });
  // };


  const handleSubmit = () => {
    console.log("contribution_type" + type);

    fetch("http://localhost:4000/updateContribution", {
      method: "POST",

      crossDomain: true,

      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",

        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        body,
        contribution_type: type,
        email,
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data); //window.location.reload();

      });
  };

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

  //  useEffect(() => {
  //   fetch("http://localhost:4000/sendData",{
  //       method:"GET",
  //   })

  //   .then((res) => res.json())
  //   .then((rows)=>{
  //       console.log(data,"sendData");
  //       setData(rows.data);
  //   });

  //  },[]);

  return (
    <div className="login-bg" style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="home-bannerImage-container"></div>
      <h1 style={{ textAlign: "center", color: "white", marginTop: "3.5rem" }}>
        Your Contributions 
      </h1>
      {/* <h4 style={{ textAlign: "center", color: "white", marginTop: "3.5rem" }}>Total Contribution points : {userData.points}</h4> */}
     
      <div className="container ">
        <MDBTable align="middle" style={{ color: "white", marginTop: "5rem" }}>
          <MDBTableHead>
            <tr>
              <th scope="col" style={{textAlign:"center"}}>EMAIL</th>
              <th scope="col" style={{textAlign:"center"}}>CONTRIBUTION TYPE</th>
              <th scope="col"style={{textAlign:"center"}}>STATUS</th>

              <th scope="col" style={{ textAlign: "center" }}>
                Actions
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Points
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Notes/Comments
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((i) => {
              
              if (userData.email === i.email) {
                return (
                  <tr style={{textAlign:"center"}}>
                    <td >
                      <div className=" align-items-center">
                        {/* <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  /> */}
                        <div className="ms-3" style={{marginLeft:"2rem"}}>
                          <p className=" fw-bold mb-1 " style={{textAlign:"center"}} >
                            {i.userFName} &nbsp;&nbsp;&nbsp;&nbsp;{i.userLName}
                          </p>
                          <p className="text-muted mb-0">{i.email}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{textAlign:"center"}}> 
                      <p className="fw-normal mb-1">{i.body}</p>
                      <p className="text-muted mb-0">{i.contribution_type}</p>
                    </td>
                    <td> 
                      {/* <p className='text-normal mb-0' style={{color:"yellow"}}>{i.status}</p> */}

                      {i.status === "Approved" ? (
                        <MDBBadge
                          style={{ paddingTop: "0.8rem", color: "white"  }}
                          color="success"
                          pill
                        >
                          <h6>Approved</h6>
                        </MDBBadge>
                      ) : i.status === "Pending" ? (
                        <MDBBadge
                          style={{ paddingTop: "0.8rem", color: "white" }}
                          color="info"
                          pill
                        >
                          <h6>Pending</h6>
                        </MDBBadge>
                      ) : (
                        <div><MDBBadge
                        style={{ paddingTop: "0.8rem", color: "white" }}
                        color="danger"
                        pill
                      >
                        <h6>Rejected</h6>
                        
                      </MDBBadge>
                      
                      </div>
                        
                        
                      )}
                    </td>

                    <td style={{ justifyContent: "space-evenly",textAlign:"center" }}>
                    {i.status === "Approved" ? (
                    <button type="button" class="btn btn-primary" disabled>Edit</button>
                        
                      ) : i.status === "Pending" ? (
                        <button type="button" class="btn btn-primary" disabled>Edit</button>
                        
                      ) : (
                       
                      <Button
                        onClick={() => {
                          setType(i.contribution_type);
                          setEmail(i.email);
                          setBody(i.body);
                          handleOpen();

                        }}
                      >
                        Edit
                      </Button>
                      
                        
                        
                      )}
                      
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Form
                            onSubmit={() => {
                              handleSubmit(i.contribution_type, i.email);
                            }}
                          >
                            {/* <button
                              className="btn-close"
                              style={{ marginLeft: "20rem" }}
                              color="none"
                              aria-label="Close"
                            /> */}

                            <Row className="mb-3">
                              <Form.Group>
                                <Form.Label>Body</Form.Label>
                                <Form.Control
                                  id="body"
                                  as="textarea"
                                  rows={3}
                                  value={body}
                                  onChange={(event) => {
                                    setBody(event.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Row>

                           
                            <div className="text-center">
                              <Button
                                style={{ textAlign: "center" }}
                                variant="primary"
                                type="submit"
                              >
                                Update
                              </Button>
                              <Button variant="secondary" style={{marginLeft:"1rem"}} onClick={handleClose}>
            Close
          </Button>
                            </div>
                          </Form>
                        </Box>
                      </Modal>

                      {/* <button className="btn btn-primary"  onClick={() => chStatus(i.email,i.contribution_type,"Approve")}>
                 Accept
                </button>
                <button className="btn btn-danger"  onClick={() => chStatus(i.email,i.contribution_type,"Reject")}>
                 Reject
                </button> */}
                    </td>
                    <td style={{textAlign:"center"}}>
                      {i.status === "Approved" ? (
                        <MDBBadge
                          style={{ paddingTop: "0.6rem", color: "white" }}
                          color="success"
                          pill
                        >
                          <h6>{i.community_points}</h6>
                        </MDBBadge>
                      ) : i.status === "Pending" ? (
                        <MDBBadge
                          style={{ paddingTop: "0.6rem", color: "white" }}
                          color="info"
                          pill
                        >
                         <h6>0</h6>
                        </MDBBadge>
                      ) : (
                        <MDBBadge
                          style={{ paddingTop: "0.6rem", color: "white" }}
                          color="danger"
                          pill
                        >
                          <h6>0</h6>
                        </MDBBadge>
                      )}
                    </td>
                    <td style={{textAlign:"center"}}>{i.notes}</td>
                  </tr>
                );
              }
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
      <br />
      <br></br>
      <br></br> <br />
      <br></br>
      <br></br> <br></br>
      <Footer />
    </div>
  );
}
