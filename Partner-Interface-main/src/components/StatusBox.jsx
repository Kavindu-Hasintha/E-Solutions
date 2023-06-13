import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, count, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#000" }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#1ab394",
              fontSize: "50px",
              fontWeight: "600",
              padding: "0 20px 0 0",
            }}
          >
            {count}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
