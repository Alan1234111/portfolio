import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box
        margin: 0;
        padding: 0;
    }

    body {
        margin: auto 0;
        background-color: #111827;
        font-family: 'Roboto', sans-serif;
        color: white;
        overflow-y: hidden;
    }

    @media (min-width: 900px) {
        #root {
            display: grid;
            grid-template-columns: 350px 1fr;
            grid-template-rows: 1fr;
        }
    }
`;

export default GlobalStyles;
