import React from "react";
import { GlobalStyles as GlobalStylesMacro } from "twin.macro";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyles = createGlobalStyle`
:root {
  --color-bg: #fff;
}
.intro-bg {
  background: rgba(33, 33, 33, 0.8);
  background: radial-gradient(
    circle,
    rgba(33, 33, 33, 0.8) 25%,
    rgba(33, 33, 33, 0) 100%
  );
}

.article-bg {
  background: rgb(33, 33, 33);
  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.9304096638655462) 0%,
    rgba(33, 33, 33, 0) 35%,
    rgba(33, 33, 33, 1) 100%
  );
}

body {
  font-family: "Open Sans", sans-serif;
}

.alt-font {
  font-family: "Teko", sans-serif;
  font-weight: 400;
}

.bg-styles {
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: none;
  background-size: cover;
}

a {
  transition: color 0.4s ease-in-out;
}
a:hover {
  color: #f6ad55;
}

a.anchor:hover {
  color: #f6ad55;
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

body {
  color: rgb(26, 32, 44);
}

.alt-bg {
  background-color: rgba(237, 242, 247, 0.6);
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
  }
  body {
    background-color: rgb(33, 33, 33);
    color: rgb(237, 242, 247);
  }
  .bg-white {
    background-color: rgb(33, 33, 33);
  }
  .alt-bg {
    background-color: rgba(30, 34, 37, 0.6);
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
