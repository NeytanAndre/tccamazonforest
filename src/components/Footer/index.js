import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; 2024 Seu Projeto. Todos os direitos reservados.</p>
                <div className="footer-links">
                    <a href="#sobre">Sobre Nós</a>
                    <a href="#contato">Contato</a>
                    <a href="#privacidade">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
}
