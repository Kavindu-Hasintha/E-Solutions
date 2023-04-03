import React, { useState, useEffect } from "react";
import { ApiPath } from "../../API/ApiPath";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { toast } from "react-toastify";

import "tachyons";

const Profile = () => {
  const [urlId, setUrlId] = useState(window.location.pathname.split("/"));
  const [data, setData] = useState([]);
  const [depart, setDepart] = useState("");
  const [desig, setDesig] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const fetchData = () => {
    fetch(ApiPath.API_URL + "Profile/PartnerProfile?id=" + urlId[2])
      .then((res) => res.json())
      .then((json) => {
        setData(json[0]);
        fetch(ApiPath.API_URL + "Department/DeptName?id=" + json[0].pro_dept_id)
          .then((res) => res.json())
          .then((json2) => {
            setDepart(json2[0].dep_name);
            fetch(
              ApiPath.API_URL +
                "Designation/DesigName?id=" +
                json[0].pro_desig_id
            )
              .then((res) => res.json())
              .then((json3) => {
                setDesig(json3[0].desig_name);
              });
          });
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
      !data.pro_first_name ||
      !data.pro_last_name ||
      !data.pro_email ||
      !data.pro_dob ||
      !data.pro_mobile
    ) {
      toast.error("Please fill all the fields!");
    } else {
      confirmAlert({
        message: "Are you sure?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              console.log("Save");

              fetch(ApiPath.API_URL + "Profile/UpdatePartnerProfile", {
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((res) => res.json())
                .then((result) => {
                  if (result === 1) {
                    toast.success("Registration Success");
                    fetchData();
                  } else {
                    toast.error("Registration Failed");
                  }
                });

              setIsDisabled(true);
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
      });
    }
  };

  const enbleEditing = () => {
    setIsDisabled(false);
  };

  return (
    <div>
      <h1 style={{ color: "Black", textAlign: "center" }}>
        My Profile Management
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <table
            style={{
              alignContent: "center",
              margin: "0px auto",
              marginTop: "5%",
              fontSize: "24px",
            }}
          >
            <tbody>
              <tr style={{ marginBottom: "20px", marginBottom: "200px" }}>
                <td style={{ marginRight: "20px" }}>
                  <input
                    type="text"
                    name="pro_first_name"
                    value={data.pro_first_name}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="inputtags"
                    disabled={isDisabled}
                    title="First Name"
                  />
                </td>
                <td />
                <td>
                  <input
                    type="text"
                    name="pro_last_name"
                    value={data.pro_last_name}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="inputtags"
                    disabled={isDisabled}
                    title="Last Name"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  {""}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    name="pro_email"
                    value={data.pro_email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="inputtags"
                    disabled={isDisabled}
                    title="Email"
                  />
                </td>
                <td />
                <td>
                  <input
                    type="text"
                    name="depart"
                    defaultValue={depart}
                    // onChange={handleInputChange}
                    placeholder="Department"
                    className="inputtags"
                    disabled
                    title="Department"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  {""}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="desig"
                    defaultValue={desig}
                    // onChange={handleInputChange}
                    placeholder="Designation"
                    className="inputtags"
                    disabled
                    title="Designation"
                  />
                </td>
                <td>
                  {""}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <input
                    type="text"
                    name="pro_dob"
                    value={data.pro_dob}
                    onChange={handleInputChange}
                    placeholder="Date of Birth (yyyy-mm-dd)"
                    className="inputtags"
                    disabled={isDisabled}
                    title="Date of Birth"
                    maxLength="10"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  {""}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    id="gender"
                    name="pro_gender"
                    value={data.pro_gender}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "40px" }}
                    className="inputtags"
                    disabled={isDisabled}
                    title="Gender"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
                <td />
                <td>
                  <input
                    type="text"
                    name="pro_mobile"
                    value={data.pro_mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile No"
                    className="inputtags"
                    disabled={isDisabled}
                    title="Mobile No"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  {""}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pro_joined_date"
                    defaultValue={data.pro_joined_date}
                    // onChange={handleInputChange}
                    placeholder="Joined Date"
                    className="inputtags"
                    disabled
                    title="Joined Date"
                  />
                </td>
                <td>
                  {""}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <input
                    type="text"
                    name="pro_updated_time"
                    // onChange={handleInputChange}
                    value={data.pro_updated_time}
                    placeholder="Updated Time"
                    className="inputtags"
                    disabled
                    title="Last Updated Time"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  {""}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    type="button"
                    className="editbutton"
                    onClick={enbleEditing}
                    style={{ padding: "5px 10px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="savebutton"
                    style={{ padding: "5px 10px" }}
                  >
                    Save
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Profile;
