import React, { Component } from "react";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutLineIcon from "@material-ui/icons/LockOutlined";
import { compose } from "recompose";
import { consumerFirebase } from "../../server";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor: "#AD4D11",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  submit: {
    marginTop: 15,
    marginBottom: 20,
  },
};

//variable para el user
const usuarioInicial = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
};

class RegistrarUsuario extends Component {
  //Dentro del state estamos definiendo un objeto tipo usuario
  state = {
    firebase: null,
    usuario: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.firebase === prevState.firebase) {
      return null;
    }

    return {
      firebase: nextProps.firebase,
    };
  }
  //Creamos un evento onchange
  onChange = (e) => {
    //Variable let
    //Se clona el state del usuario en la variable
    let usuario = Object.assign({}, this.state.usuario);
    //e significa el evento dispatch
    //A usuario en la posicion e.target.name va a tomar el valor de la caja de texto
    usuario[e.target.name] = e.target.value;
    this.setState({
      usuario: usuario,
    });
  };

  //? event para el usuario
  registrarUsuario = (e) => {
    //No queremos que haga refresh
    e.preventDefault();
    console.log("imprimir Objeto Usuario del state", this.state.usuario);
    const { usuario, firebase } = this.state;

    firebase.db
      .collection("Users") //colecccion Users
      .add(usuario)
      .then((usuarioAfter) => {
        console.log("Esta inserción fue un éxito.", usuarioAfter);
        this.setState({ usuario: usuarioInicial });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre su cuenta
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="nombre"
                  onChange={this.onChange}
                  value={this.state.usuario.nombre}
                  fullWidth
                  label="Ingrese su nombre"
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="apellido"
                  onChange={this.onChange}
                  value={this.state.usuario.apellido}
                  fullWidth
                  label="Ingrese su apellido"
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  value={this.state.usuario.email}
                  fullWidth
                  label="Ingrese su email"
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="password"
                  type="password"
                  onChange={this.onChange}
                  value={this.state.usuario.password}
                  fullWidth
                  label="Ingrese su password"
                ></TextField>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Button
                  type="submite"
                  variant="contained"
                  fullWidth
                  sise="large"
                  color="primary"
                  style={style.submit}
                  onClick={this.registrarUsuario}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(consumerFirebase)(RegistrarUsuario);
