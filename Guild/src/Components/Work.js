import React from "react";
import Priya from "../Assets/priya.png";
import harshal from "../Assets/boy.png";
import anshu from "../Assets/boy2.png";
import aditya from "../Assets/boy1.png";
import jit from "../Assets/boy3.png";

const Work = () => {
  const workInfoData = [
    {
      image: harshal,
      title: "Harshal",
      text: "",
    },

    {
      image: anshu,
      title: "Anshu",
      text: "",
    },
    {
      image: Priya,
      title: "Priya",
      text: "",
    },
    {
      image: aditya,
      title: "Aditya",
      text: "",
    },
    {
      image: jit,
      title: "jit",
      text: "",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Developers</p>
        <h3 className="primary-heading">
          How It Works- Because we worked 24/7
        </h3>
        <p className="primary-text">We worked very Hard for this.</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} style={{ height: "30vh" }} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
