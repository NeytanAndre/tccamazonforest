import React from "react";
import './cadastro.css';
import { IoReturnDownBack } from "react-icons/io5";

export default function Cadastro() {
    return (
        <div className="cadastro-container">
            <div className="cadastro-box">
                <h2>Cadastre-se</h2>
                <form className="cadastro-form">
                    <div className="input-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Seu nome" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Seu e-mail" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Sua senha" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirma-senha">Confirmar Senha</label>
                        <input type="password" id="confirma-senha" placeholder="Confirme sua senha" required />
                    </div>
                    <button type="submit" className="cta-button">Cadastrar</button>
                </form>
                <p className="login-link">Já tem uma conta? <a href="/login">Entrar</a></p>
                <div>
                    <a href="/">
                    <IoReturnDownBack className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}
