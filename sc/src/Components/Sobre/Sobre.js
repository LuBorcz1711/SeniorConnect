import './Sobre.css';
import { FaHeart, FaShieldAlt, FaUserNurse, FaClock } from 'react-icons/fa';

export default function Sobre() {
  return (
    <section className="section-sobre">
      <div className="sobre-container">

        {/* HEADER */}
        <div className="sobre-header">
          <h2>Por Que Escolher a Vila Serena?</h2>
          <p>
            Somos mais que uma casa de repouso. Somos uma família dedicada a proporcionar
            qualidade de vida, dignidade e felicidade.
          </p>
        </div>

        {/* CARDS */}
        <div className="sobre-cards">

          <div className="card">
            <div className="icon"><FaHeart /></div>
            <h4>Cuidado Personalizado</h4>
            <p>
              Planos de cuidado individualizados para atender às necessidades específicas de cada residente.
            </p>
          </div>

          <div className="card">
            <div className="icon"><FaShieldAlt /></div>
            <h4>Segurança 24/7</h4>
            <p>
              Monitoramento contínuo com câmeras e equipe médica disponível em tempo integral.
            </p>
          </div>

          <div className="card">
            <div className="icon"><FaUserNurse /></div>
            <h4>Equipe Qualificada</h4>
            <p>
              Profissionais experientes, incluindo médicos, enfermeiros e cuidadores.
            </p>
          </div>

          <div className="card">
            <div className="icon"><FaClock /></div>
            <h4>Atividades Diárias</h4>
            <p>
              Programação variada de atividades recreativas, sociais e terapêuticas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
