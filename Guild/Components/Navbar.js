/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import Logo from "../Assets/logo-final.png";

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


import { Link } from "react-router-dom";







const logout=()=>{
  localStorage.removeItem('token')
localStorage.removeItem('loggedIn')
  window.location.href="/";
};




const isLoggedIn=window.localStorage.getItem("loggedIn");

const Navbar = () => {
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

      
    });
}, []);



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
   },[]);

  

// const total_points = data.map((i)=> {
//   if(i.email === userData.email){
//     var total_points=i.points;
    
//   }
// })
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    
  ];

if(isLoggedIn ){
  if(userData.userType==="Admin"){
    return (
    
      <nav>
          <div className="nav-logo-container">
            <img src={Logo} style={{height:"50px", marginLeft:"2rem"}} alt="" />
          </div>
          <div className="navbar-links-container" style={{zIndex:1}}>
          <Link to ='/'>Home</Link>
         
          <Link to ='/Dashboard'>Dashboard</Link>
    
            <Link to='/userdetails'>Profile</Link>
            
            
            <button onClick={logout} className="btn btn-light" style={{marginRight:"1rem"}}>Logout</button>
            
            
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </nav>
      )}
      else{
        
        return (
    
          <nav>
              <div className="nav-logo-container">
                <img src={Logo} style={{height:"50px", marginLeft:"2rem"}} alt="" />
              </div>
              <div className="navbar-links-container" style={{zIndex:1}}>
              <Link to ='/'>Home</Link>
             
              <Link to ='/Dashboard'>Dashboard</Link>
        
                <Link to='/userdetails'>Profile</Link>
                
                

                
                {data.map(i =>{

if(userData.email===i.email){
    return (

      <Link >{i.points} &nbsp; Points</Link>
                


    )}
    }
                )}
                <button onClick={logout} className="btn btn-light" style={{marginRight:"1rem"}}>Logout</button>
                
                
              </div>
              <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
              </div>
              <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={() => setOpenMenu(false)}
                  onKeyDown={() => setOpenMenu(false)}
                >
                  <List>
                    {menuOptions.map((item) => (
                      <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                </Box>
              </Drawer>
            </nav>
          )}
      }
    
  

  
  
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} style={{height:'50px',marginLeft:'2rem'}} alt="" />
      </div>
      <div className="navbar-links-container"style={{zIndex:1}}>
      <Link to ='/'>Home</Link>
      
      <a href="#">AboutUs</a>
        
        
        {/* <a target="_blank"><Link to ='/sign-up'>New user</Link></a> */}
        <Link to ='/sign-in'> <button className="primary-button">Login</button></Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};
  
  




  

export default Navbar;
