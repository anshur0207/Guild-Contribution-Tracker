import React ,{ useEffect, useState } from "react";
import Navbar from "./Navbar";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';



import Footer from "./Footer";




export default function UserData({getAllUser}){

    const [data,setData] = useState([]);

   useEffect(() => {
    fetch("http://localhost:4000/getAllUsers",{
        method:"GET",
    })

    .then((res) => res.json())
    .then((data)=>{
        console.log(data,"userData");
        setData(data.data);
    });
   },[]
   );


   const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:4000/deleteUsers", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload(true);
          
        });
    } else {
    }
  };

      
    
    return (
        <div className='login-bg' style={{backgroundColor:"black"}}>
        <Navbar />
        <div className="home-bannerImage-container" >
          

        </div>
        <h1 style={{textAlign:"center",color:"white",marginTop:"3.5rem"}}>All Data fetched By Database</h1>
        <div className="container " style={{textAlign:"center"}}>
        <MDBTable align='middle' style={{color:"white",marginTop:"5rem"}}>
      <MDBTableHead>
        <tr>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Email</th>
         <th scope="col">User Type</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map(i =>{
            return (
                <tr>
          <td>
            <div className='align-items-center'>
              {/* <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              /> */}
              <div className='ms-3' >
                {i.fname}
                
              </div>
            </div>
          </td>
          <td>
            
          <p className='text-normal mb-0'>{i.lname}</p>
          </td>
          <td><p className='fw-normal mb-1'>{i.email}</p></td>
          
          <td>
          <p className='text-normal mb-0'>{i.userType}</p>
          </td>
          
          <td>
          <Button className="dashboard-btn"  onClick={() => deleteUser(i._id, i.fname)}>
             Delete
            </Button>
          </td>
        </tr>


            )
        })}
        
       
      </MDBTableBody>
    </MDBTable>

        </div>
        
        
        

       

        
 
 <Footer />
        </div>
        
       
        

    )
    
        
    


};


