import React from "react";
import "./clientprofilemanagement.css";

const ClientProfileManagment = () => {
  return (
    <article className="br3  ba b--black-10 mv4 w-100 w-100-m w-25-l mw7 shadow-1 center" style={{Color:'silver'}}>
    <main className="pa4 black-80">
 <div className="measure" >
   
      <h1 style={{ color: "Black", textAlign: "center" }}>
        Client Profile Management
      </h1>
      <div>
        <table style={{alignContent:"center", margin:"0px auto", marginTop:"5%", fontSize:"24px"}}>
          <tr style={{marginBottom:"20px",marginBottom:"200px"}}>
            <td style={{marginRight:"20px"}}>
              <input placeholder="First Name"  className="inputtags"/>
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
              <select placeholder="Assign to Partner" style={{width:"285px", height:"40px",color:"grey"}} className="inputtags">
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
            <button className="  b ph3 pv2 input-reset ba b--black  grow pointer f6 dib"   style={{backgroundColor:'#1ab394'}}>Edit</button>
            
            </td>
            
            <td><button className="b ph3 pv2 input-reset ba b--black bg-green grow pointer f6 dib" style={{backgroundColor:'#1ab394'}}>Save</button></td>
            <td><button className="b ph3 pv2 input-reset ba b--black bg-red grow pointer f6 dib" >Disable</button></td>
          </tr>
        </table>
        {/* <div className="buttons">
            <button className="editbutton">Edit</button>
            <button className="savebutton">Save</button>
            <button className="disablebutton">Disable</button>
        </div> */}
      </div>
    </div>
    </main>
    </article>
  );
};

export default ClientProfileManagment;