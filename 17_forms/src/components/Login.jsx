export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.info('submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' />
        </div>
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