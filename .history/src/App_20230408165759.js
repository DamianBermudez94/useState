import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Ejercicio } from './components/Ejercicio';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiPrimerEstado/>
        <Ejercicio/>
      </header>
    
      
    </div>
  );
}

export default App;
