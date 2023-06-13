import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiPath } from "../API/ApiPath";
import PartnerBox from "./PartnerBox";
import ClientBox from "./ClientBox";

const AdminPartnerBox = (props) => {
  const [users, setUsers] = useState([]);
  const [designation, setDesignation] = useState(0);

  const getDesignation = () => {
    axios
      .get(ApiPath.API_URL + "Profile/DesigId?id=" + props.id)
      .then((res) => {
        setDesignation(res.data[0].pro_desig_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPartners = () => {
    axios
      .get(ApiPath.API_URL + "Profile/PartnerIDs?supervisorId=" + props.id)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getClients = () => {
    axios
      .get(ApiPath.API_URL + "ClientDetail/ClientDetails?partnerId=" + props.id)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDesignation();
    if (designation === 2) {
      getPartners();
    } else if (designation === 3) {
      getClients();
    }
  });

  return (
    <div
      style={{ marginTop: "20px", borderTop: "2px solid rgb(176, 171, 171)" }}
    >
      <div>
        <h2 style={{ color: "Black", textAlign: "center", paddingTop: "5px" }}>
          {designation === 2 ? "Partner Details" : "Client Details"}
        </h2>
      </div>
      <div
        style={{
          height: "fit-content",
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: "auto auto auto",
          padding: "0 10px",
        }}
      >
        {designation === 2 &&
          users.map((partner) => (
            <ol key={partner.pro_id} style={{ padding: "0" }}>
              <PartnerBox
                pro_id={partner.pro_id}
                first_name={partner.pro_first_name}
                last_name={partner.pro_last_name}
                email={partner.pro_email}
                mobile_no={partner.pro_mobile}
                desig_id={partner.desig_id}
                photo_link={partner.PhotoLink}
                removeEnable="true"
              />
            </ol>
          ))}
        {designation === 3 &&
          users.map((client) => (
            <ol key={client.client_id} style={{ padding: "0" }}>
              {/* <PartnerBox
              pro_id={partner.pro_id}
              first_name={partner.pro_first_name}
              last_name={partner.pro_last_name}
              email={partner.pro_email}
              mobile_no={partner.pro_mobile}
              desig_id={partner.desig_id}
              removeEnable="true"
            /> */}
              <ClientBox
                client_id={client.client_id}
                first_name={client.first_name}
                last_name={client.last_name}
                designation={client.designation}
                email={client.email}
                mobile_no={client.mobile_no}
                client_photo_link={client.client_photo_link}
                removeEnable="true"
              />
            </ol>
          ))}
      </div>
    </div>
  );
};

export default AdminPartnerBox;
