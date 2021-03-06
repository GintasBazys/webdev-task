import React, { StrictMode } from "react";
import { createGlobalStyle } from "styled-components";
import "components/typography.css";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    overflow: hidden auto;
}
html {
    font-family: "Gordita", -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
}
`;

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <GlobalStyle />
    {element}
  </StrictMode>
);
