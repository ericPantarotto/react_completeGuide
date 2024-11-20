'use client';
import Form from 'next/form';

import ImagePicker from '@/components/meals/image-picker';
// import { shareMeal } from '@/lib/actions';
// import { useFormState } from 'react-dom';
import { shareMeal } from '@/lib/actions';
import { useActionState } from 'react';
import MealsFormSubmit from '../meals-form-submit';
import classes from './page.module.css';

export default function ShareMealPage() {
  // const [state, formAction] = useFormState(shareMeal, { message: null });
  const [error, action, isPending] = useActionState(shareMeal, {
    meal: null,
    message: null,
  });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* <form className={classes.form} action={shareMeal}> */}
        {/* <form className={classes.form} action={formAction}> */}
        <Form className={classes.form} action={action}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
                defaultValue={error?.meal?.creator || ''}
              />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input
                type='email'
                id='email'
                name='email'
                required
                defaultValue={error?.meal?.creator_email || ''}
              />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              required
              defaultValue={error?.meal?.title || ''}
            />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input
              type='text'
              id='summary'
              name='summary'
              required
              defaultValue={error?.meal?.summary || ''}
            />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
              defaultValue={error?.meal?.instructions || ''}
            ></textarea>
          </p>
          <ImagePicker label='Your image' name='image' />
          {/* {state.message && <p>{state.message}</p>} */}
          {isPending && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          <p className={classes.actions}>
            {/* <button type='submit'>Share Meal</button> */}
            <MealsFormSubmit />
          </p>
        </Form>
      </main>
    </>
  );
}

// export default ShareMealPage;
