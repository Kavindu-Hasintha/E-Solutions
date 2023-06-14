import React, { useEffect, useState } from "react";
import "./consoleComponentsServices.css";
import axios from "axios";
import { ApiPath } from "../../../API/ApiPath";
const Services = () => {
  const [urlId, setUrlId] = useState(window.location.pathname.split("/"));
  const [serviceFiles, setServiceFiles] = useState([]);

  const getServiceiles = () => {
    axios
      .get(ApiPath.API_URL + "Service/getService?cId=" + urlId[3])
      .then((res) => {
        setServiceFiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getServiceiles();
  }, []);

  return (
    <div className="body">
      <div className="newcd">
        <div className="head">
          <h4>Services </h4>
        </div>
        <div className="newcd-body">
          <div className="card-body console">
            <table className="data-table ">
              <th>Name</th>
              <th>Discription</th>
              <th>Status</th>
              <th>Startup Type</th>
              <th>Log on as</th>
              {serviceFiles.map((file) => {
                return (
                  <tr key={file.id}>
                    <td class="tbl-item">{file.name}</td>
                    <td class="tbl-item">{file.description}</td>
                    <td class="tbl-item">{file.status}</td>
                    <td class="tbl-item">{file.startUpType}</td>
                    <td class="tbl-item">{file.logOnAs}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
