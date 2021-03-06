import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: "HK Grotesk";
        src: url("/fonts/HK_Grotesk/HKGrotesk-Regular.otf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "HK Grotesk";
        src: url("/fonts/HK_Grotesk/HKGrotesk-Medium.otf");
        font-style: medium;
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: "HK Grotesk";
        src: url("/fonts/HK_Grotesk/HKGrotesk-Bold.otf");
        font-style: bold;
        font-weight: 700;
        font-display: swap;
    }

    @font-face {
        font-family: "Open Sans";
        src: url("/fonts/Open_Sans/OpenSans-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "Open Sans";
        src: url("/fonts/Open_Sans/OpenSans-SemiBold.ttf");
        font-style: bold;
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: "Open Sans";
        src: url("/fonts/Open_Sans/OpenSans-Bold.ttf");
        font-style: bold;
        font-weight: 700;
        font-display: swap;
    }
`;
