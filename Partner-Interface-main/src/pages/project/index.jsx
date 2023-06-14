// import React from "react";
// import { Box, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import "./index.css";
// import { HiOutlineRefresh } from "react-icons/hi";
// import { AiFillFolder } from "react-icons/ai";
// import { MdOutlineModeEditOutline } from "react-icons/md";

// const Projects = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const handleRefresh = () => {
//     window.location.reload();
//   };
//   return (
//     <Box m="20px">
//       <Box>
//         <h1 className="header">PROJECT</h1>
//       </Box>
//       <Box
//         m="8px 0 0 0"
//         width="100%"
//         height="74vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <div className="all">
//           <div className="firstpart">
//             <p className="topcontain">All projects assigned to this account</p>
//             <button className="topbutton">Create new project</button>
//           </div>
//           <div className="secondpart">
//             <button className="refresh" onClick={handleRefresh}>
//               <HiOutlineRefresh />
//               Refresh
//             </button>
//             <input type="text" placeholder="Search" className="search"></input>
//             <button className="go">Go!</button>
//           </div>
//           <div>
//             <div className="thirdpart">
//               <label className="activestatusbutton">Active</label>
//               <div className="secondcol">
//                 Contract with Zender Company
//                 <br />
//                 <small>Created 14.08.2014</small>
//               </div>
//               <div className="thirdcol">
//                 <div className="both">
//                   <small>Completion With:48%</small>
//                   <br />
//                   <progress value="48" max="100" className="progressbar">
//                     {" "}
//                     32%{" "}
//                   </progress>
//                 </div>
//               </div>
//               <div className="fourthcol">
//                 <div className="viewdiv">
//                   <button className="view">
//                     <AiFillFolder />
//                     View
//                   </button>
//                 </div>
//                 <div className="editview">
//                   <button className="edit">
//                     <MdOutlineModeEditOutline />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="thirdpart">
//               <label className="activestatusbutton">Active</label>
//               <div className="secondcol">
//                 Contract with Zender Company
//                 <br />
//                 <small>Created 14.08.2014</small>
//               </div>
//               <div className="thirdcol">
//                 <div className="both">
//                   <small>Completion With:48%</small>
//                   <br />
//                   <progress value="48" max="100" className="progressbar">
//                     {" "}
//                     32%{" "}
//                   </progress>
//                 </div>
//               </div>
//               <div className="fourthcol">
//                 <div className="viewdiv">
//                   <button className="view">
//                     <AiFillFolder />
//                     View
//                   </button>
//                 </div>
//                 <div className="editview">
//                   <button className="edit">
//                     <MdOutlineModeEditOutline />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="thirdpart">
//               <label className="activestatusbutton">Active</label>
//               <div className="secondcol">
//                 Contract with Zender Company
//                 <br />
//                 <small>Created 14.08.2014</small>
//               </div>
//               <div className="thirdcol">
//                 <div className="both">
//                   <small>Completion With:48%</small>
//                   <br />
//                   <progress value="48" max="100" className="progressbar">
//                     {" "}
//                     32%{" "}
//                   </progress>
//                 </div>
//               </div>
//               <div className="fourthcol">
//                 <div className="viewdiv">
//                   <button className="view">
//                     <AiFillFolder />
//                     View
//                   </button>
//                 </div>
//                 <div className="editview">
//                   <button className="edit">
//                     <MdOutlineModeEditOutline />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="thirdpart">
//               <label className="activestatusbutton">Active</label>
//               <div className="secondcol">
//                 Contract with Zender Company
//                 <br />
//                 <small>Created 14.08.2014</small>
//               </div>
//               <div className="thirdcol">
//                 <div className="both">
//                   <small>Completion With:48%</small>
//                   <br />
//                   <progress value="48" max="100" className="progressbar">
//                     {" "}
//                     32%{" "}
//                   </progress>
//                 </div>
//               </div>
//               <div className="fourthcol">
//                 <div className="viewdiv">
//                   <button className="view">
//                     <AiFillFolder />
//                     View
//                   </button>
//                 </div>
//                 <div className="editview">
//                   <button className="edit">
//                     <MdOutlineModeEditOutline />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="thirdpart">
//               <label className="activestatusbutton">Active</label>
//               <div className="secondcol">
//                 Contract with Zender Company
//                 <br />
//                 <small>Created 14.08.2014</small>
//               </div>
//               <div className="thirdcol">
//                 <div className="both">
//                   <small>Completion With:48%</small>
//                   <br />
//                   <progress value="48" max="100" className="progressbar">
//                     {" "}
//                     32%{" "}
//                   </progress>
//                 </div>
//               </div>
//               <div className="fourthcol">
//                 <div className="viewdiv">
//                   <button className="view">
//                     <AiFillFolder />
//                     View
//                   </button>
//                 </div>
//                 <div className="editview">
//                   <button className="edit">
//                     <MdOutlineModeEditOutline />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="thirdpart">
//               <label className="activestatusbutton">Active</label>
//               <div className="secondcol">
//                 Contract with Zender Company
//                 <br />
//                 <small>Created 14.08.2014</small>
//               </div>
//               <div className="thirdcol">
//                 <div className="both">
//                   <small>Completion With:48%</small>
//                   <br />
//                   <progress value="48" max="100" className="progressbar">
//                     {" "}
//                     32%{" "}
//                   </progress>
//                 </div>
//               </div>
//               <div className="fourthcol">
//                 <div className="viewdiv">
//                   <button className="view">
//                     <AiFillFolder />
//                     View
//                   </button>
//                 </div>
//                 <div className="editview">
//                   <button className="edit">
//                     <MdOutlineModeEditOutline />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default Projects;

import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "./indexnew.css";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiFillFolder } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";

import { ApiPath } from "../../API/ApiPath";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [url, setUrl] = useState(window.location.pathname.split("/"));
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const [projectId, setProjectId] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState();
  const [projectDate, setProjectDate] = useState("");
  const [progress, setProgress] = useState("");
  const [edit, setEdit] = useState(0);

  const handleRefresh = () => {
    navigate(-1);
    navigate(1);
  };

  const fetchData = () => {
    fetch(ApiPath.API_URL + "Project/ProjectDetails?id=" + url[2])
      .then((res) => res.json())
      .then((json) => {
        setProjects(json);
        console.log(projects);
      });
  };

  const getSearchValues = () => {
    if (searchKey.length === 0) {
      fetchData();
    } else {
      fetch(
        ApiPath.API_URL +
          "Project/SearchProject?id=" +
          url[2] +
          "&searchKey=" +
          searchKey
      )
        .then((res) => res.json())
        .then((json) => {
          setProjects(json);
          console.log(projects);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const boxopen = () => {
    setPopup(true);
  };
  const handleClose = () => {
    setPopup(false);
    emptyFields();
  };

  const AddProject = (e) => {
    e.preventDefault();
    const data = {
      projectName: projectName,
      status: status,
      progress: progress,
    };

    console.log("Add project = " + data.projectName);
    console.log("Status = " + data.status);

    if (data.projectName === "" || data.status === "" || !data.progress) {
      toast.error("Please fill all the fields");
    } else if (isNaN(+data.progress)) {
      toast.error("Project Progress must be a number");
    } else {
      fetch(ApiPath.API_URL + "Project/AddProject", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 0,
          pro_id: url[2],
          p_name: data.projectName,
          status: data.status,
          progress: data.progress,
          created_at: "",
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            handleClose();

            if (result === 1) {
              toast.success("New Project added successfully");
              fetchData();
            } else {
              toast.error("Adding Failed");
            }
          },
          (error) => {
            toast.error(
              "Something wrong in the response that coming from API!"
            );
            console.log(error);
          }
        );
    }
  };

  const emptyFields = () => {
    setProjectName("");
    setStatus();
    setProgress("");
    setProjectDate("");
    setProjectId(0);
    setEdit(0);
  };

  const EditProject = (e) => {
    e.preventDefault();

    if (projectName === "" || !status || !progress || projectDate === "") {
      toast.error("Please fill all the fields");
    } else if (isNaN(+progress)) {
      toast.error("Project Progress must be a number");
    } else {
      axios
        .put(ApiPath.API_URL + "Project/editProject", {
          id: projectId,
          p_name: projectName,
          status: status,
          progress: progress,
          created_at: projectDate,
        })
        .then((res) => {
          if (res.data === 1) {
            toast.success("Updated Successfully");
          } else {
            toast.error("Updated Failed");
          }
          handleClose();
          handleRefresh();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteProject = (id) => {
    axios
      .delete(ApiPath.API_URL + "Project/deleteProject?id=" + id)
      .then((res) => {
        if (res.data === 1) {
          toast.success("Deleted Successfully");
          fetchData();
        } else {
          toast.error("Deleted Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article
      className="br3 ba b--black-10 shadow-1 center"
      style={{
        Color: "silver",
        margin: "10px auto",
        width: "95%",
        padding: "0",
      }}
    >
      <Box m="20px">
        <Box>
          <h1 className="header">PROJECT</h1>
        </Box>
        <Box
          m="8px 0 0 0"
          width="100%"
          height="74vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <div className="all">
            <div className="firstpart">
              <p className="topcontain">
                All projects assigned to this account
              </p>
              <button className="topbutton" onClick={boxopen}>
                Create new project
              </button>
            </div>
            <div className="secondpart">
              <button className="refresh" onClick={handleRefresh}>
                <HiOutlineRefresh />
                Refresh
              </button>
              <input
                type="text"
                name="search"
                value={searchKey}
                onChange={(e) => {
                  setSearchKey(e.target.value);
                }}
                placeholder="Search"
                className="search"
              />
              <button className="go" onClick={getSearchValues}>
                Go!
              </button>
            </div>

            <div>
              {projects.map((project) => (
                <div className="thirdpart" key={project.id}>
                  <div className="statusDiv">
                    <p
                      className="activestatusbutton"
                      style={{
                        backgroundColor:
                          project.status === 1 ? "#1ab394" : "#808080",
                      }}
                    >
                      {project.status === 1 ? "Active" : "Inactive"}
                    </p>
                  </div>
                  <div className="secondcol">
                    {project.p_name}
                    <br />
                    <small>{project.created_at.substring(0, 10)}</small>
                  </div>
                  <div className="thirdcol">
                    <div className="both">
                      <small>Completion With:{project.progress}%</small>
                      <br />
                      <progress
                        value={project.progress}
                        max="100"
                        className="progressbar"
                      >
                        {/* {" "}
                      {project.progress}{" "} */}
                      </progress>
                    </div>
                  </div>
                  <div className="fourthcol">
                    <div className="viewdiv">
                      <button
                        className="view"
                        onClick={() => {
                          setEdit(1);
                          setProjectId(project.id);
                          setProjectName(project.p_name);
                          setStatus(progress.status);
                          setProgress(project.progress);
                          setProjectDate(project.created_at);
                          boxopen();
                        }}
                      >
                        <MdOutlineModeEditOutline />
                        Edit
                      </button>
                    </div>
                    <div className="editview">
                      <button
                        className="edit"
                        onClick={() => deleteProject(project.id)}
                      >
                        <AiFillDelete />
                        Delete
                      </button>
                      {/* <button onClick={deleteProject(project.id)}>
                        Delete
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Box>

        <Dialog open={popup} className="task-add-dialog">
          <div style={{ backgroundColor: "#1ab394" }}>
            <DialogTitle>
              {edit === 0 ? "Add Project" : "Edit Project"}{" "}
            </DialogTitle>
            <DialogContent>
              <Stack spacing={2}>
                Project Name
                <TextField
                  // label="Add"
                  placeholder="Enter Project Name"
                  autoFocus
                  margin="dense"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <FormLabel
                  id="demo-controlled-radio-buttons-group"
                  style={{ marginTop: "10px", color: "#fff" }}
                >
                  Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={status}
                  defaultChecked={status === 0}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{ marginTop: "0" }}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="Inactive"
                  />
                </RadioGroup>
                <div style={{ marginTop: "0" }}>
                  <FormLabel
                    id="demo-controlled-radio-buttons-group"
                    style={{ marginTop: "10px", color: "#fff" }}
                  >
                    Progress
                  </FormLabel>
                  <TextField
                    // label="Add"
                    placeholder="Enter Project Progress"
                    autoFocus
                    margin="dense"
                    variant="outlined"
                    size="medium"
                    fullWidth
                    required
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                  />
                </div>
                {edit === 1 ? (
                  <div style={{ marginTop: "0" }}>
                    <FormLabel
                      id="demo-controlled-radio-buttons-group"
                      style={{ marginTop: "10px", color: "#fff" }}
                    >
                      Created At
                    </FormLabel>
                    <TextField
                      // label="Add"
                      placeholder="Enter Project Created Date"
                      autoFocus
                      margin="dense"
                      variant="outlined"
                      size="medium"
                      fullWidth
                      required
                      value={projectDate.substring(0, 10)}
                      onChange={(e) => setProjectDate(e.target.value)}
                    />
                  </div>
                ) : (
                  ""
                )}
              </Stack>
            </DialogContent>
            <DialogActions>
              {edit === 0 ? (
                <Button
                  onClick={AddProject}
                  style={{ color: "#fff", border: "1px solid #fff" }}
                >
                  Add
                </Button>
              ) : (
                <Button
                  onClick={EditProject}
                  style={{ color: "#fff", border: "1px solid #fff" }}
                >
                  Save
                </Button>
              )}

              <Button
                onClick={handleClose}
                style={{ color: "#fff", border: "1px solid #fff" }}
              >
                Cancel
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </Box>
    </article>
  );
};

export default Projects;
