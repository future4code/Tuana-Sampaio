
import './App.css';

import React, { Component } from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


class App extends Component {
  state ={
    etapa: 1,
  }

  renderizaEtapa = () => { 
    switch(this.state.etapa){
      case 1: 
        return <Etapa1/>
      case 2: 
        return <Etapa2/>
      case 3: 
        return <Etapa3/>
      case 4:
        return <Final/>
      default:
        return <Final/>
    }
  }


  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1})
  }


  render() {
    return (
      <div className="App">
        <h1>LABFORM</h1>
        <hr />

        {this.renderizaEtapa()}
        <button onClick = {this.irParaProximaEtapa} > Próxima etapa</button>
        
      </div>
  
  );
}
}

export default App;
