import React,{Component} from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import Footer from "./Footer";
const Title = () => <h1 className="Title text-center " style={{marginTop:'50px', marginBottom:'-20px'}}>Profile Page</h1>;


export default class UserDetails extends Component{
  logout=()=>{
    window.localStorage.clear();
    window.location.href="./sign-in";
  };

  constructor(props){
    super(props);
    this.state={
      userData:"",
    };
  }
    componentDidMount(){
        fetch("http://localhost:4000/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userData");
      this.setState({userData: data.data});
      if(data.data=="token expired"){
        alert("Time excedded , Login Again");
        window.localStorage.clear();
    window.location.href="./sign-in";
        
      }
    });
    
  }
  
    
    render(){
        return(
            <div>
              
              <Navbar />
              <Title />
             
              <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
              <div className="auth-wrapper">
        
        <div className="auth-inner">
               First Name<h1>{this.state.userData.fname}</h1>
               Last Name<h1>{this.state.userData.lname}</h1>
               Email<h1>{this.state.userData.email}</h1>
               <br />
               
            </div>
            </div>
            <Footer />
            </div>
            
        );
            

        }
       
    }
