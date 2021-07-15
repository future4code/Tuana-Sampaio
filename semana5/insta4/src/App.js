import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Foemulario = styled.div`
  border: 1px solid black;
  margin: 16px;
  padding: 16px;

`

 class App extends React.Component{
  state ={
    post: [ {  

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: ""
  }
 ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
};

adicionaPost = () =>{
  const novoPost = {
    nomeUsuario: this.state.valorInputNomeUsuario,
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost
  };

 const novoPosts = [...this.state.post, novoPost];

  this.setstate({ post: novoPost,
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  });

};

onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value});
};

onChangeInputFotoUsuario = (event) =>{
  this.setState({valorInputFotoUsuario: event.target.value});
};

onChangeInputFotoPost = (event) =>{
  this.setState({valorInputFotoPost: event.target.value});
};
    
  render() {
    const listaDeComponentes = this.state.post.map((post) => {
      return (
        <p>
          {post.nomeUsuario} - {post.fotoUsuario}- {post.fotoPost}
        </p>
      );
    });


    return (
      <MainContainer>
         <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Fernanda'}
          fotoUsuario={'https://vilamulher.com.br/imagens/thumbs/2014/11/10/4-razoes-para-ser-uma-pessoa-mais-curiosa-thumb-570.jpg'}
          fotoPost={'https://cdn.pixabay.com/photo/2018/08/17/18/56/person-3613567_960_720.jpg'}
        />

        <Post
          nomeUsuario={'Anitta'}
          fotoUsuario={'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg'}
          fotoPost={'https://cdn.pixabay.com/photo/2015/05/26/04/20/landscape-784200_960_720.jpg'}
        />

        <div>

        <input
         value = {this.state.valorInputNomeUsuario}
         onChange ={ this.onChangeInputNomeUsuario}
         placeholder = {"Nome"}
        />

        <input
           value = {this.state.valorInputFotoUsuario}
           onChange ={ this.onChangeInputFotoUsuario}
           placeholder = {"Foto usuário"}
        />

        <input
           value = {this.state.valorInputFotoPost}
           onChange ={ this.onChangeInputFotoPost}
           placeholder = {"Foto post"}
        />

        </div>
        <button onClick = {this.adicionaPost} > Adicionar</button>

        <div>{listaDeComponentes}</div>
      </MainContainer>
    );
  }
}

export default App;
