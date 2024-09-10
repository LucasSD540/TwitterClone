import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#000",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }

`;
