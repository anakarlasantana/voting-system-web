// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffc400", // amarelo Fast2Mine
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000", // preto
      contrastText: "#ffffff",
    },
    background: {
      default: "#eff5b8", // fundo geral da tela
      paper: "#ffffff", // cards, tabelas, appbar etc.
    },
    text: {
      primary: "#000000", // textos principais
      secondary: "#4f4f4f",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#ffc400",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#e6b800",
          },
        },
        outlinedSecondary: {
          borderColor: "#000000",
          color: "#000000",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: 12,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#ffc400",
          fontWeight: "bold",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: "#f9f9f9",
          },
          "&:hover": {
            backgroundColor: "#fff7e6",
          },
        },
      },
    },
  },
});

export default theme;
