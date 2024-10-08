import React, { useState } from 'react';
import './login.css'; // Adicione o CSS específico para o Login
import { IoReturnDownBack } from "react-icons/io5";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Bem-vindo de volta!</h1>
                <p>Por favor, entre com seus dados</p>
                <form >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <div className="options-group">
                        <a href="/" className="forgot-password">Esqueceu a senha?</a>
                    </div>
                    <button type="submit" className="login-button">Entrar</button>
                </form>
                <div className="signup-prompt">
                    <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </div>
                <div>
                    <a href="/">
                    <IoReturnDownBack className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}
