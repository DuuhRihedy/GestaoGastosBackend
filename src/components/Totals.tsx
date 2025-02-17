import React, { useState, useEffect } from 'react';
import api from '../api';

interface TotalsResponse {
  totalReceitas: number;
  totalDespesas: number;
  saldoGeral: number;
}

const Totals = () => {
  const [totals, setTotals] = useState<TotalsResponse | null>(null);

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const response = await api.get('/pessoas'); // Verifique o endpoint correto
        setTotals(response.data.totalGeral);  // Acessando o total geral
      } catch (error) {
        console.error('Erro ao buscar totais:', error);
      }
    };

    fetchTotals();
  }, []);

  return (
    <div>
      <h2>Totais</h2>
      {totals ? (
        <div>
          <p>Receitas Totais: R$ {totals.totalReceitas}</p>
          <p>Despesas Totais: R$ {totals.totalDespesas}</p>
          <p>Saldo Total: R$ {totals.saldoGeral}</p>
        </div>
      ) : (
        <p>Carregando totais...</p>
      )}
    </div>
  );
};

export default Totals;
