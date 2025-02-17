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

const CadastroPessoa = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validações antes de enviar
    if (!nome.trim()) {
      setError('O nome não pode estar vazio.');
      return;
    }
    if (idade <= 0) {
      setError('A idade deve ser maior que 0.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/pessoas', { nome, idade });
      alert('Pessoa cadastrada com sucesso!');
      setNome('');
      setIdade(0);
      setError('');
    } catch (error) {
      alert('Erro ao cadastrar pessoa');
    }
  };

  return (
    <FormContainer>
      <h2>Cadastro de Pessoa</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputField>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </InputField>

        <InputField>
          <label htmlFor="idade">Idade:</label>
          <input
            id="idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
            required
          />
        </InputField>

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CadastroPessoa;
