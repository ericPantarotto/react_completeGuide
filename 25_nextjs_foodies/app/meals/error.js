'use client';

// const Error = () => (
//   <main className='error'>
//     <h1>An error occurred!</h1>
//     <p>Failed to fetch meal data</p>
//   </main>
// );

import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <main className='error'>
    <h1>An error occurred!</h1>
    <p>{error.message || 'Failed to fetch meal data'} </p>
  </main>
);
Error.propTypes = {
  error: PropTypes.error,
};

export default Error;
