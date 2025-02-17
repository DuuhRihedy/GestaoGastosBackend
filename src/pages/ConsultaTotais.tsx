import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primaryOrange};
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const ConsultaTotais = () => {
  const [totais, setTotais] = useState<any[]>([]);
  const [totalGeral, setTotalGeral] = useState<any>(null);

  useEffect(() => {
    const fetchTotais = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pessoas');
        console.log(response.data); // Verifique a estrutura dos dados
        setTotais(response.data.totaisPorPessoa); // Suponho que a lista de pessoas esteja em `totaisPorPessoa`
        setTotalGeral(response.data.totalGeral);
      } catch (error) {
        alert('Erro ao carregar totais');
      }
    };

    fetchTotais();
  }, []);

  const handleDelete = async (pessoaId: number) => {
    console.log('ID da pessoa para excluir:', pessoaId); // Verifique o valor do ID
    if (pessoaId) {
      try {
        // Requisição para deletar a pessoa
        await axios.delete(`http://localhost:3000/pessoas/${pessoaId}`);
        // Atualiza a lista de totais removendo a pessoa deletada
        setTotais(totais.filter((total) => total.pessoaId !== pessoaId)); // Filtra pela chave correta
        alert('Pessoa excluída com sucesso!');
      } catch (error) {
        alert('Erro ao excluir pessoa');
      }
    } else {
      alert('ID inválido!');
    }
  };

  return (
    <div>
      <h2>Consulta de Totais</h2>
      {totais.length === 0 ? (
        <p>Nenhuma pessoa cadastrada.</p>
      ) : (
        <>
          <h3>Total Geral</h3>
          {totalGeral && (
            <div>
              <p>Total de Receitas: R$ {totalGeral.totalReceitas}</p>
              <p>Total de Despesas: R$ {totalGeral.totalDespesas}</p>
              <p>Saldo Geral: R$ {totalGeral.saldoGeral}</p>
            </div>
          )}
          <table>
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Total de Receitas</th>
                <th>Total de Despesas</th>
                <th>Saldo</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {totais.map((total) => (
                <tr key={total.pessoaId}> {/* Ajuste o nome da chave do ID aqui */}
                  <td>{total.nome}</td>
                  <td>{total.totalReceitas}</td>
                  <td>{total.totalDespesas}</td>
                  <td>{total.saldo}</td>
                  <td>
                    <DeleteButton onClick={() => handleDelete(total.pessoaId)}>
                      <FaTrash />
                    </DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ConsultaTotais;
