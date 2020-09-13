import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

  /* @font-face {
    font-family: "Lora-Bold";
    src: local('Lora'),url("/fonts/Lora-Bold.ttf") format("ttf");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Lora";
    src: local('Lora'),url("/fonts/Lora.ttf") format("ttf");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Lora-SemiBold";
    src: local('Lora'),url("/fonts/Lora-SemiBold.ttf") format("ttf");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Lora-SemiBoldItalic";
    src: local('Lora'),url("/fonts/Lora-SemiBoldItalic.ttf") format("ttf");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  } */

  @font-face {
    font-family: "Lora";
    src: local('Lora'),url("/fonts/Lora.ttf") format("ttf");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

/* 
  @font-face {
    font-family: "LoraItalic";
    src: local('Lora'),url("/fonts/LoraItalic.ttf") format("ttf");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Lora-Regular";
    src: local('Lora'),url("/fonts/Lora-Regular.ttf") format("ttf");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Lora-Italic";
    src: local('Lora'),url("/fonts/Lora-Italic.ttf") format("ttf");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }   */
  html {
    box-sizing: border-box;
    font-family: "Lora", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
    user-select: none;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: "Lora", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    outline: 0;
  }
  body {
    margin: 10px;
    padding: 0px;
  font-family: Lora;
    /* font-family: "Lora", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    color: ${theme.grey2};
    background-color: ${theme.grey5};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0px;
    line-height: 18px;
    font-family: "Lora", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  a {
    text-decoration: none;
    color: #575a67;
  }
  .row {
    display:flex;
    align-items:center;
  }
  .link {
    color: ${theme.primary1};
  }
    /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

`;
