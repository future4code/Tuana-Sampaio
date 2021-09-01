import React from "react";
import styled from "styled-components";
import axios from "axios"


const PlaylistContainer = styled.div`
    

`

const headers = {
    headers: {
      Authorization: "Tuana-Sampaio-Labenu"
    }
  }
  
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"





class Playlist extends React.Component{
    state ={
        playlists: [],
    }

    getAllPlaylists = () => {
        axios.get(url, headers)
        .then((res)=> {
          this.setState({playlists: res.data.result.list})
          console.log(res.data)
        }) 
        .catch((err)=> {
          alert(err.response)
        })
      
      }

    render(){
        return(
            <PlaylistContainer> 
            <h1> playlist</h1>
            <button onClick = {() => this.props.mudarTela("PlaylistDetail")} >abrir playlist</button>

            </PlaylistContainer>
        ) 
                 
    }
    
        
    }



    export default Playlist;