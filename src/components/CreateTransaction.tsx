import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../api';

const CreateTransaction = () => {
  const [descricao, setDescricao] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [tipo, setTipo] = useState<'despesa' | 'receita'>('despesa');
  const [pessoaId, setPessoaId] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/transacoes', { descricao, valor, tipo, pessoaId });
      setMessage(`Transação criada com sucesso: ${response.data.id}`);
    } catch (error) {
      setMessage('Erro ao criar transação');
    }
  };

  const handleDescricaoChange = (e: ChangeEvent<HTMLInputElement>) => setDescricao(e.target.value);
  const handleValorChange = (e: ChangeEvent<HTMLInputElement>) => setValor(e.target.value);
  const handleTipoChange = (e: ChangeEvent<HTMLSelectElement>) => setTipo(e.target.value as 'despesa' | 'receita');
  const handlePessoaIdChange = (e: ChangeEvent<HTMLInputElement>) => setPessoaId(e.target.value);

  return (
    <div>
      <h2>Criar Transação</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={descricao}
          onChange={handleDescricaoChange}
          placeholder="Descrição"
          required
        />
        <input
          type="number"
          value={valor}
          onChange={handleValorChange}
          placeholder="Valor"
          required
        />
        <select
          value={tipo}
          onChange={handleTipoChange}
        >
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </select>
        <input
          type="number"
          value={pessoaId}
          onChange={handlePessoaIdChange}
          placeholder="Pessoa ID"
          required
        />
        <button type="submit">Criar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateTransaction;
