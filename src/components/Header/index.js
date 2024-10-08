import React from "react";
import './header.css';
import { MdOutlineForest } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            {/* <MdOutlineForest /> */}
            <div className="logo">
                <a href="/" className="custom-link">
                <h1>Amazônia Verde</h1>
                </a>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    {/* <li><a href="#about">Nosso Compromisso</a></li>
                    <li><a href="#services">Preservação</a></li> */}
                    <li><a href="/contribuir">Contribuir</a></li>
                    <li><a href="/noticias">Notícias</a></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                <button ><Link to={'/login'} className="custom-link">Entrar</Link></button>
                <button ><Link to={'/cadastro'} className="custom-link">Cadastro</Link></button>
            </div>
        </header>
    );
}
