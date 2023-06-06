import React from "react";
import { Link } from "react-router-dom";
import { AiFillFileExclamation } from "react-icons/ai";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Components.css";

function Dashboard() {
  return (
    <div >
      <div className="container" style={{width:"2000%"}}>
        <div class="row" style={{marginLeft:"25%",marginTop:"3%",marginBottom:"3%"}}>
          <div class="col-md-3" style={{marginRight:"10%"}}>
            <div className="card">
              <div className="card-body">
                <h3>Error Log File</h3>
                <AiFillFileExclamation style={{ fontSize: "100px" }} />
                <div className="linkclass">
                  <Link to="ErrorLog">
                    <a href="">More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3>Services</h3>
                <MdOutlineMiscellaneousServices style={{ fontSize: "100px" }} />
                <div className="linkclass">
                  <Link to="Services">
                    <a href="">More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row " style={{marginLeft:"25%"}}>
          <div class="col-md-3" style={{marginRight:"10%"}}>
            <div className="card">
              <div className="card-body">
                <h3>ReportHosting</h3>
                <TbDeviceDesktopAnalytics style={{ fontSize: "100px" }} />
                <div className="linkclass">
                  <Link to="ReportHosting">
                    <a href="">More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3>Alert</h3>
                <NotificationsNoneIcon sx={{ fontSize: 100 }} />
                <div className="linkclass">
                  <Link to="Alert">
                    <a href="">More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;