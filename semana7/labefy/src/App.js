import React from "react";
import styled from "styled-components";
import axios from "axios";




const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
  headers: {
    Authorization: "Tuana-Sampaio-Labenu"
  }
}




class App extends React.Component{

  state = {
    //telaAtual
    playlists: [],
    inputValueName: "",
    tracks: [],
    inputValueNameTrack: "",
    inputValueNameArtist: "",
    inputValueUrl:""
  }



componentDidMount() {
  this.getAllPlaylists()
  this.getPlaylistTrack()
  this.addTrackToPlaylist()
 
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


  deletePlaylist = (id) => {
    const urldel = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    
    axios.delete(urldel, headers)
    .then((res) =>{
      alert("Playlist deletada com sucesso!")
      this.getAllPlaylists()

    }).catch((err) => { 
      alert("Ocorreu um erro!")
    })
  }

  //adiciona uma música a uma playlist existente
  addTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const body = {
      "name": this.state.inputValueNameTrack, 
      "artist": this.state.inputValueNameArtist,
      "url": this.state.inputValueUrl
    }
    axios.post(url, body, headers).then((res)=> {
      console.log(res.data.result)
      this.getAllPlaylists()
      
    }).catch((err)=> {
      console.log(err)
    })
    
  }

  // inputs para adicionar as musicas
  onChangeinputValueNameTrack = (event) => {
    this.setState({inputValueNameTrack: event.target.value} )
  }
  onChangeinputValueNameArtist = (event) => {
    this.setState({inputValueNameArtist: event.target.value} )
  }
  onChangeinputValueUrl = (event) => {
    this.setState({inputValueUrl: event.target.value} )
  }

  //verificar quais músicas estão em uma determinada playlist
  getPlaylistTrack = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.get(url, headers)
    .then((res)=> {
      alert("tudo certo")
      console.log(res.data)
    }).catch((err)=> {
      alert(err.response.data.result)
      console.log(err.response)
    })
  }

  render() {
    const conjuntoPlaylists = this.state.playlists.map((playlist) => {
      return <li key = {playlist.id}> <option  >{playlist.name} {playlist.id} </option>
      <button onClick = {() => this.deletePlaylist(playlist.id)}>delete</button>
      <button onClick = {() => this.getPlaylistTrack(playlist.id)}>Informações da playlist</button>
      <button onClick = {() => this.addTrackToPlaylist(playlist.id)} >Adicionar música</button>
            </li>
      
    })

    const conjuntoTracks = this.state.tracks.map((musica)=> {
      return <li> {musica.name} </li>
    })
  
    return (
     

      <div>
        <h2>Labefy</h2>
        <input 
        placeholder = "Nome da nova playlist"
        value = {this.state.inputValueName}
        onChange = {this.onChangeinputValueName}
        
        />
        <button onClick = {this.createPlaylist} >Adicionar playlist</button>
        <select></select>
        
        

        <input
        placeholder = "Nome da música"
        value = {this.state.inputValueNameTrack}
        onChange = {this.onChangeinputValueNameTrack}
        />

        <input
        placeholder = "Nome do artista"
        value = {this.state.inputValueNameArtist}
        onChange = {this.onChangeinputValueNameArtist}
        />

        <input
        placeholder = "url da música"
        value = {this.state.inputValueUrl}
        onChange = {this.onChangeinputValueUrl}
        />  
        
       {conjuntoPlaylists}
      </div>
    );
  }
  
}

export default App;
