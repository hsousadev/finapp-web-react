import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Track */
  ::-webkit-scrollbar {
    width: 10px; /* Width of the entire scrollbar */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--Black-800); /* Color of the scrollbar handle */
    border-radius: 5px; /* Rounded corners */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color on hover */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(36, 36, 36, 0.25); /* Color of the track */
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: rgba(36, 36, 36, 0.25); /* Color on hover */
  }

  &:-internal-autofill-selected {
    background-color: transparent !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--White) !important;
  }

  :root {
    --Max-content-width: 1240px;

    --Green-700: #0AE360;
    --Green-900: #77E564;
    --Black-800: #242424;
    --Black-900: #121214;
    --Red-100: #EB5B64;

    --White: #fff;
  }

  html {
    transition: all 0.4s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--Black-900);

    @media(max-width: 1360px) {
      padding: 0 64px;
    }

    @media(max-width: 720px) {
      padding: 0 32px;

      h1 {
        font-weight: 700;
        font-size: 32px;
      }

      h2 {
        font-weight: 400;
        font-size: 24px;
      }

      h3 {
        font-weight: 700;
        font-size: 16px;
      }

      h4 {
        font-weight: 400;
        font-size: 14px;
      }

      p {
        font-weight: 400;
        font-size: 12px;
      }
    }

    @media(max-width: 425px) {
      padding: 0 16px;
    }

    @media(max-width: 1380px) {
      zoom: 80%;
    }

    @media(max-width: 1232px) {
      zoom: 100%;
    }
  }

  body {
    max-width: 1232px;
    width: 100%;
    background: var(--Black-900) !important;
  }

  h1, h2, h3, h4, p {
    transition: all 0.4s ease-in-out;

    margin: 0;
    font-family: "Inter", sans-serif;
    font-style: normal;
    color: var(--White);
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  input {
    appearance: none;
    border: none;
    background-color: transparent;
    outline: none;

    gap: 4px;
    border: 1px solid var(--Black-800);
    padding: 12px 16px;
    border-radius: 16px;
    color: var(--White);

    font-family: "Inter";
    font-size: 16px;
    color: var(--White);
  } 



  button {
    cursor: pointer;
    outline: none;
    appearance: none;
    border: none;
    background: transparent;
  }

`;
