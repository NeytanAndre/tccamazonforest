import React, { useState } from "react";
import './contribuir.css';
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { toast } from 'react-toastify';
 
export default function Contribuir() {
    const [amount, setAmount] = useState('');
    const [pixCode, setPixCode] = useState('');
 
    // Função para gerar um código PIX único
    const generatePixCode = () => {
        return `PIX-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPixCode = generatePixCode(); // Gerar o código PIX
        setPixCode(newPixCode);
        toast.success(`Você contribuiu com R$ ${amount} via PIX. Código PIX: ${newPixCode}. Obrigado pela sua contribuição!`);
    }
 
    return (
        <div>
            <Header />
            <div className="contribuir-container">
                <h1 className="aga1">Contribua para a Preservação da Amazônia</h1>
                <p className="intro-text">
                    Sua ajuda é fundamental para proteger a maior floresta tropical do mundo.
                    Contribua com qualquer valor e faça parte dessa causa nobre!
                </p>
                <form onSubmit={handleSubmit} className="contribuir-form">
                    <div className="input-group">
                        <label htmlFor="amount">Digite o valor da contribuição:</label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="Ex: 50,00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
 
                    {/* Removido o campo de seleção de método de pagamento */}
                    <div className="input-group">
                        <label>Pagamento via PIX</label>
                        <p>O pagamento será realizado através de um código PIX gerado automaticamente.</p>
                    </div>
 
                    <button type="submit" className="cta-button2">Contribuir Agora</button>
                </form>
 
                {pixCode && (
                    <div className="pix-code">
                        <h2>Código PIX gerado:</h2>
                        <p>{pixCode}</p>
                    </div>
                )}
            </div>
            {/* <Footer /> */}
        </div>
    );
}