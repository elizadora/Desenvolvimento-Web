import './App.css';
import MeusDados1 from './components/atividade_00/01MeusDados';
import MeusDados2 from './components/atividade_00/02MeusDados';
import Temperatura from './components/atividade_00/03Temperatura';

function App() {
  return (
    <div>
      <h1>Atividade 1</h1>
      <MeusDados1 />
      <hr></hr>

      <h1>Atividade 2</h1>
      <MeusDados2 
      nome = "Elizadora Mendonça"
      curso = "Ciência da Computação"
      universidade = "Universidade Federal do Ceará"
      />
      <hr></hr>

      <h1>Atividade 3</h1>
      <Temperatura 
      celsius = "23"
      fahrenheit = "23"
      kelvinTemp = "356"
      />

    </div>
  );
}

export default App;
