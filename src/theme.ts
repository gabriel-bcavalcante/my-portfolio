import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main:  '#48B7FA',
        },
        secondary: {
            main: '#A4A4A4',
        },
    },
    typography: {
        fontFamily:"Helvetica Neue"
    }
});

theme = responsiveFontSizes(theme);

export default theme;