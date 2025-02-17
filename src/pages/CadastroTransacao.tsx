import React, { useState } from 'react';
import axios from 'axios';
import { InputField, SubmitButton } from '../components/FormInput';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
  width: 400px;
`;

const CadastroTransacao = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState('despesa');
  const [pessoaId, setPessoaId] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validações antes de enviar
    if (!descricao.trim()) {
      setError('A descrição não pode estar vazia.');
      return;
    }
    if (valor <= 0) {
      setError('O valor deve ser maior que 0.');
      return;
    }
    if (pessoaId <= 0) {
      setError('O ID da pessoa deve ser maior que 0.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/transacoes', { descricao, valor, tipo, pessoaId });
      alert('Transação cadastrada com sucesso!');
      setDescricao('');
      setValor(0);
      setPessoaId(0);
      setError('');
    } catch (error) {
      alert('Erro ao cadastrar transação');
    }
  };

  return (
    <FormContainer>
      <h2>Cadastro de Transação</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputField>
          <label>Descrição:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </InputField>
        <InputField>
          <label>Valor:</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
            required
          />
        </InputField>
        <InputField>
          <label>Tipo:</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
          </select>
        </InputField>
        <InputField>
          <label>ID Pessoa:</label>
          <input
            type="number"
            value={pessoaId}
            onChange={(e) => setPessoaId(Number(e.target.value))}
            required
          />
        </InputField>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CadastroTransacao;
