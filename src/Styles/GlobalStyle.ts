import { createGlobalStyle } from "styled-components";
import Cap from "../images/003.webp";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-size: calc(60% + 0.8vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        background-image: url('${Cap}');
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }

    :root {
        --sidebar: #3B3486;
        --body: #EFF5F5;
        --section: #D6E4E5;
        --text-header: #EEE;
        --text-body: #333;
        --icons: #F00;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.5);
    }
`;
