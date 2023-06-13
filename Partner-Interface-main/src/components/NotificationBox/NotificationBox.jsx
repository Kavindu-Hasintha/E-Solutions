import React from "react";
import "./NotificationBox.css";
const NotificationBox = () => {
  return (
    <div style={{ border: "1px solid grey", color: "black" }}>
      <div style={{ backgroundColor: "#cdd5d3", fontWeight: "bolder" }}>
        Notifications
      </div>
      <div style={{ marginTop: "1%", marginBottom: "1%" }}>
        Error Log File Log File 321
        <br />
      </div>
      <div style={{ backgroundColor: "#cdd5d3", fontWeight: "bolder" }}>
        2 Days Ago
      </div>
      <br />
      <div style={{ marginTop: "1%", marginBottom: "1%" }}>
        Error Log File Log File 404
        <br />
      </div>
      <div style={{ backgroundColor: "#cdd5d3", fontWeight: "bolder" }}>
        3 Days Ago
      </div>
    </div>
  );
};

export default NotificationBox;
