import React, { Component } from "react";
import { AppBar } from "@material-ui/core";
import BarSession from "./bar/BarSession";

export default class AppNavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          {/**AppBar es solo un container */}
          {/**Por eso agregamos tool bar */}
          <BarSession/>
        </AppBar>
      </div>
    );
  }
}
