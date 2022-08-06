import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  :root {
  }

  h1{
    /* font-family: 'Jolly Lodger', cursive;
    color: var(--green) */
  }
  h2, h3 {
  /* font-family: "Staatliches", cursive;
  color: var(--yellow) */
  }
  body{
    /* font-family: 'Rajdhani', sans-serif;
    background: var(--deep-blue);
    color: var(--soft-white) */
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, cursive;
  }
`;
