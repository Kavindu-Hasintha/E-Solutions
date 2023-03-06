import React from "react";
/*
const PartnerPage = () => {
  return <div>Partner Page</div>;
};

export default PartnerPage;
*/

import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "../global/sidebar/sidebarContext";
import Topbar from "../global/Topbar";
import Partnerdashboard from "../dashboard/PartnerDashboard";
import ClientDetails from "../clientDetails/ClientDetails";
import Project from "../project";
import Assignment from "../assignment";
import Smtp from "../smpt";
import ClientDetailsnew from "../clientDetails/ClientDeatailsnew";

const PartnerPage = (props) => {
  const [theme, colorMode] = useMode();

  // Protected Routes (2023/02/04)
  const logOut = () => {
    props.onLogout();
  };

  return (
    // <ColorModeContext.Provider value={colorMode}>
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar onlogOut={logOut} />
              <Routes>
                <Route path="/" element={<Partnerdashboard />} />
                <Route path="clientDetails" element={<ClientDetailsnew />} />
                {/* <Route path="clientDetails" element={<ClientDetails />} /> */}
                <Route path="project" element={<Project />} />
                <Route path="assignment" element={<Assignment />} />
                <Route path="smtp" element={<Smtp />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>

    // </ColorModeContext.Provider>
  );
};

export default PartnerPage;
