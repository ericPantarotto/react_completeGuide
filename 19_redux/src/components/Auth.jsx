import { useDispatch } from 'react-redux';
import { authActions } from '../store/indexToolkit';
import classes from './Auth.module.css';
import { useRef } from 'react';

const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  
  /**
   * @param {Event} ev
   */
  const loginHandler = (ev) => {
    ev.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    
    if (enteredEmail && enteredPassword) {
      dispatch(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={password} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
