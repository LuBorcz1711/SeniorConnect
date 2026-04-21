import React, { useEffect, useState } from "react";
import {
    FaUser,
    FaCommentDots,
    FaList,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock
} from "react-icons/fa";
import "./Contato.css";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState('');
    const [tipo, setTipo] = useState("");
    const [erros, setErros] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validar = () => {
        let novosErros = {};

        if (!nome.trim()) {
            novosErros.nome = 'Nome é obrigatório';
        }

        if (!tipo) {
            novosErros.tipo = 'Selecione um tipo de interesse';
        }

        if (!mensagem.trim()) {
            novosErros.mensagem = 'Mensagem é obrigatória';
        }

        setErros(novosErros);

        return Object.keys(novosErros).length === 0;
    };

    useEffect(() => {
        if (enviado) {
            setNome('');
            setTipo('');
            setMensagem('');
            setEnviado(false);
        }
    }, [enviado]);

    const handleSubmit = () => {
        if (!validar()) return;

        console.log({
            nome,
            tipo,
            mensagem
        });

        const message = `
            Olá, meu nome é ${nome}.
            Tipo de interesse: ${tipo}
            Mensagem:
            ${mensagem}`;

        const url = `https://wa.me/5541998220040?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");

        setEnviado(true);
    };

    return (
        <div className="contact-section">
            <div className="contact-header">
                <h2>Entre em Contato</h2>
                <p>Agende uma visita e conheça pessoalmente nossas instalações e serviços.</p>
            </div>

            <div className="contact-content">
                {/* Lado Esquerdo - Informações */}
                <div className="contact-info">

                    <div className="info-item">
                        <div className="icon-wrapper">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="info-text">
                            <h3>Endereço</h3>
                            <p>
                                Rua Bortolo Gusso, 194<br />
                                Capão Raso - Curitiba, PR<br />
                                CEP: xxxx - xxxx
                            </p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-wrapper">
                            <FaPhone />
                        </div>
                        <div className="info-text">
                            <h3>Telefone</h3>
                            <p>
                                3346-6054<br />
                                (41) 99982-1008
                            </p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-wrapper">
                            <FaEnvelope />
                        </div>
                        <div className="info-text">
                            <h3>E-mail</h3>
                            <p>casarepouso.vovomaria@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-wrapper">
                            <FaClock />
                        </div>
                        <div className="info-text">
                            <h3>Horário de Visitas</h3>
                            <p>
                                Segunda a Sexta: 9h às 17h<br />
                                Sábados: 9h às 17h
                            </p>
                        </div>
                    </div>

                </div>

                {/* Lado Direito - Formulário */}
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            {erros.nome && <span className="erro">{erros.nome}</span>}
                        </div>

                        <div className="form-group">
                            <label>Tipo de Interesse</label>
                            <select
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                            >
                                <option value="" disabled>
                                    Escolha uma opção
                                </option>
                                <option value="visita">Visita</option>
                                <option value="internacao">Internação</option>
                                <option value="info">Informações gerais</option>
                            </select>
                            {erros.tipo && <span className="erro">{erros.tipo}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                id="mensagem"
                                placeholder="Como podemos ajudá-lo?"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                            />
                            {erros.mensagem && <span className="erro">{erros.mensagem}</span>}
                        </div>

                        <button type="submit" className="submit-btn" onClick={handleSubmit}>
                            Enviar Mensagem
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}