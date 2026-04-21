import "./Footer.css";
import { scrollToSection } from "../../ScrollToSection";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="grid-footer">

                <div className="footer-col">
                    <h4 className="title">Vovó Maria</h4>
                    <p>Cuidando com amor e dedicação há mais de 25 anos.</p>
                </div>

                <div className="footer-col">
                    <h4>Links Rápidos</h4>
                    <ul className="footer-links">
                        <li>
                            <button onClick={() => scrollToSection('inicio')}>Início</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('sobre')}>Sobre</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('servicos')}>Serviços</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('galeria')}>Galeria</button>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Serviços</h4>
                    <ul>
                        <li>Cuidados Médicos</li>
                        <li>Fisioterapia</li>
                        <li>Terapia Ocupacional</li>
                        <li>Nutricionista</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contato</h4>
                    <ul>
                        <li>(41) 99982-1008</li>
                        <li>casarepouso.vovomaria@gmail.com</li>
                        <li>Rua Bortolo Gusso, 194</li>
                        <li>Capão Raso - Curitiba, PR</li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Casa de Repouso Vovó Maria. Todos os direitos reservados.
                    Feito com amor para nossos residentes.
                </p>
            </div>
        </footer>
    );
}