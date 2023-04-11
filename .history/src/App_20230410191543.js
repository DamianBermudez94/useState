import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Ejercicio } from './components/Ejercicio';


function App() {
    const fecha = new Date();
    const anioActual = fecha.getFullYear();

    console.log(anioActual); // Imprime el año actual
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiPrimerEstado/>
        <Ejercicio year={anioActual}  />
      </header>
    
      
    </div>
  );
}

export default App;
