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
    playlists: [],
    inputValueName: ""
  }



componentDidMount() {
  this.getAllPlaylists()
  this.getPlaylistTrack()
 
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

  addTrackToPlaylist = () => {
    
  }

  getPlaylistTrack = (id) => {
    const urltrack = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.get(urltrack, headers)
    .then((res)=> {
      console.log(res.data)
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    const conjuntoPlaylists = this.state.playlists.map((playlist) => {
      return <li > <option key = {playlist.id} >{playlist.name} </option>
      <button onClick = {() => this.deletePlaylist(playlist.id)}>delete</button>
            </li>
      
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
        <select>{conjuntoPlaylists}</select>
        
        
      </div>
    );
  }
  
}

export default App;
