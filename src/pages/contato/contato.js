import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ImgProf from "../../assets/imgContato/Picsart_22-12-28_00-57-22-217.jpg"
import LinkIcon from "../../assets/imgContato/icons8-linkedin-circundado-60.png"
import InstaIcon from "../../assets/imgContato/icons8-instagram-60.png"
import './styles.css'

function Contato(){
    return(
        <>
            <Header/>
            <section> 
                    <div className="card-container">
                        <div className="card-img">
                            <img id="img-profile" src={ImgProf}/>
                        </div>
                        <h3>Augusto César</h3>
                        <h6>Recife | PE</h6>
                        <p>Web Fullstack</p>
                        <div className="skills">
                            <h4>SKILLS</h4>
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>Node.js</li>
                                <li>TypeScript</li>
                            </ul>

                            <div className="media-sociais">
                                <img id="media-icons" src={LinkIcon}/>
                                <img id="media-icons" src={InstaIcon}/>
                            </div>
                        </div>
                </div>
            </section> 
            <Footer/>     
        </>
    )
}

export default Contato