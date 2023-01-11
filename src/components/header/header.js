
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/the-batman-logo-2022.jpg'

function Header({nome}) {
    return(
        <header>
            <img id='logo' src={Logo}/>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>            
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/Garantir'>
                    <li>Garantir</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )

}

export default Header;