import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;700&family=Roboto:wght@300;400;700&display=swap')
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    background-color: #eff4f7;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  *:before {
    box-sizing: border-box;
  }
  *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
