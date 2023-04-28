import React from "react";
import { useNavigate, Link } from "react-router-dom";
// import { tokens } from "../../theme";
import { useTheme, Box, IconButton} from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useProSidebar } from "react-pro-sidebar";
import "./Topbar.css";
const Topbar = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { toggleSidebar, broken, rtl } = useProSidebar();
  
  return (
    <Box display="flex" justifyContent="space-between" p={2} className="topbar">
      <Box display="flex">
        {/* {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )} */}
        <input
          className="inputbase"
          placeholder="Search for something..."

        ></input>
      </Box>
      <Link to="/">
        <button className="toprightbutton">
          <Box display="flex" className="topright">
            <LogoutRounded className="logout" />
            Log out
          </Box>
        </button>
      </Link>
    </Box>
  );
};
export default Topbar;
