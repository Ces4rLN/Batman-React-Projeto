import Header from '../../components/header/header';
import React from "react";
import Footer from '../../components/footer/footer';
import './Garantir.module.css'

function Garantir(){

        function agendarVaga(){
            alert('VAGA GARANTIDA!')
            alert('Fala ai pessoinha, passando aqui para agradecer por ter reservado um pouco do seu tempo e ter visto esse meu projetinho em React :) isso me ajuda muito, agradeço do coração S2')
        }
        
    return(
        <>
            <Header/>
            <div className='form-content'>
                <div className='formulario'>
                    <form onSubmit={agendarVaga}>
                        <label>Nome</label>
                            <input type='text' placeholder='Seu nome'/>
                        <label>Email</label>
                            <input type='email' placeholder='Seuemail@gmail.com' />
                        
                        <label>Telefone</label>
                            <input type='tel' placeholder='(DDD) 9 9999-9999'/>
                        
                        <label>Data</label>
                            <input type='date' placeholder=''/>  
                        <button id='bt' type='submit' > Agendar</button>
                    </form>                
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default Garantir