import React from "react";
import './amazoniaPreservacao.css';
import { FaTree, FaHandHoldingWater, FaLeaf, FaGlobeAmericas } from 'react-icons/fa';
import Header from "../Header";

export default function AmazoniaPreservacao() {
    return (

        <div className="preservacao-container" id="services">
            <h2>Preservação da Amazônia</h2>
            <p className="intro-text">A preservação da maior floresta tropical do mundo é uma missão global. <br /><br />Conheça as iniciativas e os progressos na proteção da Amazônia.</p>

            <div className="icons-section">
                <div className="icon-card">
                    <FaTree className="icon2" />
                    <h3>Reflorestamento</h3>
                    <p>Iniciativas de reflorestamento estão replantando áreas degradadas para devolver vida à floresta.</p>
                </div>
                <div className="icon-card">
                    <FaHandHoldingWater className="icon2" />
                    <h3>Proteção dos Rios</h3>
                    <p>Projetos voltados para a preservação dos rios e nascentes da região amazônica estão em expansão.</p>
                </div>
                <div className="icon-card">
                    <FaLeaf className="icon2" />
                    <h3>Biodiversidade</h3>
                    <p>A preservação das espécies é uma das prioridades na luta contra o desmatamento.</p>
                </div>
                <div className="icon-card">
                    <FaGlobeAmericas className="icon2" />
                    <h3>Impacto Global</h3>
                    <p>A Amazônia é vital para a regulação climática global e a produção de oxigênio.</p>
                </div>
            </div>

            <div className="progress-section">
                <h3>Progresso das Ações de Preservação</h3>
                <div className="progress-bar">
                    <span className="progress" style={{ width: '65%' }}>65% Concluído</span>
                </div>
            </div>

            <div className="footer-image">
                <img src="https://wallpapers.com/images/hd/vista-aerea-do-rio-amazonas-vc7k2imonucpr1up.jpg" alt="Amazônia Preservada" />
            </div>
        </div>

    );
}
