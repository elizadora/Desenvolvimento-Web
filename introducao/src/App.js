import './App.css';
import MyProps from './components/MyProps';
// import Calculadora from './components/Calculadora';
// import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld/> */}
      {/* <Calculadora /> */}
      <MyProps 
      nome= "Teste"
      curso="Testador"
      />
    </div>
  );
}

export default App;
