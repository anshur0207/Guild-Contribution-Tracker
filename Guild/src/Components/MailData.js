// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// import Button from "react-bootstrap/Button";
// import {
//   MDBBadge,
//   MDBTable,
//   MDBTableHead,
//   MDBTableBody,
  
// } from "mdb-react-ui-kit";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import greentick from "../Assets/greentick.png";
// import redcross from "../Assets/redcross.png"
// import disabled from "../Assets/disabled.png"


// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// // import TextField from "@mui/material/TextField";



// export default function MailData({ getAllUser }) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [type, setType] = useState("");
//   const [email, setEmail] = useState("");



//   // const deleteContribution = (id,contribution_type) => {
//   //   if (
//   //     window.confirm(`Are you sure you want to delete ${contribution_type}`)
//   //   ) {
//   //     fetch("http://localhost:4000/deleteContribution", {
//   //       method: "POST",
//   //       crossDomain: true,
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Accept: "application/json",
//   //         "Access-Control-Allow-Origin": "*",
//   //       },
//   //       body: JSON.stringify({
//   //         id,
//   //       }),
//   //     })
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         // alert(data.data);
//   //         console.log("Data is Deleted");
//   //         changePoints(email);
          
         
//   //       });
//   //   } else {
      
//   //   }
//   // };

//   const chStatus = (email, contribution_type, status) => {
//     console.log(email + " " + contribution_type + " " + status);
//     fetch("http://localhost:4000/changeStatus", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         email,
//         contribution_type,
//         status,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         changePoints(email);
//         // window.location.reload(true);
//       });
//   };

//   const [data, setData] = useState([]);


//   useEffect(() => {
//     fetch("http://localhost:4000/getAllData", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "getAllData");
//         setData(data.data);
//       });
//   }, []);

//   const changePoints = (email) => {
//     fetch("http://localhost:4000/changePoints", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },

//       body: JSON.stringify({
//         email,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//          window.location.reload(true);
//       });
//   };
//   const [notes, setNotes] = useState("");
  

//   const addNotes = () => {
//     fetch("http://localhost:4000/updateNotes", {
//       method: "POST",

//       crossDomain: true,

//       headers: {
//         "Content-Type": "application/json",

//         Accept: "application/json",

//         "Access-Control-Allow-Origin": "*",
//       },

//       body: JSON.stringify({
//         notes,
//         contribution_type: type,
//         email,
//       }),
//     })
//       .then((res) => res.json())

//       .then((data) => {
//         console.log(data); //window.location.reload();
//       })
        
        
       
//       ;
//   };

//   return (
//     <div className="login-bg" style={{ backgroundColor: "black" }}>
//       <Navbar />
//       <div className="home-bannerImage-container"></div>
//       <h1 style={{ textAlign: "center", color: "white", marginTop: "3.5rem" }}>
//        All &nbsp;  Contributions
//       </h1>

//       <div className="container " style={{ textAlign: "center" }}>
//         <MDBTable align="middle" style={{ color: "white", marginTop: "5rem" }}>
//           <MDBTableHead>
//             <tr>
//               <th scope="col">Email</th>
//               <th scope="col">Contribution Type</th>
//               <th scope="col" style={{ textAlign: "center" }}>Status</th>

//               <th scope="col" style={{ textAlign: "center" ,width:"5rem"}}>
//                 Actions
//               </th>
//               <th style={{ textAlign: "center" }}>Feedback</th>
//               <th style={{ textAlign: "center" }}>View</th>

//             </tr>
//           </MDBTableHead>
//           <MDBTableBody>
//             {data.map((i) => {
             
//               return (
//                 <tr>
//                   <td>
//                     <div className=" align-items-center">
//                       {/* <img
//                 src='https://mdbootstrap.com/img/new/avatars/8.jpg'
//                 alt=''
//                 style={{ width: '45px', height: '45px' }}
//                 className='rounded-circle'
//               /> */}
//                       <div className="ms-3">
//                         <p className=" fw-bold mb-1">
//                           {i.userFName} &nbsp;&nbsp;&nbsp;&nbsp;{i.userLName}
//                         </p>
//                         <p className="text-muted mb-0">{i.email}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <p className="fw-normal mb-1">{i.body}</p>
//                     <p className="text-muted mb-0">{i.contribution_type}</p>
//                   </td>
//                   <td>
//                     {/* <p className='text-normal mb-0' style={{color:"yellow"}}>{i.status}</p> */}
//                     {/* <MDBBadge style={{padding:"0.8rem",color:"black"}} color='info' pill>
//               {i.status}
//             </MDBBadge> */}
//                     {i.status === "Approved" ? (
//                       <MDBBadge
//                         style={{ padding: "0.8rem", color: "black" }}
//                         color="success"
//                         pill
//                       >
//                         Approved
//                       </MDBBadge>
//                     ) : i.status === "Pending" ? (
//                       <MDBBadge
//                         style={{ padding: "0.8rem", color: "black" }}
//                         color="info"
//                         pill
//                       >
//                         Pending
//                       </MDBBadge>
//                     ) : (
//                       <MDBBadge
//                         style={{ padding: "0.8rem", color: "black" }}
//                         color="danger"
//                         pill
//                       >
//                         Rejected
//                       </MDBBadge>
//                     )}
//                   </td>

//                   <td style={{ justifyContent: "space-evenly",textAlign:"center"}}>
                    
//                     {/* <button
//                       className="btn btn-primary"
//                       style={{
//                         padding: "0.3rem",
//                         color: "black",
//                         marginRight: ".5rem",
//                       }}
//                       onClick={() =>
//                         chStatus(i.email, i.contribution_type, "Accept")
//                       }
//                     >
//                       Approve
//                     </button> */}

//                           {(i.status === "Approved") || (i.status === "Rejected")  ? (
//                              <img src={disabled} style={{width:"2rem", height:"2rem" }} alt="green tick"
//                             //  onClick={() =>
//                             //    chStatus(i.email, i.contribution_type, "Accept")}
//                               />
                            
                        
//                       ) : 
                      
//                        (
//                         <div>
//                           <img src={greentick} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="green tick"
//                         onClick={() =>
//                           chStatus(i.email, i.contribution_type, "Accept")
//                         } />
//                         <img src={redcross} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="redcross" onClick={() =>
//                           chStatus(i.email, i.contribution_type, "Reject")
//                         } />
                        
//                         </div>
                        
                        
                       
//                       ) }
                    
                    
//                      {/* <img src={greentick} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="green tick"
//                       onClick={() =>
//                         chStatus(i.email, i.contribution_type, "Accept")
//                       } /> */}
//                     {/* <button
//                       className="btn btn-danger"
//                       style={{
//                         padding: "0.3rem",
//                         color: "black",
//                         marginRight: ".5rem",
//                       }}
//                       onClick={() =>
//                         chStatus(i.email, i.contribution_type, "Reject")
//                       }
//                     >
//                       Reject
//                     </button> */}

// {/* {(i.status === "Approved") ||(i.status === "Rejected")  ? (
//                             <img src={disabled} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="redcross"  />
                            
                        
//                       ) : 
                      
//                      (
//                         <img src={redcross} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="redcross" onClick={() =>
//                           chStatus(i.email, i.contribution_type, "Reject")
//                         } />
                       
//                       )} */}



                    
//                     {/* <button
//                       className="btn btn-warning"
//                       style={{
//                         padding: "0.3rem",
//                         color: "black",
//                         marginRight: ".5rem",
//                       }}
//                       onClick={() =>
//                         deleteContribution(i._id,i.contribution_type)
//                       }
//                     >
//                       Delete
//                     </button> */}
//                   </td>
//                   <td style={{ justifyContent: "space-evenly",textAlign:"center" }}>
                    
//                     <Button
//                         onClick={() => {
//                           setType(i.contribution_type);
//                           setEmail(i.email);
//                           setNotes(i.notes);
//                           handleOpen();

//                         }}
//                       >
//                        Add
//                       </Button>
//                       <Modal
//                         open={open}
//                         onClose={handleClose}
//                         aria-labelledby="modal-modal-title"
//                         aria-describedby="modal-modal-description"
//                       >
//                         <Box sx={style}>
//                           <Form
//                             onSubmit={() => {
//                               addNotes(i.contribution_type, i.email);
//                             }}
//                           >
                            

//                             <Row className="mb-3">
//                               <Form.Group>
//                                 <Form.Label>Add Message / Notes</Form.Label>
//                                 <Form.Control
//                                   id="body"
//                                   as="textarea"
//                                   rows={3}
//                                   value={notes}
//                                   onChange={(event) => {
//                                     setNotes(event.target.value);
//                                   }}
//                                 />
//                               </Form.Group>
//                             </Row>

                            
//                             <div className="text-center">
//                               <Button
//                                 style={{ textAlign: "center" }}
//                                 variant="primary"
//                                 type="submit"
//                               >
//                                 Update
//                               </Button>
//                               <Button variant="secondary" style={{marginLeft:"1rem"}} onClick={handleClose}>
//             Close
//           </Button>

//                             </div>
//                           </Form>
//                         </Box>
//                       </Modal>
                      
//                   </td>
//                   <td style={{ textAlign: "center" }}>{i.notes}</td>
//                 </tr>
//               );
//             })}
//           </MDBTableBody>
//         </MDBTable>
//       </div>
//       <br></br><br></br>

//       <Footer />
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Button from "react-bootstrap/Button";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import greentick from "../Assets/greentick.png";
import redcross from "../Assets/redcross.png";
import disabled from "../Assets/disabled.png";

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
// import TextField from "@mui/material/TextField";

export default function MailData({ getAllUser }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");

  // const deleteContribution = (id,contribution_type) => {
  //   if (
  //     window.confirm(`Are you sure you want to delete ${contribution_type}`)
  //   ) {
  //     fetch("http://localhost:4000/deleteContribution", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         id,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // alert(data.data);
  //         console.log("Data is Deleted");
  //         changePoints(email);

  //       });
  //   } else {

  //   }
  // };

  const chStatus = (id, email, contribution_type, status) => {
    console.log(email + " " + contribution_type + " " + status);
    fetch("http://localhost:4000/changeStatus", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id,
        email,
        contribution_type,
        status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        changePoints(email);
        // window.location.reload(true);
      });
  };

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

  const changePoints = (email) => {
    fetch("http://localhost:4000/changePoints", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload(true);
      });
  };
  const [notes, setNotes] = useState("");
  const [id, setId] = useState("");
  const addNotes = () => {
    fetch("http://localhost:4000/updateNotes", {
      method: "POST",

      crossDomain: true,

      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",

        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        id,
        notes,
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data); //window.location.reload();
      });
  };

  return (
    <div className="login-bg" style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="home-bannerImage-container"></div>
      <h1 style={{ textAlign: "center", color: "white", marginTop: "3.5rem" }}>
        All Data fetched By Database
      </h1>

      <div className="container " style={{ textAlign: "center" }}>
        <MDBTable align="middle" style={{ color: "white", marginTop: "5rem" }}>
          <MDBTableHead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Contribution Type</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Status
              </th>

              <th scope="col" style={{ textAlign: "center", width: "5rem" }}>
                Actions
              </th>
              <th style={{ textAlign: "center" }}>Feedback</th>
              <th style={{ textAlign: "center" }}>View</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((i) => {
              return (
                <tr>
                  <td>
                    <div className=" align-items-center">
                      {/* <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              /> */}
                      <div className="ms-3">
                        <p className=" fw-bold mb-1">
                          {i.userFName} &nbsp;&nbsp;&nbsp;&nbsp;{i.userLName}
                        </p>
                        <p className="text-muted mb-0">{i.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{i.body}</p>
                    <p className="text-muted mb-0">{i.contribution_type}</p>
                  </td>
                  <td>
                    {/* <p className='text-normal mb-0' style={{color:"yellow"}}>{i.status}</p> */}
                    {/* <MDBBadge style={{padding:"0.8rem",color:"black"}} color='info' pill>
              {i.status}
            </MDBBadge> */}
                    {i.status === "Approved" ? (
                      <MDBBadge
                        style={{ padding: "0.8rem", color: "black" }}
                        color="success"
                        pill
                      >
                        Approved
                      </MDBBadge>
                    ) : i.status === "Pending" ? (
                      <MDBBadge
                        style={{ padding: "0.8rem", color: "black" }}
                        color="info"
                        pill
                      >
                        Pending
                      </MDBBadge>
                    ) : (
                      <MDBBadge
                        style={{ padding: "0.8rem", color: "black" }}
                        color="danger"
                        pill
                      >
                        Rejected
                      </MDBBadge>
                    )}
                  </td>

                  <td
                    style={{
                      justifyContent: "space-evenly",
                      textAlign: "center",
                    }}
                  >
                    {/* <button
                      className="btn btn-primary"
                      style={{
                        padding: "0.3rem",
                        color: "black",
                        marginRight: ".5rem",
                      }}
                      onClick={() =>
                        chStatus(i.email, i.contribution_type, "Accept")
                      }
                    >
                      Approve
                    </button> */}

                    {i.status === "Approved" || i.status === "Rejected" ? (
                      <img
                        src={disabled}
                        style={{ width: "2rem", height: "2rem" }}
                        alt="green tick"
                        //  onClick={() =>
                        //    chStatus(i.email, i.contribution_type, "Accept")}
                      />
                    ) : (
                      <div>
                        <img
                          src={greentick}
                          style={{
                            width: "2rem",
                            height: "2rem",
                            cursor: "pointer",
                          }}
                          alt="green tick"
                          onClick={() =>
                            chStatus(
                              i._id,
                              i.email,
                              i.contribution_type,
                              "Accept"
                            )
                          }
                        />
                        <img
                          src={redcross}
                          style={{
                            width: "2rem",
                            height: "2rem",
                            cursor: "pointer",
                          }}
                          alt="redcross"
                          onClick={() =>
                            chStatus(
                              i._id,
                              i.email,
                              i.contribution_type,
                              "Reject"
                            )
                          }
                        />
                      </div>
                    )}

                    {/* <img src={greentick} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="green tick"
                      onClick={() =>
                        chStatus(i.email, i.contribution_type, "Accept")
                      } /> */}
                    {/* <button
                      className="btn btn-danger"
                      style={{
                        padding: "0.3rem",
                        color: "black",
                        marginRight: ".5rem",
                      }}
                      onClick={() =>
                        chStatus(i.email, i.contribution_type, "Reject")
                      }
                    >
                      Reject
                    </button> */}

                    {/* {(i.status === "Approved") ||(i.status === "Rejected")  ? (
                            <img src={disabled} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="redcross"  />
                            
                        
                      ) : 
                      
                     (
                        <img src={redcross} style={{width:"2rem", height:"2rem" ,cursor:"pointer"}} alt="redcross" onClick={() =>
                          chStatus(i.email, i.contribution_type, "Reject")
                        } />
                       
                      )} */}

                    {/* <button
                      className="btn btn-warning"
                      style={{
                        padding: "0.3rem",
                        color: "black",
                        marginRight: ".5rem",
                      }}
                      onClick={() =>
                        deleteContribution(i._id,i.contribution_type)
                      }
                    >
                      Delete
                    </button> */}
                  </td>
                  <td
                    style={{
                      justifyContent: "space-evenly",
                      textAlign: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        setType(i.contribution_type);
                        setEmail(i.email);
                        setId(i._id);
                        setNotes(i.notes);
                        handleOpen();
                      }}
                    >
                      Add
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Form
                          onSubmit={() => {
                            addNotes();
                          }}
                        >
                          <Row className="mb-3">
                            <Form.Group>
                              <Form.Label>Add Message / Notes</Form.Label>
                              <Form.Control
                                id="body"
                                as="textarea"
                                rows={3}
                                value={notes}
                                onChange={(event) => {
                                  setNotes(event.target.value);
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
                            <Button
                              variant="secondary"
                              style={{ marginLeft: "1rem" }}
                              onClick={handleClose}
                            >
                              Close
                            </Button>
                          </div>
                        </Form>
                      </Box>
                    </Modal>
                  </td>
                  <td style={{ textAlign: "center" }}>{i.notes}</td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}
