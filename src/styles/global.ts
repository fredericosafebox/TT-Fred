import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow-y: auto;
}

`;

export default GlobalStyle;
