import "./Galeria.css";
import { imagens } from "./imagens";
import React, { useState } from "react";

export default function Galeria() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <section className="galeria">
            <div className="galeria-header">
                <h2>Nossa Galeria</h2>
                <p>
                    Conheça nossas instalações e veja como proporcionamos um ambiente acolhedor e feliz.
                </p>
            </div>

            {/* GRID (desktop) */}
            <div className="galeria-grid">
                {imagens.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Ambiente ${index + 1}`}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {/* CAPA (mobile) */}
            <div className="galeria-mobile">
                <img
                    src={imagens[0]}
                    alt="Ver galeria"
                    onClick={() => setSelectedIndex(0)}
                />
                <div className="overlay">Ver galeria</div>
            </div>

            {/* MODAL */}
            {selectedIndex !== null && (
                <div className="lightbox" onClick={() => setSelectedIndex(null)}>

                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button className="close" onClick={() => setSelectedIndex(null)}>×</button>

                        <button
                            className="prev"
                            onClick={() =>
                                setSelectedIndex((prev) =>
                                    prev === 0 ? imagens.length - 1 : prev - 1
                                )
                            }
                        >
                            ‹
                        </button>

                        <img
                            src={imagens[selectedIndex]}
                            alt="Imagem ampliada"
                            className="lightbox-img"
                        />

                        <button
                            className="next"
                            onClick={() =>
                                setSelectedIndex((prev) =>
                                    prev === imagens.length - 1 ? 0 : prev + 1
                                )
                            }
                        >
                            ›
                        </button>

                    </div>
                </div>
            )}
        </section>
    )
}