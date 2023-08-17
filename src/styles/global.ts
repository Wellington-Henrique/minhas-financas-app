import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray900};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray700};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray800};
    border-radius: 4px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray900}; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }
`