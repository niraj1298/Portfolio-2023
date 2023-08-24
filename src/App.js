import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home';
import NavBar from './views/Home/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
