import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiPath } from "../../API/ApiPath";
import { toast } from "react-toastify";
import "./ClientProfile.css";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import { toast } from "react-toastify";
// import "tachyons";
// import './custom-confirm-alert.css';

const ClientProfile = () => {
  const navigate = useNavigate();
  const [urlId, setUrlId] = useState(window.location.pathname.split("/"));
  const [data, setData] = useState({
    client_id: 0,
    first_name: "",
    last_name: "",
    nic: "",
    mobile_no: "",
    email: "",
    designation: "",
    server_name: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const fetchData = () => {
    axios
      .get(ApiPath.API_URL + "ClientDetail/GetClientAllDetails?cId=" + urlId[5])
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !data.first_name ||
      !data.last_name ||
      !data.nic ||
      !data.mobile_no ||
      !data.email ||
      !data.designation ||
      !data.server_name
    ) {
      toast.error("Please fill all the fields!");
    } else {
      axios
        .put(ApiPath.API_URL + "ClientDetail/UpdateClientDe", data)
        .then((res) => {
          toast.success("Üpdated Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      setIsDisabled(true);
    }
  };

  const deleteClientAcc = () => {
    axios
      .delete(
        ApiPath.API_URL + "ClientDetail/DeleteClient?cId=" + data.client_id
      )
      .then((res) => {
        navigate(-1);
        toast.success("Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const enbleEditing = () => {
    setIsDisabled(false);
  };

  return (
    // <div
    //   className="WholePage"
    //   style={{ height: "90vh", marginLeft: "5%", marginRight: "5%" }}
    // >
    //   <h1 style={{ color: "Black", textAlign: "center", marginTop: "3%" }}>
    //     My Profile Management
    //   </h1>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <table
    //         style={{
    //           alignContent: "center",
    //           margin: "0px auto",
    //           marginTop: "5%",
    //           fontSize: "24px",
    //         }}
    //       >
    //         <tr style={{ marginBottom: "20px", marginBottom: "200px" }}>
    //           <td style={{ marginRight: "20px" }}>
    //             <input
    //               type="text"
    //               name="pro_first_name"
    //               value={data.pro_first_name}
    //               onChange={handleInputChange}
    //               placeholder="First Name"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="First Name"
    //             />
    //           </td>
    //           <td>
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_last_name"
    //               value={data.pro_last_name}
    //               onChange={handleInputChange}
    //               placeholder="Last Name"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Last Name"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <input
    //               type="email"
    //               name="pro_email"
    //               value={data.pro_email}
    //               onChange={handleInputChange}
    //               placeholder="Email"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Email"
    //             />
    //           </td>
    //           <td>
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               name="depart"
    //               defaultValue={depart}
    //               placeholder="Department"
    //               className="inputtags"
    //               disabled
    //               title="Department"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <input
    //               type="text"
    //               name="desig"
    //               defaultValue={desig}
    //               placeholder="Designation"
    //               className="inputtags"
    //               disabled
    //               title="Designation"
    //             />
    //           </td>
    //           <td>
    //             {" "}
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_dob"
    //               value={data.pro_dob.substring(0, 10)}
    //               onChange={handleInputChange}
    //               placeholder="Date of Birth (yyyy-mm-dd)"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Date of Birth"
    //               maxLength="10"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <select
    //               id="gender"
    //               name="pro_gender"
    //               value={data.pro_gender}
    //               onChange={handleInputChange}
    //               className="input_select"
    //               disabled={isDisabled}
    //               title="Gender"
    //               // style={{width:"100%",height:"20px",fontSize:"10px"}}
    //             >
    //               <option value="Male">Male</option>
    //               <option value="Female">Female</option>
    //             </select>
    //           </td>
    //           <td></td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_mobile"
    //               value={data.pro_mobile}
    //               onChange={handleInputChange}
    //               placeholder="Mobile No"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Mobile No"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_joined_date"
    //               defaultValue={data.pro_joined_date.substring(0, 10)}
    //               placeholder="Joined Date"
    //               className="inputtags"
    //               disabled
    //               title="Joined Date"
    //             />
    //           </td>
    //           <td></td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_updated_time"
    //               value={
    //                 data.pro_updated_time.substring(0, 10) +
    //                 " " +
    //                 data.pro_updated_time.substring(11, 19)
    //               }
    //               placeholder="Updated Time"
    //               className="inputtags"
    //               disabled
    //               title="Last Updated Time"
    //             />
    //           </td>
    //         </tr>
    //         <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr>
    //         <tr>
    //           <td>
    //             <button
    //               type="button"
    //               className="button_edit"
    //               onClick={enbleEditing}
    //             >
    //               Edit
    //             </button>
    //             <button
    //               type="submit"
    //               className="button_save"
    //               disabled={isDisabled}
    //             >
    //               Save
    //             </button>
    //           </td>
    //           <td></td>
    //           <td>
    //             <button
    //               type="button"
    //               className="buttonpassword"
    //               onClick={() => navigate("changePassword")}
    //             >
    //               Change Password
    //             </button>
    //           </td>
    //         </tr>
    //       </table>
    //     </form>
    //   </div>
    // </div>

    <div
      className="ClientProfilewhole"
      style={{ height: "90vh", marginLeft: "5%", marginRight: "5%" }}
    >
      <h1
        style={{
          color: "Black",
          textAlign: "center",
          marginTop: "3%",
          fontSize: "40px",
        }}
      >
        Client Profile
      </h1>
      <form onSubmit={handleSubmit}>
        <table
          style={{
            alignContent: "center",
            margin: "0px auto",
            marginTop: "5%",
            fontSize: "24px",
          }}
        >
          <tr>
            <td>
              <input
                type="text"
                name="first_name"
                value={data.first_name}
                onChange={handleInputChange}
                disabled={isDisabled}
                title="First Name"
                placeholder="First Name"
                className="ClientProfileInputs"
              />
            </td>
            <td></td>
            <td>
              <input
                type="text"
                name="last_name"
                value={data.last_name}
                onChange={handleInputChange}
                disabled={isDisabled}
                title="Last Name"
                placeholder="Last Name"
                className="ClientProfileInputs"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="nic"
                value={data.nic}
                onChange={handleInputChange}
                disabled={isDisabled}
                title="NIC"
                placeholder="NIC"
                className="ClientProfileInputs"
              />
            </td>
            <td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td>
              <input
                type="text"
                name="mobile_no"
                value={data.mobile_no}
                onChange={handleInputChange}
                disabled={isDisabled}
                title="Mobile No"
                placeholder="Mobile No"
                className="ClientProfileInputs"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                disabled={isDisabled}
                title="Email"
                placeholder="Email"
                className="ClientProfileInputs"
              />
            </td>
            <td></td>
            <td>
              <input
                type="text"
                name="designation"
                value={data.designation}
                onChange={handleInputChange}
                disabled={isDisabled}
                title="Designation"
                placeholder="Designation"
                className="ClientProfileInputs"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="server_name"
                value={data.server_name}
                onChange={handleInputChange}
                disabled={isDisabled}
                title="Server Name"
                placeholder="Server Name"
                className="ClientProfileInputs"
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
              <button
                type="button"
                className="button_edit"
                onClick={enbleEditing}
              >
                Edit
              </button>
              <button
                type="submit"
                className="button_save"
                disabled={isDisabled}
              >
                Save
              </button>
            </td>
            <td></td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                className="buttonDisable"
                onClick={deleteClientAcc}
              >
                Disable
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default ClientProfile;
