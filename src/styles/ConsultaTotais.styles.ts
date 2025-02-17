import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
  th {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: ${({ theme }) => theme.colors.white};
  }
  tr:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const TotalContainer = styled.div`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 15px;
  border-radius: 8px;
`;

export const TotalText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryBlue};
`;
