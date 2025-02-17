import React from 'react';
import { Navigation } from '../styles/App.styles';

const AppNavigation: React.FC = () => {
  return (
    <Navigation>
      <ul>
        <li><a href="/">Cadastro de Pessoas</a></li>
        <li><a href="/transacao">Cadastro de Transações</a></li>
        <li><a href="/pessoas">Consulta de Totais</a></li>
      </ul>
    </Navigation>
  );
};

export default AppNavigation;
