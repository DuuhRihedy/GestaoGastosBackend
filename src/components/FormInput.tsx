import styled from 'styled-components';

export const InputField = styled.div`
  margin-bottom: 15px;
  label {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryBlue};
    display: block;
  }
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;
