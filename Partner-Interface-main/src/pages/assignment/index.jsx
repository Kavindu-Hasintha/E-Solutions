import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import "./index.css";
import { WiTime9 } from "react-icons/wi";
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "access",
      headerName: "Access Llvel",
      width: 100,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* <Header title="Client Details"/> */}
        <h1 className="header1">ASSIGNMENT</h1>
      </Box>
      <Box
        m="8px 0 0 0"
        height="73vh"
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
        }}
      >
        <div className="Row">
          <div className="first">
            <h3 className="head">To Do</h3>
            <div className="content1">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content2">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content3">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="second">
            <h3 className="head">In Progress</h3>
            <div className="content1">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content2">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content3">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="third">
            <h3 className="head">Completed</h3>
            <div className="content1">
              <p>
                Sometimes by accident, sometimes on purpose (injected humour and
                the like).
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
              </div>
            </div>
            <div className="content2">
              <p>
                Ut porttitor augue non sapien mollis accumsan. Nulla non elit
                eget lacus elementum viverra.
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
                <button className="button">Tag</button>
              </div>
            </div>
            <div className="content3">
              <p>
                Which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ""}
              </div>
            </div>
          </div>
        </div>
        {/* <DataGrid rows={mockDataTeam} columns={columns} /> */}
      </Box>
    </Box>
  );
};

export default Team;
