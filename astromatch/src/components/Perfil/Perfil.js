import React from "react";
import styled from "styled-components"



const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
`

const UserPhoto = styled.img`
    height: 200px;
    width: 200px;
    margin-right: 20px;
    border-radius: 50%;

`



const Perfil = (props) => {
    return(
        <PerfilContainer>
            <UserPhoto src={props.imagemUsuario} alt={'Imagem do usuario'}/>
            <label> {props.nome} </label> 
            <label> {props.descricao} </label>
        </PerfilContainer>
    )
}

export default Perfil;