import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import Sobre from './Components/Sobre/Sobre';
import Servicos from './Components/Servicos/Servicos';
import Galeria from './Components/Galeria/Galeria';
import Contato from './Components/Contato/Contato';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />

      <section id="inicio">
        <Inicio />
      </section>

      <section id="sobre">
        <Sobre />
      </section>

      <section id="servicos">
        <Servicos />
      </section>

      <section id="galeria">
        <Galeria />
      </section>

      <section id="contato">
        <Contato />
      </section>

      <Footer />
    </div>
  );
}

export default App;
