import { createGlobalStyle } from "styled-components";
import { background } from "./image.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

#root {
  font-family: "Lato", sans-serif;
  justify-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  overflow: auto;
  flex-direction: column;
  align-items: center;
}



`;
