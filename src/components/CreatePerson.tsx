import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../api';

const CreatePerson = () => {
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<number | string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/pessoas', { nome, idade });
      setMessage(`Pessoa criada com sucesso: ${response.data.id}`);
    } catch (error) {
      setMessage('Erro ao criar pessoa');
    }
  };

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleIdadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIdade(e.target.value);
  };

  return (
    <div>
      <h2>Criar Pessoa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={handleNomeChange}
          placeholder="Nome"
          required
        />
        <input
          type="number"
          value={idade}
          onChange={handleIdadeChange}
          placeholder="Idade"
          required
        />
        <button type="submit">Criar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePerson;
