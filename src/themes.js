import { createTheme } from "@mui/material"
import {grey} from "@mui/material/colors"

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: grey[900],
        }
    },
    secondary: {
        main: grey[700],
    },
    background: {
        default: grey[900],
        paper: grey[800],
    },
    text: {
        primary: grey[50],
        secondary: grey[300],
    },
})

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: grey[50],
        },
        secondary: {
            main: grey[300],
        },
        background: {
            default: grey[100],
            paper: grey[200],
        },
        text: {
            primary: grey[900],
            secondary: grey[700]
        },

    }
})