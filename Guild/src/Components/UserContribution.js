import React ,{ useEffect, useState } from "react";
import Navbar from "./Navbar";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




import Footer from "./Footer";




export default function UserContribution({getAllData}){


    const chStatus = (email,contribution_type,status) =>{
      console.log(email+" "+contribution_type+" "+status);
        fetch("http://localhost:4000/changeStatus", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,contribution_type,status
        }),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.location.reload(true);
        });

       

    }

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

    const [data,setData] = useState([]);

   useEffect(() => {
    fetch("http://localhost:4000/getAllData",{
        method:"GET",
    })

    .then((res) => res.json())
    .then((data)=>{
        console.log(data,"getAllData");
        setData(data.data);
    });
    
   },[]);
  


      
    
    return (
        <div className='login-bg' style={{backgroundColor:"black"}}>
        <Navbar />
        <div className="home-bannerImage-container" >
          

        </div>
        <h1 style={{textAlign:"center",color:"white",marginTop:"3.5rem"}}>Your Contributions &nbsp;{userData.fname}</h1>
        <div className="container ">
        <MDBTable align='middle' style={{color:"white",marginTop:"5rem"}}>
      <MDBTableHead>
        <tr>
          <th scope='col'>EMAIL</th>
          <th scope='col'>CONTRIBUTION TYPE</th>
          <th scope='col'>STATUS</th>
         
          {/* <th scope='col' style={{textAlign:"center"}}>Actions</th> */}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map(i =>{

            if(userData.email===i.email){
                return (
              
                    <tr>
                        
              <td>
                <div className='d-flex align-items-center'>
                  {/* <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  /> */}
                  <div className='ms-3'>
                  <p className=' fw-bold mb-1'>{i.userFName} &nbsp;&nbsp;&nbsp;&nbsp;{i.userLName}</p>
                    <p className='text-muted mb-0'>{i.email}</p>
                   
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{i.body}</p>
                <p className='text-muted mb-0'>{i.contribution_type}</p>
              </td>
              <td>
              {/* <p className='text-normal mb-0' style={{color:"yellow"}}>{i.status}</p> */}


                <MDBBadge style={{padding:"0.8rem",color:"black"}} color='info' pill>
                  {i.status}
                </MDBBadge>
              </td>
              
              <td style={{justifyContent:"space-evenly"}}>
              {/* <MDBBadge style={{padding:"0.8rem",color:"black", marginRight:".5rem" }} color='success' pill onClick={chStatus(i.email,i.contribution_type,i.status) }>
                 Accept
                </MDBBadge>
                <MDBBadge style={{padding:"0.8rem",color:"black",marginRight:"-2.2rem"}} color='danger' pill>
                 Reject
                </MDBBadge> */}
                {/* <button className="btn btn-primary"  onClick={() => chStatus(i.email,i.contribution_type,"Approve")}>
                 Accept
                </button>
                <button className="btn btn-danger"  onClick={() => chStatus(i.email,i.contribution_type,"Reject")}>
                 Reject
                </button> */}

              </td>
            </tr>
    
    
                )
                
            }
           
  
        })}
        
       
      </MDBTableBody>
    </MDBTable>

        </div>
        
        
        

       

        
 <br /><br></br>
 <br></br> <br /><br></br>
 <br></br> <br></br>
 <Footer />
        </div>
        
       
        

    )
    
        
    


};

