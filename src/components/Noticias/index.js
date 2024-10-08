import React from "react";
import './noticias.css';
import Header from "../Header";

export default function Noticias() {
    const noticias = [
        { id: 1, title: "Desmatamento na Amazônia aumenta em 2024", description: "A perda de cobertura florestal segue preocupante em áreas protegidas da Amazônia.", date: "03/10/2024", image: "https://s5.static.brasilescola.uol.com.br/be/2022/10/vista-floresta-amazonica.jpg" },
        { id: 2, title: "Comunidades indígenas lutam pela preservação", description: "Lideranças indígenas se mobilizam para proteger suas terras da exploração ilegal.", date: "02/10/2024", image: "https://imazon.org.br/wp-content/uploads/2018/04/floresta.jpg" },
        { id: 3, title: "Iniciativas de reflorestamento crescem", description: "Projetos de reflorestamento são ampliados para mitigar os efeitos do desmatamento.", date: "01/10/2024", image: "https://www.gov.br/mma/pt-br/assuntos/noticias/no-dia-da-amazonia-conheca-curiosidades-da-maior-floresta-tropical-do-mundo-e-acoes-que-unem-preservacao-e-desenvolvimento/parna_juruena_adriano-gambarini-c-1100x777.jpg/@@images/d31067f7-cf5d-4b62-bc19-72b93e0bc664.jpeg" },
        { id: 4, title: "Aquecimento global afeta a Amazônia", description: "O impacto das mudanças climáticas já é visível na maior floresta tropical do mundo.", date: "30/09/2024", image: "https://images.ecycle.com.br/wp-content/uploads/2022/09/30165506/35073192954_9300e87dc5_o-scaled.jpg.webp" },
        // { id: 5, title: "Biodiversidade ameaçada", description: "O desmatamento coloca em risco espécies que habitam unicamente a floresta amazônica.", date: "29/09/2024", image: "https://www.nationalgeographic.com.es/medio/2020/06/10/amazonia_f2ef3834_1254x836.jpg" },
        // { id: 6, title: "ONGs intensificam ações de preservação", description: "Organizações não governamentais lançam novas campanhas para preservar a Amazônia.", date: "28/09/2024", image: "https://uploads.jornaldebrasilia.com.br/2020/08/13162400/reflorestamento.jpg" }
    ];

    return (
        <div>
            <Header />
            <div className="noticias-page-container">
                <h2>Últimas Notícias da Amazônia</h2>
                <div className="noticias-page-grid">
                    {noticias.map(noticia => (
                        <div key={noticia.id} className="noticias-page-card">
                            <div className="noticias-page-image-container">
                                <img src={noticia.image} alt={noticia.title} className="noticias-page-image" />
                            </div>
                            <div className="noticias-page-content">
                                <h3>{noticia.title}</h3>
                                <p>{noticia.description}</p>
                                <span className="noticias-page-date">{noticia.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
