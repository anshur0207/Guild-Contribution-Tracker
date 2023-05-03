// import React from "react";

// import Footer from "./Footer";
// import Navbar from "./Navbar";
// export default function AdminHome() {
//   return (
//     <div>
//       <Navbar />

//         <h3 style={{textAlign:"center"}}>Welcom Admin</h3>
        
//         <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
  
//       <Footer />
//     </div>
    
//   );

//   }

import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import Footer from "./Footer";
const Title = () => <h1 className="Title text-center " style={{marginTop:'50px', marginBottom:'-20px'}}>Profile Page</h1>;
export default function UserHome({ userData }) {

  return (
    <div>
        <Navbar />
       
        <div className="home-bannerImage-container">
      <img src={BannerBackground} alt="" />
       </div>


    
        {/* <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          
        </div> */}
        <div><h1 style={{textAlign:"center"}}>Welcome Admin</h1></div>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br>
       
     
      <Footer />
      </div>
    
  );
}

  
