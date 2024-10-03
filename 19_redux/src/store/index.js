import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: ++state.counter,
    };
  }

  // INFO: not scalable 
  //  if (action.type === 'increaseby5') {
  //    return {
  //      counter: state.counter+=5,
  //    };
  //  }

  if (action.type === 'increase') {
    return {
      counter: (state.counter += action.amount),
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: --state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
