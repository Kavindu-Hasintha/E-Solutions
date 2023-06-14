import React, { useState } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./ClientDetails.css";
import logo from "../Images/logo192.png";
import profilephoto from "../Images/65342 png.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ApiPath } from "../API/ApiPath";
import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack, TextField, Button } from "@mui/material";

const ClientBox = ({
  client_id,
  first_name,
  last_name,
  designation,
  email,
  mobile_no,
  removeEnable,
  client_photo_link,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [popup, setPopup] = useState(false);
  const [partnerId, setPartnerId] = useState(-1);
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);

  const viewDashboard = () => {
    navigate(client_id + "/console/");
  };

  const getPartners = () => {
    axios
      .get(ApiPath.API_URL + "Profile/GetAllPartners")
      .then((res) => {
        setPartners(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const boxopen = () => {
    setPopup(true);
    getPartners();
  };

  const handleSave = () => {
    setPopup(false);
    axios
      .put(
        ApiPath.API_URL +
          "ClientDetail/UpdateCliPartner?cId=" +
          client_id +
          "&pId=" +
          partnerId
      )
      .then((res) => {
        if (res.data === 1) {
          navigate(-1);
          navigate(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setPopup(false);
  };

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
            src={client_photo_link}
            alt="Photo"
            width="50px"
            height="50px"
          ></img>
          <b className="Client">Client Profile Details</b>
        </div>
        <br />
        <div className="Content">
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {first_name} {last_name}
          <br />
          Designation <span></span> : {designation}
          <br />
          Email
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {email}
          <br />
          Tel.No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {mobile_no}
          <br />
          More details :{" "}
          <NavLink to={"clientmoredetails/" + client_id}>
            <a style={{ color: "black", textDecoration: "none" }}>
              More Details
            </a>
          </NavLink>
        </div>
      </div>
      <div className="Bottom">
        <button href="#" className="ViewButton" onClick={viewDashboard}>
          View Dashbord
        </button>
      </div>
      {removeEnable ? (
        <div>
          <button className="removeButton" onClick={boxopen}>
            Remove
          </button>
        </div>
      ) : (
        ""
      )}
      <Dialog open={popup} className="task-add-dialog">
        <div style={{ backgroundColor: "#1ab394" }}>
          <DialogTitle>Select a Partner</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <select
                id="partner"
                name="partner"
                value={partnerId}
                onChange={(e) => setPartnerId(e.target.value)}
                style={{ width: "100%", height: "100%" }}
                className="inputtags"
              >
                <option value="-1">Partner</option>
                {partners.map((partner) => (
                  <option key={partner.pro_id} value={partner.pro_id}>
                    {partner.pro_first_name} {partner.pro_last_name}
                  </option>
                ))}
              </select>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleSave}
              style={{ color: "#fff", border: "1px solid #fff" }}
            >
              Save
            </Button>
            <Button
              onClick={handleClose}
              style={{ color: "#fff", border: "1px solid #fff" }}
            >
              Cancel
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default ClientBox;
