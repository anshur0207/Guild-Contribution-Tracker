import React,{useState} from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";

import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';


function ContributePage(){

    const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");


   const  handleSubmit = () =>{
    fetch("http://localhost:4000/submitContribution", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          contribution_type:type,
          body
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          
          alert("Contribution is Submitted");
          window.location.reload(true);
          //getAllUser();
        });
    }
    // var transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //       user: "contributions123@gmail.com",
    //       pass: "hnlywmfafqejjbqi",
    //     },
    //   });
  
    //   var mailOptions = {
    //     from: email ,
    //     to: "contributions123@gmail.com",
    //     subject: "Contribution",
    //     html: "contribution_type: " +type + "\n"+ body,
    //   };
  
    //   transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log("Email sent: " + info.response);
    //     }
    //   });
    //   console.log("Email Send");
    // } 
  





    return (

        <div className="home-container">
      <Navbar/>
      <br></br>
         <div className="container" style={{color:"black",background:"white",padding:"2rem"}} >
         <form>
            <label >Email</label>
      <MDBInput id='form4Example1' name="email" wrapperClass='mb-4' onChange={(event) => {
                                    setEmail(event.target.value);
                                  }}></MDBInput> 
      <label>Contribution Type</label>
      <MDBInput type='text' id='form4Example2' onChange={(event) => {
                                    setType(event.target.value);
                                  }} name="contribution_type" wrapperClass='mb-4'  />
      <label>Body</label>
      <MDBInput wrapperClass='mb-4' onChange={(event) => {
                                    setBody(event.target.value);
                                  }} name="body" textarea id='form4Example3' rows={4}  />

      {/* <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      /> */}

    <div style={{textAlign:"center"}}>
    <MDBBtn type='submit' onClick={handleSubmit} className='mb-4'  block>
        Submit Contribution
      </MDBBtn>
    </div>
     
    </form>
         </div>
        
         <Footer />
         </div>
       

    )

};


export default ContributePage;



