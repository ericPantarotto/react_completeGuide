import { Fragment } from 'react';
import './App.css';
import Counter from './components/Counter.jsx';
import Auth from './components/Auth.jsx';
import Header from './components/Header.jsx';
// import CounterClass from './components/CounterClass.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );

  // return <Counter />;
  // return <CounterClass />;
}

export default App;
