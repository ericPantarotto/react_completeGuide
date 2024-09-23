export const Input = ({ label, id, error, ...props }) => {
  return (
    <div className='control no-margin'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
        // type='email'
        // name='email'
        // onChange={(event) => handleInputChange('email', event.target.value)}
        // value={enteredValues.email}
        // onBlur={() => handleInputBlur('email')}
      />
      <div className='control-error'>{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
