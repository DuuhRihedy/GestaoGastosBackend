import React, { useState, useEffect } from 'react';
import api from '../api';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

const ListPeople = () => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const response = await api.get('/pessoas');
        setPessoas(response.data);
      } catch (error) {
        console.error('Erro ao listar pessoas:', error);
      }
    };
    
    fetchPessoas();
  }, []);

  return (
    <div>
      <h2>Lista de Pessoas</h2>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.id}>
            {pessoa.nome} - {pessoa.idade} anos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPeople;
