import React, { useEffect, useState } from "react";
import "./consoleComponentsReport.css";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { ApiPath } from "../../../API/ApiPath";
const ReportHosting = () => {
  const [urlId, setUrlId] = useState(window.location.pathname.split("/"));
  const [hostingFiles, setHostingFiles] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getReportHostingFiles = () => {
    axios
      .get(ApiPath.API_URL + "ReportHosting/getHostingFiles?cId=" + urlId[3])
      .then((res) => {
        setHostingFiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReportHostingFiles();
  }, []);

  const getSearchValues = () => {
    if (searchKey.trim().length === 0) {
      getReportHostingFiles();
    } else {
      axios
        .get(
          ApiPath.API_URL +
            "ReportHosting/getSearchHosting?cId=" +
            urlId[3] +
            "&searchKey=" +
            searchKey
        )
        .then((res) => {
          setHostingFiles(res.data);
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
          <h4>Report Hosting</h4>
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
              {hostingFiles.map((file) => {
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

export default ReportHosting;
