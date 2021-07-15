import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
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

      </MainContainer>
    );
  }
}

export default App;
