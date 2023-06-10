// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import "./MyProSidebar.css";
import { useSidebarContext } from "./sidebarContext";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import NameUser from "./Data";
import Options from "./Options";
import { useEffect } from "react";
import ClientDetails from "../../clientDetails/ClientDetails";
import { FaBars } from "react-icons/fa";
// import {Employee} from "./Data";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const [showMessage, setShowMessage] = useState(false);
  const message = "Logout";
  function handleMouseEnter() {
    setShowMessage(true);
  }

  function handleMouseLeave() {
    setShowMessage(false);
  }

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor="#2F4050"
        // backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : sidebarRTL ? (
                <SwitchLeftOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              ) : (
                <SwitchRightOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="5px"
              >
                <b className="exampleuser">
                  <NameUser />
                </b>
                <button
                  style={{
                    backgroundColor: "#1ab394",
                    border: "1px solid transparent",
                    color: "#fff",
                    borderRadius: "2px",
                    fontSize: "14px",
                  }}
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <FaBars
                    style={{
                      verticalAlign: "middile",
                      paddingBottom: "5px",
                      fontSize: "18px",
                    }}
                  />
                </button>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box>
              <Box
                style={{ cursor: "pointer" }}
                marginLeft="70px"
                marginTop="-20px"
                paddingBottom="10px"
              >
                <b
                  className="menu"
                  style={{ color: "grey", verticalAlign: "middle" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Menu {showMessage && message}
                </b>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "0%"} fontSize={12}>
            <Options />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
