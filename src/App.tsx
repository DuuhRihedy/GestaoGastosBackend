// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import CadastroPessoa from './pages/CadastroPessoa';
import CadastroTransacao from './pages/CadastroTransacao';
import ConsultaTotais from './pages/ConsultaTotais';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="app-container"> {/* Container para centralizar o conteúdo */}
          <header className="app-header">
            <h1>Sistema de Controle de Gastos</h1>
            <nav>
              <ul>
                <li><a href="/">Cadastro de Pessoas</a></li>
                <li><a href="/transacao">Cadastro de Transações</a></li>
                <li><a href="/pessoas">Consulta de Totais</a></li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<CadastroPessoa />} />
              <Route path="/transacao" element={<CadastroTransacao />} />
              <Route path="/pessoas" element={<ConsultaTotais />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
