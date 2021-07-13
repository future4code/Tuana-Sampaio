import React from 'react';

import styled from "styled-components";





const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`;

const SmallCard = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

 const Titulo = styled.h4 ` 
    margin-bottom: 15px;
`;

const CardPequeno = styled.div` 
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`;

function cardPequeno(props) {
    return (
        <Container className="smallCard">
            <SmallCard src={ props.imagem2 } />
            <CardPequeno>
                <Titulo>{ props.email }</Titulo>
                <p>{ props.endereco }</p>
            </CardPequeno>
        </Container>
    )
}

export default cardPequeno;