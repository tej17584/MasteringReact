import React, { Component } from "react";
import { Container } from "@material-ui/core";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

class RegistrarUsuario extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="md">
          <div style={style.paper}></div>
        </Container>
      </div>
    );
  }
}

export default RegistrarUsuario;
