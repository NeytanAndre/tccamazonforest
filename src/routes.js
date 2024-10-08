import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Contribuir from './pages/Contribuir'
import Noticias from './components/Noticias'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ < Inicio /> } />
                <Route path="/login" element= { <Login />} />
                <Route path="/cadastro" element= { <Cadastro />} />
                <Route path="/contribuir" element= { <Contribuir /> } />
                <Route path="/noticias" element= { <Noticias /> } />
            </Routes>
        </BrowserRouter>
    )
}