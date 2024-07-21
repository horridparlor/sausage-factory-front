import {createTheme} from "@mui/material/styles";
import {BrandColor} from "../types/color";

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, Sahadeva',
    },
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        info: {
            main: '#2196f3',
        },
        warning: {
            main: '#ff9800',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: BrandColor.BLUE,
        },
    },
});