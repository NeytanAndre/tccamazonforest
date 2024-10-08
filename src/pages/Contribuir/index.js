import React, { useState } from "react";
import './contribuir.css';
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { toast } from 'react-toastify';

export default function Contribuir() {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Você contribuiu com R$ ${amount} via ${paymentMethod}. Obrigado pela sua contribuição!`);
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

                    <div className="input-group">
                        <label htmlFor="paymentMethod">Escolha o método de pagamento:</label>
                        <select
                            id="paymentMethod"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="Pix">Pix</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                            <option value="Boleto Bancário">Boleto Bancário</option>
                        </select>
                    </div>

                    <button type="submit" className="cta-button2">Contribuir Agora</button>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
