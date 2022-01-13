import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{

    --text--title:#363f5f;
    --text-body:#969cb3;
    --background:#f0f2f5;
};

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    @media(max-width:1080px){
        font-size: 93.75%;
    }

    @media(max-width:720px){
        font-size: 87.5%;
    }
}

body{

    max-width:1480px;
    margin:0 auto;
    background: var(--background);
    -webkit-font-smoothing:antialiased;

    @media(max-width:720px){
        width:100vw !important;
    }
}

body,input,textarea,button{
    font-family:"Poppins",sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
}

button{
    cursor: pointer;
}


`;
