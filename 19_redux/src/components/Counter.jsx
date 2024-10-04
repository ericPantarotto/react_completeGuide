import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import  {counterActions}  from "../store/indexToolkit.js";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'increment' }); //INFO: store/index.js
    dispatch(counterActions.increment() );
  };
  const decrementHandler = () => {
    // dispatch({ type: 'decrement' }); //INFO: store/index.js
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 }); //INFO: store/index.js
    dispatch(counterActions.increase(5));
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' }); //INFO: store/index.js
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
