import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { MiSegundoEstado } from './components/MiSegundoEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MiPrimerEstado/>
      <MiSegundoEstado/>
    </div>
  );
}

export default App;
