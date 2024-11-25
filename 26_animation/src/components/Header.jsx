import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewChallenge from './NewChallenge.jsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();
  const navigate = useNavigate();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  function routeToHome() {
    navigate('/');
  }
  return (
    <>
      <AnimatePresence>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id='main-header'>
        <h1>Your Challenges</h1>
        {/* <Link id='cta-link' to='/'>
          Home
        </Link> */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#8b11f0' }}
          transition={{
            type: 'spring',
            stiffness: 500,
          }}
          onClick={routeToHome}
          className='button'
        >
          Home
        </motion.button>

        {/* <button onClick={handleStartAddNewChallenge} className='button'>
          Add Challenge
        </button> */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#8b11f0' }}
          transition={{
            type: 'spring',
            stiffness: 500,
          }}
          onClick={handleStartAddNewChallenge}
          className='button'
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
