import React, { useState } from "react";
import './noticias.css';
import Header from "../Header";
 
export default function Noticias() {
    const [noticias, setNoticias] = useState([
        { id: 1, title: "Desmatamento na Amazônia aumenta em 2024", description: "A perda de cobertura florestal segue preocupante em áreas protegidas da Amazônia.", date: "03/10/2024", image: "https://s5.static.brasilescola.uol.com.br/be/2022/10/vista-floresta-amazonica.jpg" },
        { id: 2, title: "Comunidades indígenas lutam pela preservação", description: "Lideranças indígenas se mobilizam para proteger suas terras da exploração ilegal.", date: "02/10/2024", image: "https://imazon.org.br/wp-content/uploads/2018/04/floresta.jpg" },
        { id: 3, title: "Iniciativas de reflorestamento crescem", description: "Projetos de reflorestamento são ampliados para mitigar os efeitos do desmatamento.", date: "01/10/2024", image: "https://www.gov.br/mma/pt-br/assuntos/noticias/no-dia-da-amazonia-conheca-curiosidades-da-maior-floresta-tropical-do-mundo-e-acoes-que-unem-preservacao-e-desenvolvimento/parna_juruena_adriano-gambarini-c-1100x777.jpg/@@images/d31067f7-cf5d-4b62-bc19-72b93e0bc664.jpeg" },
        { id: 4, title: "Aquecimento global afeta a Amazônia", description: "O impacto das mudanças climáticas já é visível na maior floresta tropical do mundo.", date: "30/09/2024", image: "https://images.ecycle.com.br/wp-content/uploads/2022/09/30165506/35073192954_9300e87dc5_o-scaled.jpg.webp" }
    ]);
 
    const [editingNoticia, setEditingNoticia] = useState(null);
    const [editData, setEditData] = useState({ title: "", description: "", date: "", image: "" });
 
   
    const handleDelete = (id) => {
        setNoticias(noticias.filter(noticia => noticia.id !== id));
    };
 
   
    const handleEdit = (noticia) => {
        setEditingNoticia(noticia.id);
        setEditData({ title: noticia.title, description: noticia.description, date: noticia.date, image: noticia.image });
    };
 
   
    const handleSaveEdit = (id) => {
        setNoticias(noticias.map(noticia =>
            noticia.id === id ? { ...noticia, ...editData } : noticia
        ));
        setEditingNoticia(null);
    };
 
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };
 
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
                                {editingNoticia === noticia.id ? (
                                   
                                    <div className="edit-form">
                                        <input
                                            type="text"
                                            name="title"
                                            value={editData.title}
                                            onChange={handleChange}
                                            placeholder="Título"
                                        />
                                        <textarea
                                            name="description"
                                            value={editData.description}
                                            onChange={handleChange}
                                            placeholder="Descrição"
                                        />
                                        <input
                                            type="text"
                                            name="date"
                                            value={editData.date}
                                            onChange={handleChange}
                                            placeholder="Data"
                                        />
                                        <input
                                            type="text"
                                            name="image"
                                            value={editData.image}
                                            onChange={handleChange}
                                            placeholder="URL da imagem"
                                        />
                                        <button onClick={() => handleSaveEdit(noticia.id)}>Salvar</button>
                                    </div>
                                ) : (
                                   
                                    <>
                                        <h3>{noticia.title}</h3>
                                        <p>{noticia.description}</p>
                                        <span className="noticias-page-date">{noticia.date}</span>
                                        <button onClick={() => handleEdit(noticia)}>Editar</button>
                                        <button onClick={() => handleDelete(noticia.id)}>Excluir</button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}