import { colors } from "@mui/material";
import { createTheme } from "@mui/system";

const theme= createTheme({
    palette: {
      primary: {
        main:colors.orange[200]
    },
        secondary: {
            main:colors.orange[200]
        },
        error: {
          main:colors.red[200]
      },
      },
});

export default theme;