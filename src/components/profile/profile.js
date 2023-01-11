import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";


function Profile(){
    const {login} = useContext(UserContext);
    return(
        <div>
            {login ? 'Dados do Usuário' : 'Faça o seu Login para ter acesso as informações'}
            
        </div>
    )
}

export default Profile