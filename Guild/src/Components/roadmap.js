import React, { Component } from 'react'
import RoadMap from "../Assets/roadmap.png"

export default class roadmap extends Component {
  render() {
    return (
        <div className="home-container " style={{marginTop:"15rem"}}>
        
        <div className="home-bannerImage-container">
          
        </div>
        <div className="home-banner-container" style={{textAlign:"center"}}>
          <div className="home-text-section" >
           
           <img src={RoadMap}  alt='roadmap' style={{height:"50rem", width:"80%", marginLeft:"10rem"}}/>


          
            
           
            
          </div>
          
         
        </div>
        </div>
    )
  }
}
