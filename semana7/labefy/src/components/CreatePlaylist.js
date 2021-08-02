import React from "react";
import styled from "styled-components";
import axios from "axios";

const CreatePlaylistContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: space-between;


`

const headers = {
    headers: {
      Authorization: "Tuana-Sampaio-Labenu"
    }
  }
  
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"



class CreatePlaylist extends React.Component {
    state = {
        playlists: [],
        inputValueName: "",

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

      createPlaylist = () => {
        const body = {
          "name": this.state.inputValueName
        }
    
        axios.post(url, body, headers).then((res) => {
          alert("Playlist adicionada com sucesso!")
          this.setState({inputValueName: " "})
          this.getAllPlaylists()//chama a função novamente para aparecer a lista atualizada depois de adicionar uma nova;
        })
        .catch((err) => {
          console.log(err.response)
        })
      }
    
      onChangeinputValueName = (event) => {
        this.setState({inputValueName: event.target.value} )
      }


      render() {
        
        const conjuntoPlaylists = this.state.playlists.map((playlist) => {
            return <label key = {playlist.id}> <option  >{playlist.name}  </option> </label>
                    
            })
            return(
                <CreatePlaylistContainer>
                    <h2>Adicione a sua playlist favorita</h2>
                    <input 
                    placeholder = "Nome da nova playlist"
                    value = {this.state.inputValueName}
                    onChange = {this.onChangeinputValueName}
        
                     />
                     <button onClick = {this.createPlaylist} >Adicionar playlist</button>
                    {conjuntoPlaylists}
                </CreatePlaylistContainer>
            )
    }
       
    
  
}
  
            


  

    export default CreatePlaylist ;