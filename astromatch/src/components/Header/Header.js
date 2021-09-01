import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 37%;
    
`
 


function Header(props) {
    return (
      
      <HeaderContainer>
        
             <h1>ASTROMATCH</h1>
             
             
      </HeaderContainer>
    );
  }
  //<button onClick = {() => props.mudaTela("TelaMatches")} >Matches</button>
  export default Header;