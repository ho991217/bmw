import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      padding: 0;
      font-family: 'BMWTypeNext Pro Regular', sans-serif;
      background-color:  #000;
      color: #fff;
   }
   * {
      box-sizing: border-box;
      letter-spacing: -0.04rem;
   }
`;
