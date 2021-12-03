import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');


*, *::after, *::before{
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
}

body{
    margin: 0; 
    padding: 0;
}
`;

export default GlobalStyle;
