import React, { useEffect } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./ClientDetails.css";
import logo from "../Images/logo192.png";
import profilephoto from "../Images/65342 png.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import { ApiPath } from "../API/ApiPath";

const PartnerBox = ({
  pro_id,
  first_name,
  last_name,
  email,
  mobile_no,
  photo_link,
  removeEnable,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [popup, setPopup] = useState(false);
  const [supervisorId, setSupervisorId] = useState(-1);
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  const getAdmins = () => {
    axios
      .get(ApiPath.API_URL + "Profile/GetAllAdmins")
      .then((res) => {
        setAdmins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("Linke " + photo_link);
  }, []);

  const boxopen = () => {
    setPopup(true);
    getAdmins();
  };

  const handleSave = () => {
    setPopup(false);
    axios
      .put(
        ApiPath.API_URL +
          "Supervisor/UpdateAdmin?pId=" +
          pro_id +
          "&sId=" +
          supervisorId
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
            <b className="head1">Partner in</b>
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
            src={photo_link}
            alt="Photo"
            width="50px"
            height="50px"
          ></img>
          <b className="Client">Partner Profile</b>
        </div>
        <br />
        {/* <div className="Content">
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {first_name} {last_name}
          <br />
          Designation <span></span> : Partner in
          <br />
          Email
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          {email}
          <br />
          Tel.No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {mobile_no}
          <br />
          More details :{" "}
          <NavLink to={"partnermoredetails/" + pro_id}>
            <a style={{ color: "black", textDecoration: "none" }}>
              More Details
            </a>
          </NavLink>
        </div> */}
        <table className="Content">
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>
              {first_name} {last_name}
            </td>
          </tr>
          <tr>
            <td>Designation</td>
            <td>:</td>
            <td>Partner</td>
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
            <td>
              <NavLink to={"partnermoredetails/" + pro_id}>
                <a style={{ color: "black", textDecoration: "none" }}>
                  More Details
                </a>
              </NavLink>
            </td>
          </tr>
        </table>
      </div>
      <div className="Bottom">
        <button href="#" className="ViewButton">
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
          <DialogTitle>Select an Admin</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <select
                id="supervisor"
                name="supervisor"
                value={supervisorId}
                onChange={(e) => setSupervisorId(e.target.value)}
                style={{ width: "100%", height: "100%" }}
                className="inputtags"
              >
                <option value="-1">Supervisor</option>
                {admins.map((admin) => (
                  <option key={admin.pro_id} value={admin.pro_id}>
                    {admin.pro_first_name} {admin.pro_last_name}
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

export default PartnerBox;
