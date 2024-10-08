import React from "react";
import Slider from "react-slick";
import './inicio.css';
import Header from "../../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Noticias from "../../components/Noticias";
import AmazoniaPreservacao from "../../components/AmazoniaPreservacao";
import Footer from "../../components/Footer";

export default function Inicio() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="inicio-container">
            <Header />
            <main className="main-content">
                <section className="hero-section">
                    <div className="text-content">
                        <h1>Preservação da Floresta Amazônica</h1>
                        <p>
                            Unindo esforços para proteger a maior floresta tropical do mundo. A Amazônia é essencial para o equilíbrio ecológico e a preservação da biodiversidade.
                        </p>
                        <div className="button-group">
                            <button className="cta-button donate-button"><a href="/contribuir" className="custom-link ">Contribuir para a preservação</a></button>
                            <button className="cta-button info-button"><a href="/noticias" className="custom-link ">Saiba mais</a></button>
                        </div>
                    </div>
                    <div className="image-container">
                        <Slider {...sliderSettings}>
                            <div>
                                <img src="https://media.istockphoto.com/id/935746242/pt/foto/mata-atlantica-atlantic-forest-in-brazil.jpg?s=612x612&w=0&k=20&c=XoiwWlcQ9odpWvNrpAeq1ZM3fXEFqVbARaMo-uD9LYA=" alt="Amazônia 1" className="hero-image" />
                            </div>
                            <div>
                                <img src="https://s5.static.brasilescola.uol.com.br/be/2022/10/vista-floresta-amazonica.jpg" alt="Amazônia 2" className="hero-image" />
                            </div>
                            <div>
                                <img src="https://media.istockphoto.com/id/1454581645/pt/foto/aerial-view-of-amazon-rainforest-in-peru.jpg?s=612x612&w=0&k=20&c=Ik_f4CzxkFUJES7_xoqsBl_aSq4BKhUQ2-zbD3OQeas=" alt="Amazônia 3" className="hero-image" />
                            </div>
                        </Slider>
                    </div>
                </section>
            </main>

            <section className="icon-section" id="about">
                <h2>Nosso Compromisso</h2>
                <div className="commitment-description">
                    <p>Nosso trabalho na preservação da Amazônia vai além da proteção das árvores. Estamos comprometidos em garantir um futuro sustentável para a floresta, a fauna e as comunidades locais.</p>
                </div>
                <div className="icon-container">
                    <div className="icon-item">
                        <span role="img" aria-label="Árvore">🌳</span>
                        <h3>Proteção da Floresta</h3>
                        <p>Cuidamos da Amazônia com programas que visam evitar o desmatamento e promover o reflorestamento sustentável.</p>
                    </div>
                    <div className="icon-item">
                        <span role="img" aria-label="Folha">🍃</span>
                        <h3>Biodiversidade</h3>
                        <p>Preservamos a rica fauna e flora da Amazônia, mantendo o equilíbrio natural e protegendo espécies em extinção.</p>
                    </div>
                    <div className="icon-item">
                        <span role="img" aria-label="Globo">🌍</span>
                        <h3>Consciência Global</h3>
                        <p>Trabalhamos para aumentar a conscientização global sobre a importância da Amazônia para o clima e para a vida no planeta.</p>
                    </div>
                    <div className="icon-item">
                        <span role="img" aria-label="Mãos ajudando">🤝</span>
                        <h3>Colaboração</h3>
                        <p>Unimos forças com comunidades locais, ONGs e governos para garantir o futuro da Amazônia para as próximas gerações.</p>
                    </div>
                </div>
            </section>

            {/* <Noticias /> */}
                            <AmazoniaPreservacao />
            <Footer />
        </div>
    );
}
