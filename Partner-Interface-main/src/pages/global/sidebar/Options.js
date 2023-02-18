import React, { useState, Component } from "react";

import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { BsFillGridFill } from "react-icons/bs";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";

import { ApiPath } from "../../../API/ApiPath";

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

class Options extends Component {
  constructor(props) {
    super(props);

    const superAdminOptions = [
      {
        id: 1,
        title: "Super Admin Dashboard",
        to: "",
      },
      {
        id: 2,
        title: "Register New Partner",
        to: "newPartner",
      },
      {
        id: 3,
        title: "Register New Client",
        to: "newClient",
      },
    ];

    const adminOptions = [
      {
        id: 1,
        title: "Admin Dashboard",
        to: "",
      },
      {
        id: 2,
        title: "Partner",
        to: "newPartner",
      },
      {
        id: 3,
        title: "Client",
        to: "newClient",
      },
    ];

    const partnerOptions = [
      {
        id: 1,
        title: "Partner Dashboard",
        to: "",
      },
      {
        id: 2,
        title: "Client Details",
        to: "clientdetails",
      },
      {
        id: 3,
        title: "Project",
        to: "project",
      },
      {
        id: 4,
        title: "Assignment",
        to: "assignment",
      },
      {
        id: 5,
        title: "SMTP",
        to: "smtp",
      },
    ];

    this.state = {
      desig_id: "",
      superAdminOptions: superAdminOptions,
      adminOptions: adminOptions,
      partnerOptions: partnerOptions,
      DataisLoaded: false,
      va: window.location.pathname.split("/"),
      selected: "Dashboard",
      setSelected: this.setState.selected,
    };
  }

  componentDidMount() {
    fetch(ApiPath.API_URL + "Profile/DesigId?id=" + this.state.va[2])
      .then((res) => res.json())
      .then((json) => {
        console.log("json = " + json[0].pro_desig_id);
        this.setState({
          desig_id: json[0].pro_desig_id,
          DataisLoaded: true,
        });
      });
    console.log("desig id = " + this.state.desig_id);
  }

  render() {
    // const [selected, setSelected] = useState("Dashboard");
    const {
      DataisLoaded,
      desig_id,
      superAdminOptions,
      partnerOptions,
      adminOptions,
      selected,
      setSelected,
    } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> .... </h1>{" "}
        </div>
      );
    else {
      if (desig_id === 1)
        return (
          <div>
            {superAdminOptions.map((menuItem) => (
              <Item
                title={menuItem.title}
                to={menuItem.to}
                icon={<BsFillGridFill />}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        );
      else if (desig_id === 2)
        return (
          <div>
            {adminOptions.map((menuItem) => (
              <Item
                title={menuItem.title}
                to={menuItem.to}
                icon={<BsFillGridFill />}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        );
      else if (desig_id === 3)
        return (
          <div>
            {partnerOptions.map((menuItem) => (
              <Item
                title={menuItem.title}
                to={menuItem.to}
                icon={<BsFillGridFill />}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        );
    }
  }
}

export default Options;
