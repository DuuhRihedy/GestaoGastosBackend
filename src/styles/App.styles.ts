import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  text-align: center;
`;

export const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 0;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }
  li {
    margin: 0 15px;
  }
  a {
    color: ${({ theme }) => theme.colors.primaryBlue};
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;
