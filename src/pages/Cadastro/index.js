import React, { useState } from "react";
import './cadastro.css';
import { IoReturnDownBack } from "react-icons/io5";
import api from "../../services/api";

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [tipoUsuario, setTipoUsuario] = useState('Funcionario')
    const [codStatusUsuario, setCodStatusUsuario] = useState(true)
    const [rm, setRm] = useState('')

    const handleCadastrarUsuario = async () => {
        try {
            if (senha !== confirmarSenha)
                return alert('As senha não se coincidem')

            const response = await api.post('users/funcionario/', {
                nome: nome,
                email: email,
                senha: senha,
                tipoUsuario: tipoUsuario,
                codStatusUsuario: codStatusUsuario
            })

            if (response != null && response.status == 201) {
                alert('Cadastrado com success')
            }
        } catch (error) {
            console.warn('Error => ', error)
        }
    }

    return (
        <div className="cadastro-container">
            <div className="cadastro-box">
                <h2>Cadastre-se</h2>
                <form className="cadastro-form">
                    <div className="input-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Seu e-mail" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Sua senha" onChange={(e) => setSenha(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirma-senha">Confirmar Senha</label>
                        <input type="password" id="confirma-senha" placeholder="Confirme sua senha" onChange={(e) => setConfirmarSenha(e.target.value)} required />
                    </div>
                    <button type="submit" className="cta-button" onClick={handleCadastrarUsuario}>Cadastrar</button>
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
