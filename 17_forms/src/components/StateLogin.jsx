import { useState } from 'react';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';
import Input from './Input';

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const emailIsInvalid = didEdit.email && (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));

  // const passwordIsInvalid =
  //   didEdit.password && enteredValues.password.trim().length < 6;
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password.trim(), 6);

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(enteredValues);
    // console.info(`user email: ${enteredEmail}`);

    //ERROR: add validation here too !
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => {
      return { ...prevValues, [identifier]: value };
    });
    //NOTE: to let the check reset automatically
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  };

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setEnteredPassword(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          onBlur={() => handleInputBlur('email')}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
          value={enteredValues.password}
          onBlur={() => handleInputBlur('password')}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />

        {/* <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
            onBlur={() => handleInputBlur('email')}
            // onChange={handleEmailChange}
            // value={enteredEmail}
          />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        {/* <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={enteredValues.password}
            // onChange={handlePasswordChange}
            // value={enteredPassword}
          />
        </div> */}
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        {/* <button type='button' className='button' onClick={handleSubmit}>
          Login
        </button> */}
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
