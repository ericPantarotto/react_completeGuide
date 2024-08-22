import { useRef } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const form = useRef();
  function handleRestart() {
    form.current.clear();
  }

  return (
    <div id='app'>
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}

export default App;
