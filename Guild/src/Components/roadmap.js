import React, { Component } from 'react';
import Approve from "../Assets/approve.png";
import Reward from "../Assets/reward.png"
import Submit from "../Assets/submit.png"


export default class roadmap extends Component {
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
                  <div className="step-icon"><span><img src={Submit} alt='submit'></img></span>
                  </div>
                  <div className="step-num">01</div>
                </div>
                <div className="step-desc" style={{color:"white"}}>
                  <h4>Click Contribute</h4>
                  <p className="mb-0">Just Click on Contribute button Then Mention the Contribution Type and write the body of your Contribution and Finally select Plain Text Mode before Sending.</p>
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
                  <div className="step-icon"><span><img src={Approve} alt='approve' style={{height:"5rem"}}/></span>
                  </div>
                  <div className="step-num">02</div>
                </div>
                <div className="step-desc "style={{color:"white"}}>
                  <h4>Wait For Approval</h4>
                  <p className="mb-0">Now Just wait for the Approval of Contribution from the Manager or Admin.If it is Accepted/Rejected you will notified by an Email.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 md-mt-5">
              <div className="work-process">
                <div className="step-num-box">
                  <div className="step-icon"><span><img src={Reward} alt="reward icon" style={{height:"5rem"}}/></span>
                  </div>
                  <div className="step-num">03</div>
                </div>
                <div className="step-desc" style={{color:"white"}}>
                  <h4>Get Reward Points</h4>
                  <p className="mb-0">After Approval you get &nbsp;Rewards Points.</p>
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

