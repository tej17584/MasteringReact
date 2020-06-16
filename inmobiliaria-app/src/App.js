import React, { Component } from "react";
import "./App.css";
import ListaInmuebles from "./components/views/ListaInmuebles";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import theme from "./theme/theme";
import AppNavBar from "./components/layout/AppNavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavBar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}
export default App;
