// import logo from './logo.svg';
import './App.css';
import Async from './components/Async';
import Greeting from './components/Greeting';
import GreetingState from './components/Greeting-state';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className='App'>
      <Greeting />
      <GreetingState />
      <Async />
    </div>
  );
}

export default App;
