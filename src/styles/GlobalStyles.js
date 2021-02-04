import { createGlobalStyle } from 'styled-components';
// import { mediaMin, mediaMax } from '../styles/MediaQueries';

// ${mediaMin.custom`
// max-width: 1140px;
// `};
// ${mediaMin.desktop`
// max-width: 960px;
// `};
// ${mediaMin.tablet`
// max-width: 720px;
// `};
// ${mediaMin.phone`
// max-width: 540px;
// `};

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
    overflow: hidden;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 0;
  }

  p{
    color: #9fa1a4;
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
