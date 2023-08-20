import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <ThemeProvider theme={{}}>
         <GlobalStyle />
         <App />
      </ThemeProvider>
   </React.StrictMode>
);
