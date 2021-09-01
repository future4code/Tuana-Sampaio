import React from "react";
import styled from "styled-components";
import PlaylistDetail from "./PlaylistDetail";
import Playlists from "./Playlists";


const InfoPlaylistContainer = styled.div`
    display:flex;
    flex-direction: column;

`





class InfoPlaylist extends React.Component{
    state = {
        telaAtual: "Playlists"
    }

    mudarTela = (tela) => {
        this.setState( {telaAtual: tela})
      }

    render(){
        const renderizaTela = () => {
            if(this.state.telaAtual === "Playlists") {
                return <Playlists
                    mudarTela = {this.mudarTela} //passando a informação(função) por props para o componente Playlists
                /> 
            }else if (this.state.telaAtual === "PlaylistDetail") {
                return <PlaylistDetail
                    mudarTela = {this.mudarTela} //passando a informação(função) por props para o componente PlaylistDetail
                />
            }
        }
        return(
            <InfoPlaylistContainer> 
            
            
            {renderizaTela()}
            

            </InfoPlaylistContainer>
        ) 
    }
    
       
                 
    }



    export default InfoPlaylist ;