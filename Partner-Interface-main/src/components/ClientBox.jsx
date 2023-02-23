import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./ClientDetails.css";
import logo from "../Images/logo192.png";

const ClientBox = ({
  first_name,
  last_name,
  designation,
  email,
  mobile_no
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="Box">
      <div className="Upper">
        <p className="Heads">
          <div className="Head">
            <b className="head1">General Manager</b>
            <br />
            <b className="head2">hSenid Business</b>
          </div>
          <div className="Notify">
            <a href="#" className="notification">
              <span>Notify</span>
              <span class="badge">3</span>
            </a>
          </div>
        </p>
      </div>
      <div className="Middle">
        <div>
          <img
            className="IMG"
            src={logo}
            alt="Photo"
            width="30"
            height="30"
          ></img>
          <b className="Client">Client Profile Details</b>
        </div>
        <br />
        <div className="Content">
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {first_name} {last_name}
          <br />
          Designation <span></span> : {designation}
          <br />
          Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {email}
          <br />
          Tel.No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {mobile_no}
          <br />
          More details : <a href="https://www.w3schools.com/">View Client</a>
        </div>
      </div>
      <div className="Bottom">
        <button href="#" className="ViewButton">View Dashbord</button>
      </div>
    </div>
  );
};

export default ClientBox;
