import React, { useEffect, useState } from "react";
import "./consoleComponentsAlert.css";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { ApiPath } from "../../../API/ApiPath";
const Alert = () => {
  const [urlId, setUrlId] = useState(window.location.pathname.split("/"));
  const [alerts, setAlerts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getAlerts = () => {
    axios
      .get(ApiPath.API_URL + "Alert/getAlerts?cId=" + urlId[3])
      .then((res) => {
        setAlerts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAlerts();
  }, []);

  const getSearchValues = () => {
    if (searchKey.trim().length === 0) {
      getAlerts();
    } else {
      axios
        .get(
          ApiPath.API_URL +
            "Alert/getSearchAlert?cId=" +
            urlId[3] +
            "&searchKey=" +
            searchKey
        )
        .then((res) => {
          setAlerts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="body">
      <div className="newcd">
        <div className="head">
          <h4>Alert</h4>
        </div>
        <div className="newcd-body">
          <div className="card-body console">
            <table>
              <tr>
                <td>
                  <tr>
                    <button type="button" class="btn btn-light">
                      <SelectAllIcon sx={{ fontSize: 30 }} />
                    </button>
                  </tr>
                  <tr className="itm">
                    <h6>Select All</h6>
                  </tr>
                </td>
                <td>
                  <tr>
                    <button type="button" class="btn btn-light">
                      <FilterAltIcon sx={{ fontSize: 30 }} />
                    </button>
                  </tr>
                  <tr className="itm">
                    <h6>Filter</h6>
                  </tr>
                </td>
                <td>
                  <tr>
                    <button type="button" class="btn btn-light">
                      <DriveFileRenameOutlineIcon sx={{ fontSize: 30 }} />
                    </button>
                  </tr>
                  <tr className="itm">
                    <h6>Rename</h6>
                  </tr>
                </td>
                <td>
                  <tr>
                    <button type="button" class="btn btn-light">
                      <DeleteIcon sx={{ fontSize: 30 }} />
                    </button>
                  </tr>
                  <tr className="itm">
                    <h6>Delete</h6>
                  </tr>
                </td>
                <td>
                  <table id="search-table">
                    <div class="input-group ">
                      <button
                        type="button"
                        class="btn btn-light"
                        id="search"
                        onClick={getSearchValues}
                      >
                        <SearchIcon sx={{ fontSize: 20 }} />
                      </button>
                      <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                      />
                    </div>
                  </table>
                </td>
              </tr>
            </table>
            <table className="data-table">
              <th>Name</th>
              <th>File Size</th>
              {alerts.map((alert) => {
                return (
                  <tr key={alert.id}>
                    <td class="tbl-item">{alert.file_name}</td>
                    <td class="tbl-item">{alert.file_size}</td>
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

export default Alert;
