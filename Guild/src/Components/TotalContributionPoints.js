import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Select from "react-select";
import { textAlign } from "@mui/system";
const moment = require("moment-fquarter");

function TotalContributionPoints() {
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

        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/getAllData", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "getAllData");
        setData(data.data);
      });
  }, []);
  const d1 = new Date();
  let curr_year = d1.getFullYear();

  const options1 = [
    { value: curr_year, label: curr_year },
    { value: curr_year - 1, label: curr_year - 1 },
    { value: curr_year - 2, label: curr_year - 2 },
    { value: curr_year - 3, label: curr_year - 3 },
    { value: curr_year - 4, label: curr_year - 4 },
  ];
  const options2 = [
    { value: "Q1", label: "Q1" },
    { value: "Q2", label: "Q2" },
    { value: "Q3", label: "Q3" },
    { value: "Q4", label: "Q4" },
  ];
  const [year, setYear] = useState(options1[0].value);
  const [quater, setQuater] = useState(options2[0].value);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    console.log(quater + " " + year);
    fetch("http://localhost:4000/quaterDetails", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        year,
        quater,
        email: userData.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotal(data.data);
      });
  };

  return (
    <div className="login-bg" style={{ backgroundColor: "black" }}>
      <Navbar />

      <br />
      <div className="card-container">
        <div className="card-0 d-flex">
          <div style={{ marginLeft: "3.5rem" }}>
            <Select
              options={options1}
              defaultValue={options1[0]}
              onChange={(e) => {
                setYear(e.value);
              }}
            />
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <Select
              options={options2}
              defaultValue={options2[0]}
              onChange={(e) => {
                setQuater(e.value);
              }}
            />
          </div>
          <button
            className="btn-primary btn"
            style={{
              width: "6.5rem",
              borderRadius: "0.3rem",
              backgroundColor: "#0d6ef",
              color: "white",
              marginLeft: "21.5rem",
              // marginRight: "-9rem",
            }}
            onClick={handleClick}
          >
            Find Points
          </button>
          <Card
            style={{
              width: "5rem",
              marginLeft: "2rem",
              textAlign: "center",
              paddingTop: "0.4rem",
            }}
          >
            {" "}
            {total}
          </Card>
        </div>
      </div>

      <div className="main-card">
        <div className="card-1">
          <Card style={{ width: "18rem", height: "12rem" }}>
            <Card.Body>
              <Carousel interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448294248871-4MTPBZQEE8B5XITD0ZOZ/image-asset.png"
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                  <Card.Text>q1: {userData.q1}</Card.Text>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448306925282-BJOPIR761AOTZCQCB5PY/image-asset.png"
                    alt="Second slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                  <Card.Text>q2: {userData.q2}</Card.Text>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448307491075-AUGS0DFI0OACM1JI34S7/image-asset.jpeg"
                    alt="Third slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                  <Card.Text>q3: {userData.q3}</Card.Text>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/5409fb84e4b024050575d55a/1448307843429-NBBINO7KRPDHPUHOLMY3/image-asset.png"
                    alt="Third slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                  <Card.Text>q4: {userData.q4}</Card.Text>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </div>
        <div className="card-1">
          <Card style={{ width: "18rem", height: "12rem" }}>
            <Card.Body>
              {/* <img
          className="d-block w-200"
          src="https://definition.zone/wp-content/uploads/2022/04/Current-Year.png"
          alt="slide-1"
        /> */}
              <Card.Text style={{ marginTop: "2rem" }}>
                Current Year: {userData.curr_yr_points}
                <br></br>
                Previous Year: {userData.prev_yr_points}
                <br />
                <br />
                {userData.points} -Points
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Points Summary: {userData.points}{" "}
      </h1>
      <div className="container">
        <Table striped>
          <thead style={{ color: "white" }}>
            <tr style={{ textAlign: "center" }}>
              <th>Contribution Type</th>
              <th>Points Credited</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => {
              if (userData.email === i.email) {
                return (
                  <tr>
                    <td style={{ color: "white", textAlign: "center" }}>
                      {i.contribution_type}
                    </td>
                    <td>
                      {i.status === "Approved" ? (
                        <h5 style={{ color: "white", textAlign: "center" }}>
                          {i.community_points}
                        </h5>
                      ) : i.status === "Rejected" ? (
                        <h5 style={{ color: "white", textAlign: "center" }}>
                          Rejected
                        </h5>
                      ) : (
                        <h5 style={{ color: "white", textAlign: "center" }}>
                          Pending
                        </h5>
                      )}
                    </td>
                    <td style={{ color: "white", textAlign: "center" }}>
                      {i.date}
                    </td>
                    {/* <td style={{color:"white",textAlign:"center"}}>Quarter = {moment(i.date).quarter(4)}</td> */}
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default TotalContributionPoints;
