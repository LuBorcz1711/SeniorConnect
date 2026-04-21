import './Header.css';
import { useState } from 'react';
import { scrollToSection } from '../../ScrollToSection';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <span className="logo-desktop">
            Casa de Repouso Vovó Maria
          </span>

          <span className="logo-mobile">
            Vovó Maria
          </span>
        </h1>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => handleNavigate('inicio')}>Início</button>
          <button onClick={() => handleNavigate('sobre')}>Sobre</button>
          <button onClick={() => handleNavigate('servicos')}>Serviços</button>
          <button onClick={() => handleNavigate('galeria')}>Galeria</button>

          <button className="contact-button" onClick={() => handleNavigate('contato')}>Contato</button>
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