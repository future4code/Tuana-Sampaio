import React from 'react';

import styled from "styled-components";



const Card = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

 const BigcardContainer = styled.div ` 
    
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;


 `;
    


const Titulo = styled.h4 `
    margin-bottom: 15px;
`;


const  Bigcard = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;


` ;
    




function CardGrande(props) {
    return (
        <BigcardContainer className="bigcard-container">
            <Card src={ props.imagem } />
            <Bigcard>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </Bigcard>
        </BigcardContainer>
    )
}

export default CardGrande;