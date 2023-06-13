import { useTheme } from "@emotion/react";
import { ResponsiveBarCanvas } from "@nivo/bar";
import { tokens } from "../theme";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ApiPath } from "../API/ApiPath";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(ApiPath.API_URL + "Server/GetServersPerformance")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ResponsiveBarCanvas
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#000",
            },
          },
          legend: {
            text: {
              fill: "#000",
            },
          },
          ticks: {
            line: {
              stroke: "#000",
              strokeWidth: 1,
            },
            text: {
              fill: "#000",
            },
          },
        },
        legends: {
          text: {
            fill: "#000",
          },
        },
      }}
      keys={["performance"]}
      indexBy="server_name"
      margin={{ top: 70, right: 60, bottom: 50, left: 60 }}
      pixelRatio={1.25}
      padding={0.3}
      innerPadding={0}
      minValue="0"
      maxValue="100"
      groupMode="stacked"
      layout="vertical"
      reverse={false}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "set2" }}
      colorBy="id"
      borderWidth={0}
      borderRadius={0}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      // axisTop={{
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: "",
      //   legendOffset: 36,
      // }}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "server_name",
        legendPosition: "middle",
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "performance",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableGridX={true}
      enableGridY={false}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      isInteractive={true}
      legends={[]}
    />
  );
};

export default BarChart;
