import React ,{ useEffect, useState } from "react";
import Navbar from "./Navbar";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



import Footer from "./Footer";


export default function MailData({getAllData}){

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
    
   }
   );
  


      
    
    return (
        <div className='login-bg' style={{backgroundColor:"black"}}>
        <Navbar />
        <div className="home-bannerImage-container" >
          

        </div>
        <h1 style={{textAlign:"center",color:"white",marginTop:"3.5rem"}}>All Data fetched By Database</h1>
        <div className="container ">
        <MDBTable align='middle' style={{color:"white",marginTop:"5rem"}}>
      <MDBTableHead>
        <tr>
          <th scope='col'>EMAIL</th>
          <th scope='col'>CONTRIBUTION TYPE</th>
          <th scope='col'>STATUS</th>
         
          <th scope='col' style={{textAlign:"center"}}>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map(i =>{
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
          <MDBBadge style={{padding:"0.8rem",color:"black", marginRight:".5rem" }} color='success' pill>
             Accept
            </MDBBadge>
            <MDBBadge style={{padding:"0.8rem",color:"black",marginRight:"-2.2rem"}} color='danger' pill>
             Reject
            </MDBBadge>
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


