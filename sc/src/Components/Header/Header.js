import './Header.css';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Casa de Repouso Vovó Maria</h1>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Galeria</a>
          <button className="contact-button">Contato</button>
        </nav>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}