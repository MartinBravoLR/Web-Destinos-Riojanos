import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from './pages/routes';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { colors } from '@mui/material';
const theme= createTheme({
    palette: {
      primary: {
        main:colors.orange[200]
    },
      secondary: {
            main:colors.orange[200]
        },
        third:{
          main:colors.green[200]
        }
      },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </ThemeProvider>

  );
}

export default App;
