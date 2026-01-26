import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          varunavikas
        </a>
      </header>
    </div>
  <Router>
    <div>
     <Navbar/>
     <div>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
      </Routes>
     </div>

    </div>
  </Router>



</>
  );
}

export default App;
