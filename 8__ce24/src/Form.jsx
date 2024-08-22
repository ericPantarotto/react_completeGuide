import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Input from './Input';
import ResultModal from './ResultModal';

export const userData = {
  name: '',
  email: '',
};

const Form = forwardRef(function (_, ref) {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const [inputs, setInputs] = useState({});
  const dialog = useRef();

  useImperativeHandle(ref, (_) => {
    return {
      clear() {
        form.current.reset();
        setInputs({});
      },
    };
  });

  function handleSaveData() {
    if (!inputName.current.value || !inputEmail.current.value) {
      return;
    }
    userData.name = inputName.current.value;
    userData.email = inputEmail.current.value;

    setInputs(userData);
    dialog.current.showModal();
    console.log(userData);
  }

  return (
    <>
      <ResultModal myInputs={inputs} ref={dialog} />
      <form ref={form}>
        <Input type='text' label='Your Name' ref={inputName} required />
        <Input type='email' label='Your E-Mail' ref={inputEmail} required />
        <p id='actions'>
          <button onClick={handleSaveData}>Save Data</button>
        </p>
      </form>
      <section>
        <h2>Completed Inputs</h2>
        <ul>
          <li key={0}>{inputs.name}</li>
          <li key={1}>{inputs.email}</li>
        </ul>
      </section>
    </>
  );
});

export default Form;
