import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
        id: Date.now(), //gera um número único (id) para cada tarefa
        texto: 'Lavar os pratos',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(),
        texto: 'Tirar a poeira',
        completa: true // Indica se a tarefa está completa (true ou false)
      }
      
    ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      localStorage.setItem("tarefa", this.state.inputValue);
      console.log("Mudou tarefa");
    }
          
  };

  componentDidMount() {
    this.pegaDados();
    
  };

    pegaDados = () => {
    const tarefaLS = localStorage.getItem("inputValue");
    
    this.setState({
      inputValue: tarefaLS
    });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
      texto: this.state.inputValue,// aqui, o texto da tarefa virá do input controlado guardado no estado
      completa: false // aqui, pode deixar o valor false para todas as tarefas as serem criadas, pq a tarefa sempre vai começar como não completa.
    }

    const novaListaTarefas = [novaTarefa, ...this.state.tarefas]
    
    this.setState({tarefas: novaListaTarefas})
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
        if(id === tarefa.id){
          const novaTarefa = {
            ...tarefa,
            completa: !tarefa.completa
          }
          return novaTarefa
        }else{
          return tarefa
        }
    })
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }

    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
