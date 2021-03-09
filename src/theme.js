import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({

  palette: {

    type: 'light',
    primary: {
      main: '#fff',
      light: '#464646',
      dark: '#000000',
    },
    secondary: {
      main: '#eaeaea',
      light: '#eaeaea',
      dark: '#000000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '10px 10px',
        margin: '0',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;
