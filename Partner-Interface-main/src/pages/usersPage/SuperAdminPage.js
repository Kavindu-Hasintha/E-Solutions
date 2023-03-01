import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMode } from "../../theme";
import SuperAdminDashboard from "../dashboard/SuperAdminDashboard";
import { MyProSidebarProvider } from "../global/sidebar/sidebarContext";
import Topbar from "../global/Topbar";
import ClientProfileManagment from "../Register/clientprofilemanagement";
import RegisterNewClient from "../Register/registerNewClient";
import RegisterNewPartner from "../Register/registerNewPartner";
const SuperAdminPage = () => {
  const [theme, colorMode] = useMode();
  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                <Route path="" element={<SuperAdminDashboard/>}/>
                <Route path="registernewpartner" element={<RegisterNewPartner/>}/>
                <Route path="registernewclient" element={<RegisterNewClient/>}/>
                <Route path="clientprofilemanagement" element={<ClientProfileManagment/>}/>
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default SuperAdminPage;
