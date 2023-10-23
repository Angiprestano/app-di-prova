import logo from "./logo.svg";
import "./App.css";

import Angi from "./Angi";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  return (
    // QUESTO SI CHIAMA JSX, una sintassi molto simile ad HTML
    //differenze:
    // Possiamo ritornarlo dalle funzioni
    // "class" diventa "className" per indicare le classi CSS per i tag
    // JSX è molto più potente di HTML e ci permette di utilizzare le variabili in modi più furbi
    <div className="App">
      <header className="App-header">
        <WelcomeMessage welcomeName="Angi!" />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="main-text">CIAO EPICODE! PRIMA APP CON REACT!</p>
        <Angi />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
