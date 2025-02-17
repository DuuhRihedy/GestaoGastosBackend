import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: 20px; /* Espaçamento de 20px ao redor */
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .app-header {
    text-align: center;
    margin-bottom: 20px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  nav ul li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryOrange};
    font-weight: bold;
  }

  main {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
  }

  th, td {
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export default GlobalStyle;
