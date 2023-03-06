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

const SuperAdminPage = (props) => {
  const [theme, colorMode] = useMode();

  // Protected Routes (2023/02/04)
  const logOut = () => {
    props.onLogout();
  };

  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar onlogOut={logOut} />
              <Routes>
                <Route path="" element={<SuperAdminDashboard />} />
                <Route
                  path="registernewpartner"
                  element={<RegisterNewPartner />}
                />
                <Route
                  path="registernewclient"
                  element={<RegisterNewClient />}
                />
                <Route
                  path="clientprofilemanagement"
                  element={<ClientProfileManagment />}
                />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default SuperAdminPage;
