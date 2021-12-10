import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');


*, *::after, *::before{
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 0; 
    padding: 0;
}

html,body {
    font-size: 16px;
}

body{
    width: 100%;
    height: 100vh;
}

// #root{
//     height: 100%;
// }
`;

export default GlobalStyle;
