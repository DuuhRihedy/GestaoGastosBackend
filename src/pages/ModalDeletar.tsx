import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryOrange};
  border: 1px solid ${({ theme }) => theme.colors.primaryOrange};
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

interface ModalDeletarProps {
  isOpen: boolean;
  onConfirm: (id: number) => void;
  onCancel: () => void;
  pessoaId: number | null;
}

const ModalDeletar: React.FC<ModalDeletarProps> = ({ isOpen, onConfirm, onCancel, pessoaId }) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    if (pessoaId) {
      console.log("Deletando pessoa com ID:", pessoaId); // Para depuração
      onConfirm(pessoaId); // Chama a função de confirmação de exclusão no componente pai
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Tem certeza que deseja excluir esta pessoa?</h3>
        <ModalButton onClick={handleDelete}>Sim, excluir</ModalButton>
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalDeletar;
