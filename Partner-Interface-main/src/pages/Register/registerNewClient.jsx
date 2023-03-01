import React from "react";
import "./registerNewClient.css";

const RegisterNewClient = () => {
  return (
    <div>
      <h1 style={{ color: "Black", textAlign: "center" }}>
        Register New Client
      </h1>
      <div>
        <table style={{alignContent:"center", margin:"0px auto", marginTop:"5%", fontSize:"24px"}}>
          <tr style={{marginBottom:"20px",marginBottom:"200px"}}>
            <td style={{marginRight:"20px"}}>
              <input placeholder="First Name" className="inputtags"/>
            </td>
            <td/>
            <td>
              <input placeholder="Last Name" className="inputtags"/>
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
              <input placeholder="NIC" className="inputtags"/>
            </td>
            <td/>
            <td>
              <input placeholder="Designation" className="inputtags"/>
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
              <input placeholder="Mobile No" className="inputtags"/>
            </td>
            <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
              <input placeholder="Server Name" className="inputtags"/>
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
              <input placeholder="Email" className="inputtags"/>
            </td>
            <td/>
            <td>
              <select placeholder="Assign to Partner" style={{width:"285px", height:"40px"}} className="inputtags">
                <option value="None">None</option>
                <option value="Pravindu Bhashitha">Pravindu Bhashitha</option>
                <option value="Tharindu Ruwanpathirana">
                  Tharindu Ruwanpathirana
                </option>
              </select>
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td colSpan={3}><button style={{width:"100%"}} className="registerbutton">Register</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RegisterNewClient;
