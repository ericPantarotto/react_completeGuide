import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

//HACK: https://stackoverflow.com/questions/54895883/reset-to-initial-state-with-react-hooks
const initialState = {
  email: '',
};

function NewsletterSignup() {
    const [{ email }, setState] = useState(initialState);
//   const [email, setEmail] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    // const { value } = e.target;
    // setEmail(value);
  };

  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    const clearState = () => {
        setState({ ...initialState });
    //   setEmail('');
    };

    if (state === 'idle' && data && data.email) {
      window.alert(data.message);
      clearState();
    }
  }, [data, state]);

  return (
    // <form method='post' className={classes.newsletter}>
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <input
        type='email'
        name='email'
        value={email}
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
        onChange={onChange}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
