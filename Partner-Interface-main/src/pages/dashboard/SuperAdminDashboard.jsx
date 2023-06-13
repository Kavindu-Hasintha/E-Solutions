import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatusBox";
import { ApiPath } from "../../API/ApiPath";

import GroupsIcon from "@mui/icons-material/Groups";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import HailIcon from "@mui/icons-material/Hail";

import BarChart from "../../components/BarChart";

const SuperAdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalPartners, setTotalPartners] = useState(0);
  const [totalClients, setTotalClients] = useState(0);
  const [servers, setServers] = useState([]);

  const getTotalUsers = () => {
    axios
      .get(ApiPath.API_URL + "Profile/GetTotalUsers")
      .then((res) => {
        setTotalUsers(res.data[0].Column1 - 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTotalAdmins = () => {
    axios
      .get(ApiPath.API_URL + "Profile/GetTotalAdmins")
      .then((res) => {
        setTotalAdmins(res.data[0].Column1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTotalPartners = () => {
    axios
      .get(ApiPath.API_URL + "Profile/GetTotalPartners")
      .then((res) => {
        setTotalPartners(res.data[0].Column1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTotalClients = () => {
    axios
      .get(ApiPath.API_URL + "ClientDetail/GetTotalClients")
      .then((res) => {
        setTotalClients(res.data[0].Column1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getServerDetails = () => {
    axios
      .get(ApiPath.API_URL + "Server/GetAllServers")
      .then((res) => {
        console.log(res.data);
        setServers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTotalUsers();
    getTotalAdmins();
    getTotalPartners();
    getTotalClients();
    getServerDetails();
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>

      {/* Grid & Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)" // 12 times, grid width = 1fr
        gridAutoRows="140px"
        gap="30px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="#f2f0f0"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Total Users"
            count={totalUsers}
            icon={<GroupsIcon sx={{ color: "#1ab394", fontSize: "35px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#f2f0f0"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Total Admins"
            count={totalAdmins}
            icon={
              <SupervisorAccountIcon
                sx={{ color: "#1ab394", fontSize: "35px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#f2f0f0"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Total Partners"
            count={totalPartners}
            icon={<PersonIcon sx={{ color: "#1ab394", fontSize: "35px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#f2f0f0"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Total Clients"
            count={totalClients}
            icon={<HailIcon sx={{ color: "#1ab394", fontSize: "35px" }} />}
          />
        </Box>

        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="#f2f0f0"
          height="50vh"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color="#000">
                Servers Performance
              </Typography>
              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,335.32
              </Typography> */}
            </Box>
          </Box>

          <Box height="300px" mt="-20px">
            {/* <LineChart isDashboard={true} /> */}
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#f2f0f0"
          overflow="auto"
          height="50vh"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color="#000" variant="h5" fontWeight="600">
              Serveres Status
            </Typography>
          </Box>
          {servers.map((server, i) => (
            <Box
              key={`${server.id} - ${i}`}
              // display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)" // 12 times, grid width = 1fr
              // gridAutoRows="140px"
              // gap="20px"
            >
              <Box gridColumn="span 5" gridRow="span 2">
                <Typography color="#1ab394" variant="h5" fontWeight="600">
                  {server.server_name}
                </Typography>
                <Typography color="#000">
                  {server.first_name} {server.last_name}
                </Typography>
              </Box>
              <Box color="#000" gridColumn="span 5" gridRow="span 2">
                {server.ip_add}
              </Box>
              <Box
                backgroundColor={server.status === "Up" ? "#1ab394" : "#ff0000"}
                color="#f2f0f0"
                p="5px 10px"
                borderRadius="4px"
                gridColumn="span 2"
                gridRow="span 2"
                textAlign="center"
              >
                {server.status}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3 */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            {/* <ProgressCircle size="125" /> */}
        {/* <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>  */}

        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            {/* <BarChart isDashboard={true} /> */}
        {/* </Box>
        </Box> */}

        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
          </Box> */}
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default SuperAdminDashboard;
