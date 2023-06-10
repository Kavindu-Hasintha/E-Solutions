import { ApiPath } from "../../../API/ApiPath";
import React, { useState, Component } from "react";
import { Api } from "@mui/icons-material";
// import FetchCategories from "./data";
// import  ApiPath  from "../../API/ApiPath";

class NameUser extends Component{
  constructor(props){
    super(props);

    this.state = {
      name : "",
      DataisLoaded : false,
      va : window.location.pathname.split("/"),
    };
  }

  componentDidMount() {
    fetch(ApiPath.API_URL + "Profile/UserName?id=" + this.state.va[2])
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          name: json[0].pro_first_name,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, name } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>...</h1>
        </div>
      );

    return (
      <div
        style={{
          paddingTop: "10px",
          fontSize: "1rem",
        }}
      >
        {name}
      </div>
    );
  }
}
export default NameUser;