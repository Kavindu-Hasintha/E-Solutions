import React, { useState, Component } from "react";
import { ApiPath } from "../../API/ApiPath";
import logo from "../../Images/logo192.png";
import ClientBox from "../../components/ClientBox";

class ClientDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      DataisLoaded: false,
      va: window.location.pathname.split("/"),
    };
  }

  componentDidMount() {
    fetch(
      ApiPath.API_URL +
        "ClientDetail/ClientDetails?partnerId=" +
        this.state.va[2]
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          clients: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, clients } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1 style={{color:"black"}}>Clients Details</h1>
        <div
          style={{
            height: "91.5vh",
            display: "grid",
            gridGap: "20px",
            gridTemplateColumns: "auto auto auto",
            backgroundColor: "#FFFFFF",
          }}
        >
          {clients.map((client) => (
            <ol key={client.client_id} style={{ padding: "0" }}>
              <ClientBox
                first_name={client.first_name}
                last_name={client.last_name}
                designation={client.designation}
                email={client.email}
                mobile_no={client.mobile_no}
              />
            </ol>
          ))}
        </div>
      </div>
    );
  }
}

export default ClientDetails;
