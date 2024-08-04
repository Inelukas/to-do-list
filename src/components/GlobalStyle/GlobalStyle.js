import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #201658;
    --secondary-color: #98ABEE;
    --tertiary-color: #F9E8C9;
    --side-color: #1D24CA;
    --text-color: #000000;
    --text-color-2: #2C3531;
    --icon-color: none;
    --custom-image: url("https://www.transparenttextures.com/patterns/always-grey.png")
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  

  html, body {
    width: 100%;
    height: 100%;
    background: var(--secondary-color);
    background-image: var(--custom-image);
    color: var(--text-color);
    font-family: "Literata", serif;
    font-weight: 400;
  }

  .dark-mode {
    --primary-color: #000000;
    --secondary-color: #333333;
    --tertiary-color: #444444;
    --side-color: #555555;
    --text-color: #F5E7B2;
    --text-color-2: #000000;
    --icon-color: #555555;
    --custom-image: url("https://www.transparenttextures.com/patterns/back-pattern.png");
  }

`;
