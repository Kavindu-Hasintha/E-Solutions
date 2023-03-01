import React from "react";
import "./registerNewClient.css";

const ClientProfileManagment = () => {
  return (
    <div>
      <h1 style={{ color: "Black", textAlign: "center" }}>
        Client Profile Management
      </h1>
      <div>
        <table style={{alignContent:"center", margin:"0px auto", marginTop:"5%", fontSize:"24px"}}>
          <tr style={{marginBottom:"20px",marginBottom:"200px"}}>
            <td style={{marginRight:"20px"}}>
              <input placeholder="First Name" />
            </td>
            <td/>
            <td>
              <input placeholder="Last Name" />
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
              <input placeholder="NIC" />
            </td>
            <td/>
            <td>
              <input placeholder="Designation" />
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
              <input placeholder="Mobile No" />
            </td>
            <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
              <input placeholder="Server Name" />
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
              <input placeholder="Email" />
            </td>
            <td/>
            <td>
              <select placeholder="Assign to Partner" style={{width:"285px", height:"40px"}}>
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
            <td>
            <button className="editbutton">Edit</button>
            <button className="savebutton">Save</button>
            </td>
            <td></td>
            <button className="disablebutton">Disable</button>
          </tr>
        </table>
        {/* <div className="buttons">
            <button className="editbutton">Edit</button>
            <button className="savebutton">Save</button>
            <button className="disablebutton">Disable</button>
        </div> */}
      </div>
    </div>
  );
};

export default ClientProfileManagment;