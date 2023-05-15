import './App.css';
import { Questao01X } from './provas/ap1/questao_01/Questao01';
import Questao2 from './provas/ap1/questao_02/Questao02';
import Questao03 from './provas/ap1/questao_03/Questao03';
import  ContextImage  from './assets/context.png';

function App() {
  return (
    <div className="App">
      <Questao01X />
      <hr />
      <Questao2 />
      <hr />
      <Questao03 />
      <hr />
      <p style={{textAlign: 'justify', padding: "10px"}}>
        Os Contextos servem como forma de passar os dados sem ser necessária a passagem de componente para componente
        até chegar no componente que necessita dos dados. O Contexto envolve os componentes tornando os dados disponíveis
        globalmente para todos os componentes envolvidos.
      </p>
      
      <img src={ContextImage} alt="Contexto" />
    </div>
  );
}

export default App;
