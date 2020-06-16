import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#005E61",
    },
    common: {
      white: "white",
    },
    secondary: {
      main: "#AD4D11",
    },
  },
  spacing: 10,
});

export default theme;
