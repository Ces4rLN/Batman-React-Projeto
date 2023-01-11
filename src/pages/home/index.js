import React from "react";
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/batman2022.mp4'
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Home(){
   

    return(
        <>
            <Header/>
            <div id='banner'></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video}/>
                        Seu navegador não possui suporte para video.
                    </video>
                
                    <div id="sinopse">
                        <p className="description">
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se
                            encontra nas profundezas mais sombrias de Gotham City. Com poucos
                            aliados confiáveis, o vigilante solitário se estabelece como a
                            personificação da vingança para a população.
                        </p>
                        <Link style={{textDecoration: 'none'}} to='/Garantir'>
                            <button className="button">Garantir Vaga</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home