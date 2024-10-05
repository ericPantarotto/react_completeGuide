import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth.jsx';
import Counter from './components/Counter.jsx';
import Header from './components/Header.jsx';
import UserProfile from './components/UserProfile.jsx';
// import CounterClass from './components/CounterClass.jsx';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );

  // return <Counter />;
  // return <CounterClass />;
}

export default App;
