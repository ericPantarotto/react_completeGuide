import { useReducer } from 'react';
import './App.css';

const counterReducer = (prevCounter, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return (prevCounter += 1);
  }
  if (action.type === 'DECREMENT_COUNTER') {
    return (prevCounter -= 1);
  }
  if (action.type === 'RESET_COUNTER') {
    return 0;
  }
  return { ...prevCounter };
};

function App() {
  const [counterState, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <div id='app'>
      <h1>The (Final?) Counter</h1>
      <p id='actions'>
        <button
          onClick={() =>
            counterDispatch({
              type: 'INCREMENT_COUNTER',
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            counterDispatch({
              type: 'DECREMENT_COUNTER',
            })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            counterDispatch({
              type: 'RESET_COUNTER',
            })
          }
        >
          Reset
        </button>
      </p>
      <p id='counter'>{counterState}</p>
    </div>
  );
}

export default App;
