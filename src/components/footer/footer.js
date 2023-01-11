import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/the-batman-logo-2022.jpg'

function Footer(){
    return(
        <footer>
            <img id='logo' src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvedor: Augusto César :)</span>
            <nav className='footer-navigation'>
                <ul className='footer-list'>
                    <Link style={{textDecoration: 'none'}} to='/'>            
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <li>Comentários</li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;