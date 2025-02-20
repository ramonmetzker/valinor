import { createTheme } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

const darkTheme = createTheme({
    palette: {
      type: 'dark',
      background: {
          default: '#0D1117',
          paper: '#0D1117'
      },
      primary: lightBlue,
      secondary: {
        main: '#311b92',
      },
    },
  });

export default darkTheme;