import React,{Component} from "react";
const Title = () => <h1 className="Title text-center">Profile Page</h1>;

export default class userDetails extends Component{

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
  logout=()=>{
    window.localStorage.clear();
    window.location.href="./sign-in";
  };
    
    render(){
        return(
            <div>
              <Title />
              <hr></hr>
               First Name<h1>{this.state.userData.fname}</h1>
               Last Name<h1>{this.state.userData.lname}</h1>
               Email<h1>{this.state.userData.email}</h1>
               <br />
               <button onClick={this.logout} className="btn btn-primary">Log Out</button>
            </div>
            
        );
            

        }
       
    }
