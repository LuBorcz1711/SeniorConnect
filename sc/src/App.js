import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import Sobre from './Components/Sobre/Sobre';
import Servicos from './Components/Servicos/Servicos';

function App() {

  return (
    <div className="App">
      <Header />

      <Inicio />

      <Sobre />

      <Servicos />
    </div>
  );
}

export default App;
