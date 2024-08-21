// userData.name = 'TODO: Set to actual entered value';
// userData.email = 'TODO: Set to actual entered value';

import { useRef, useState } from 'react';
import './App.css';
import Input from './Input';
import ResultModal from './ResultModal';

export const userData = {
  name: '',
  email: '',
};
function App() {
  const inputName = useRef();
  const inputEmail = useRef();
  const dialog = useRef();

  const [inputs, setInputs] = useState({});

  function handleSaveData() {
    userData.name = inputName.current.value;
    userData.email = inputEmail.current.value;
    
    setInputs(userData);    
    dialog.current.showModal();
    console.log(userData);
  }

  return (
    <div id='app'>
      <ResultModal myInputs={inputs} ref={dialog} />
      <Input type='text' label='Your Name' ref={inputName} />
      <Input type='email' label='Your E-Mail' ref={inputEmail} />
      <p id='actions'>
        <button onClick={handleSaveData}>Save Data</button>
      </p>
      <section>
        <h2>Completed Inputs</h2>
        <ul>
          <li key={0}>{inputs.name}</li>
          <li key={1}>{inputs.email}</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

// setInputs((prevInputs) => {
//   return {
//     ...prevInputs,
//     name: userData.name,
//     email: userData.email,
//   };
// });
