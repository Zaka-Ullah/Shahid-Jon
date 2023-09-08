import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from "@mui/material/styles";    
import { ThemeOptions } from "@mui/material/styles/createTheme";    
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    CEF:true;  
    centercefsettlement:true;
  }
}

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {   
      xs: 550,      // Extra small devices (phones)
      sm: 900,    // Small devices (tablets)  
     
      md: 1200,    // Medium devices (laptops)
      lg: 1500,   // Large devices (desktops)
      xl: 1800, 
      CEF: 1085,
      centercefsettlement:747,
    }
  }
};

const customTheme = createTheme(
themeOptions

  // Other theme properties...
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>    
    <ThemeProvider theme={customTheme}>
      <App />    
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
