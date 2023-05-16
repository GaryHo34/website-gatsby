import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: black;
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    cursor: pointer;
  }
`
