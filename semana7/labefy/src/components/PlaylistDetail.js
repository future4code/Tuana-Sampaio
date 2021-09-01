import React from "react";
import styled from "styled-components";
import axios from "axios"


const InfoPlaylistDetailContainer = styled.div`
    

`





class PlaylistDetail extends React.Component{
    render(){
        return(
            <InfoPlaylistDetailContainer> 
            <h1>detalhes</h1>
            
            <button onClick = {() => this.props.mudarTela("Playlists")}>Voltar para playlists</button>
            </InfoPlaylistDetailContainer>
        ) 
                 
    }
    
        
    }



    export default PlaylistDetail ;