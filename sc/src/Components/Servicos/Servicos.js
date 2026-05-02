import './Servicos.css';
import {
    FaStethoscope,
    FaUtensils,
    FaHeartbeat,
    FaHome,
    FaMusic,
    FaLeaf,
    FaGamepad,
    FaSpa
} from 'react-icons/fa';
import Frente from "../../assets/frente.jpg"

export default function Servicos() {
    return (
        <section className="section-servicos">
            <div className="servicos-container">

                {/* HEADER */}
                <div className="servicos-header">
                    <h2>Nossos Serviços</h2>
                    <p>
                        Oferecemos um conjunto completo de serviços para garantir o conforto, saúde e bem-estar dos nossos residentes.
                    </p>
                </div>

                {/* CARDS */}
                <div className="servicos-grid">

                    <div className="servico-card">
                        <div className="icon"><FaStethoscope /></div>
                        <div>
                            <h4>Cuidados Médicos</h4>
                            <p>Acompanhamento médico, administração de medicamentos e monitoramento de saúde.</p>
                        </div>
                    </div>

                    <div className="servico-card">
                        <div className="icon"><FaUtensils /></div>
                        <div>
                            <h4>Alimentação Balanceada</h4>
                            <p>Refeições nutritivas preparadas por nutricionistas, respeitando dietas especiais.</p>
                        </div>
                    </div>

                    <div className="servico-card">
                        <div className="icon"><FaHeartbeat /></div>
                        <div>
                            <h4>Fisioterapia</h4>
                            <p>Sessões de fisioterapia para manutenção da mobilidade e prevenção de lesões.</p>
                        </div>
                    </div>

                    <div className="servico-card">
                        <div className="icon"><FaHome /></div>
                        <div>
                            <h4>Acomodações Confortáveis</h4>
                            <p>Quartos amplos e confortáveis, com opções individuais ou compartilhadas.</p>
                        </div>
                    </div>

                    <div className="servico-card">
                        <div className="icon"><FaMusic /></div>
                        <div>
                            <h4>Musicoterapia</h4>
                            <p>Atividades artísticas, musicais e recreativas para estímulo cognitivo e social.</p>
                        </div>
                    </div>

                    <div className="servico-card">
                        <div className="icon"><FaLeaf /></div>
                        <div>
                            <h4>Espaços ao Ar Livre</h4>
                            <p>Jardins e áreas verdes para passeios e contato com a natureza.</p>
                        </div>
                    </div>

                    <div className="servico-card">
                        <div className="icon"><FaGamepad /></div>
                        <div>
                            <h4>Atividades Recreativas</h4>
                            <p>Momentos de lazer com jogos, artesanato e atividades que estimulam a convivência e o bem-estar.</p>
                        </div>
                    </div>

                    <div className="servico-card">
                        <div className="icon"><FaSpa /></div>
                        <div>
                            <h4>Cuidados Pessoais</h4>
                            <p>Cuidados especializados para cabelos e unhas, realçando sua beleza e autoestima.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
