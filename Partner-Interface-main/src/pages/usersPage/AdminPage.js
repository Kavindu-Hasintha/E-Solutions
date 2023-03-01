import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMode } from "../../theme";
import { MyProSidebarProvider } from "../global/sidebar/sidebarContext";
import Topbar from "../global/Topbar";
import AdminDashboard from "../dashboard/AdminDashbord";
import PartnerDetails from "../partnerDetails/PartnerDetails";
import NewClient from "../newClient/NewClient";
const AdminPage = () => {
  const [theme, colorMode] = useMode();
  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar/>
              <Routes>
                <Route path="" element={<AdminDashboard/>}/>
                <Route path="newPartner" element={<PartnerDetails/>}/>
                <Route path="newClient" element = {<NewClient/>} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default AdminPage;
