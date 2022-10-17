import React from "react";
import { GlobalStyles as GlobalStylesMacro } from "twin.macro";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyles = createGlobalStyle`
:root {
  --color-fg: #2D3748;
  --color-bg: #F7FAFC;
  --main-color: ${(props) => props.theme.mainColor};
}


body {
  font-family: "Open Sans", sans-serif;
  color: var(--color-fg);
  background: var(--color-bg);
}

.alt-font {
  font-family: "Teko", sans-serif;
  font-weight: 400;
}

a {
  transition: color 0.4s ease-in-out;
}
a:hover, a.anchor:hover  {
  color: ${(props) => props.theme.mainColorVar};
}

button:focus {
  outline: none;
}
/* purgecss ignore */
.svg-inline--fa {
  width: 1.25em;
  display: inline-block;
}
/* purgecss ignore */
.leaflet-container {
  height: 15rem;
}

.ol-rules {
  list-style: decimal;
  list-style-position: outside;
}
.ol-rules li::marker {
  min-width: 1rem;
  text-align: right;
}

.ol-rules li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  margin-left: 2rem;
}

.content-visibility {
  content-visibility: auto;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: rgb(33, 33, 33);
    --color-fg: #F7FAFC;
  }
  body {
    background-color: rgb(33, 33, 33);
    color: rgb(237, 242, 247);
  }
  .bg-white {
    background-color: rgb(33, 33, 33);
  }
  .bg-gray-400 {
    background-color: rgb(179 187 204);
  }
  .text-gray-700 {
    color: rgb(177 177 177);
  }
  .bg-gray-200 {
    background-color: rgb(89 95 104);
  }
  .border-gray-200 {
    border-color: #2e3238;
  }
  .shadow {
    box-shadow: 0 1px 3px 0 rgba(255, 255, 255, 0.1),
      0 1px 2px 0 rgba(255, 253, 255, 0.06);
  }
}
/* purgecss start ignore */
.leaflet-tile-pane {
  filter: invert(1) hue-rotate(358deg) grayscale(0.5);
}

.leaflet-container .leaflet-control-attribution {
  background-color: rgba(0, 0, 0, 0.7) !important;
  color: #ccc;
}
/* purgecss end ignore */

`;

export const GlobalStyles = () => (
  <>
    <GlobalStylesMacro />
    <StyledGlobalStyles />
  </>
);
