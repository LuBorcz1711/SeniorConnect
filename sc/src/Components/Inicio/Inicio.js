import './Inicio.css';
import { useState } from 'react';
import fotoInicio from '../../assets/fotoInicio.jpg'
import Frente from '../../assets/frente.jpg'
import { scrollToSection } from '../../ScrollToSection';

export default function Inicio() {

  return (
    <div className="section1">
      <div className="section1-container">

        {/* TEXTO */}
        <div className="section1-left">
          <h1>
            Cuidado e Carinho <br />
            para Quem Você Ama
          </h1>

          <p>
            Na Casa de Repouso Vovó Maria, oferecemos um ambiente acolhedor e seguro,
            com profissionais qualificados dedicados ao bem-estar e
            felicidade dos nossos residentes.
          </p>

          <div className="section1-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('contato')}>
              Contatos →
            </button>

            <button className="btn-outline" onClick={() => scrollToSection('sobre')}>
              Saiba Mais
            </button>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="section1-right">
          <img
            src={Frente}
            alt="Idosa e cuidadora felizes"
          />

          <div className="experience-card">
            <strong>25+</strong>
            <span>Anos de Experiência</span>
          </div>
        </div>

      </div>
    </div>
  )
}