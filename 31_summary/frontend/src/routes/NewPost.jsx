// import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';

const NewPost = () => {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' required rows={3} />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' name='author' required />
        </p>
        <p className={classes.actions}>
          <Link type='button' to='..'>
            Cancel
          </Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  );

  // const [enteredBody, setEnteredBody] = useState('');
  // const [enteredAuthor, setEnteredAuthor] = useState('');

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault();

  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };

  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   // onAddPost(postData);
  //   // onCancel();
  // }

  // return (
  //   <Modal>
  //     <form className={classes.form} onSubmit={submitHandler}>
  //       <p>
  //         <label htmlFor='body'>Text</label>
  //         <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
  //       </p>
  //       <p>
  //         <label htmlFor='name'>Your name</label>
  //         <input
  //           type='text'
  //           id='name'
  //           required
  //           onChange={authorChangeHandler}
  //         />
  //       </p>
  //       <p className={classes.actions}>
  //         <Link type='button' to='..'>
  //           Cancel
  //         </Link>
  //         <button type='submit'>Submit</button>
  //       </p>
  //     </form>
  //   </Modal>
  // );
};
NewPost.propTypes = {
  // onCancel: PropTypes.func,
  // onAddPost: PropTypes.func,
};

export default NewPost;
