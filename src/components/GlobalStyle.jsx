import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {text-decoration: none;
color: inherit;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus{ color: #277a9d} }
`;
