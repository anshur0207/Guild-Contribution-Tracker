// import React, { Component } from 'react'
// import RoadMap from "../Assets/roadmaphome.png"

// export default class roadmap2 extends Component {
//   render() {
//     return (
//         <div className="home-container " style={{marginTop:"15rem"}}>
        
//         <div className="home-bannerImage-container">
          
//         </div>
//         <div className="home-banner-container" style={{textAlign:"center"}}>
//           <div className="home-text-section" >
           
//            <img src={RoadMap}  alt='roadmap' style={{height:"50rem", width:"80%", marginLeft:"10rem"}}/>


          
            
           
            
//           </div>
          
         
//         </div>
//         </div>
//     )
//   }
// }

import React, { Component } from 'react';

import Register from "../Assets/register.png";
import Reward from "../Assets/reward.png"
import Submit from "../Assets/submit.png"


export default class roadmap2 extends Component {
  render() {
    return (
        // <div className="home-container " style={{marginTop:"15rem"}}>
        
        // <div className="home-bannerImage-container">
          
        // </div>
        // <div className="home-banner-container" style={{textAlign:"center"}}>
        //   <div className="home-text-section" >
           
        //    <img src={RoadMap}  alt='roadmap' style={{height:"50rem", width:"80%", marginLeft:"10rem"}}/>


          
            
           
            
        //   </div>
          
         
        // </div>
        // </div>
		<div>
			<section className="text-center pos-r">
        <div className="container">
          <div className="row" style={{marginTop:"10rem"}}>
            <div className="col-lg-12 col-md-10 ml-auto mr-auto">
              <div className="section-title">
                
                <h1 style={{color:" rgb(142, 17, 166)",textAlign:"center",fontSize:"5rem"}}>How It Works</h1>
                <h2 className="title">Three Simple Steps To Start Contribution</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div id="svg-container">
              <svg id="svgC" width="100%" height="100%" viewBox="0 0 620 120" preserveAspectRatio="xMidYMid meet">
                <desc>Created with Snap</desc>
                
              </svg>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="work-process">
                <div className="box-loader"> <span />
                  <span />
                  <span />
                </div>
                <div className="step-num-box">
                  <div className="step-icon"><span><img src={Register} alt='registericon'></img></span>
                  </div>
                  <div className="step-num">01</div>
                </div>
                <div className="step-desc" style={{color:"white"}}>
                  <h4>Register/Login</h4>
                  <p className="mb-0">Register or Login to our website to submit Contribution and get rewards.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 md-mt-5">
              <div className="work-process">
                <div className="box-loader"> <span />
                  <span />
                  <span />
                </div>
                <div className="step-num-box">
                  <div className="step-icon"><span><img src={Submit} alt='submit icon' style={{height:"5rem"}}/></span>
                  </div>
                  <div className="step-num">02</div>
                </div>
                <div className="step-desc "style={{color:"white"}}>
                  <h4>Contribute</h4>
                  <p className="mb-0">Just Click on Contribute button Then Mention the Contribution Type then write the body of your Contribution and just Send.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 md-mt-5">
              <div className="work-process">
                <div className="step-num-box">
                  <div className="step-icon"><span><img src={Reward} alt='reward icon' style={{height:"5rem"}}/></span>
                  </div>
                  <div className="step-num">03</div>
                </div>
                <div className="step-desc" style={{color:"white"}}>
                  <h4>Get Reward Points</h4>
                  <p className="mb-0">Hurray you get *** Rewards Points in your Wallet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
		</div>
    )
  }
}

