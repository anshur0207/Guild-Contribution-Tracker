import React, {useEffect, useState } from "react";

import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";


export default function Dashboard() {
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
        //   window.location.href("/Admindashboard");
        }

        setUserData(data.data);

        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);
return admin ? <AdminDashboard /> : <UserDashboard />;
// return (
//     admin ? <div>this is admin Dashboard .....</div> : <div>This is user Dashboard.....</div>
// )
}