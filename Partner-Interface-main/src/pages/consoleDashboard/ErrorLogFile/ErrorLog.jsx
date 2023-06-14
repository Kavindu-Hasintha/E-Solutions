import React, { useEffect, useState } from "react";
import "./consoleComponents.css";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { ApiPath } from "../../../API/ApiPath";
const ErrorLog = () => {
  const [urlId, setUrlId] = useState(window.location.pathname.split("/"));
  const [logFiles, setLogFiles] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getErrorLogFiles = () => {
    axios
      .get(ApiPath.API_URL + "ErrorLog/getErrorLog?cId=" + urlId[3])
      .then((res) => {
        setLogFiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getErrorLogFiles();
  }, []);

  const getSearchValues = () => {
    if (searchKey.trim().length === 0) {
      getErrorLogFiles();
    } else {
      axios
        .get(
          ApiPath.API_URL +
            "ErrorLog/getSearchErrorLog?cId=" +
            urlId[3] +
            "&searchKey=" +
            searchKey
        )
        .then((res) => {
          setLogFiles(res.data);
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
          <h4>Error Log File</h4>
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
                  <tr>
                    <button type="button" class="btn btn-light">
                      <DownloadIcon sx={{ fontSize: 30 }} />
                    </button>
                  </tr>
                  <tr className="itm">
                    <h6>Download</h6>
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
              <th>name</th>
              <th>file</th>
              {logFiles.map((file) => {
                return (
                  <tr key={file.id}>
                    <td class="tbl-item">{file.file_name}</td>
                    <td class="tbl-item">{file.file_size}</td>
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

export default ErrorLog;
