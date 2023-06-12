import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./ClientDetails.css";
import { NavLink } from "react-router-dom";
const AdminBox = ({ first_name, last_name, email, mobile_no,profile_photo,designation}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="Box">
      <div className="Upper">
        <p className="Heads">
          <div className="Head">
            <b className="head1">{designation}</b>
            <br />
            <b className="head2">hSenid Business</b>
          </div>
          <div className="Notify">
          <NavLink to={"notifications"}>
              <button className="notification">
                <span>Notifications</span>
                <span class="badge">2</span>
              </button>
            </NavLink>
          </div>
        </p>
      </div>
      <div className="Middle">
        <div>
          <img
            className="IMG"
            src={profile_photo}
            alt="Photo"
            width="50px"
            height="50px"
          ></img>
          <b className="Client">Admin Profile Details</b>
        </div>
        <br />
        {/* <div className="Content">
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {first_name} {last_name}
          <br />
          Designation <span></span> : Admin
          <br />
          Email
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {email}
          <br />
          Tel.No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {mobile_no}
          <br />
          More details :{" "}
          <NavLink to={"adminmoredetails"}>
              <a style={{color:"black",textDecoration:"none"}}>
                More Details
              </a>
            </NavLink>
        </div> */}
        <table className="Content">
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{first_name} {last_name}</td>
          </tr>
          <tr>
            <td>Designation</td>
            <td>:</td>
            <td>{designation}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Tel.No.</td>
            <td>:</td>
            <td>{mobile_no}</td>
          </tr>
          <tr>
            <td>More Details</td>
            <td>:</td>
            <td><NavLink to={"partnermoredetails"}>
              <a style={{color:"black",textDecoration:"none"}}>
                More Details
              </a>
            </NavLink></td>
          </tr>
        </table>
      </div>
      <div className="Bottom">
        <NavLink to={"admindashboard"}>
        <button href="#" className="ViewButton">
          View Dashbord
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminBox;
