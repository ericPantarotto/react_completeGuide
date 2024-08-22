import { useRef, useState } from 'react';

import ResultModal from './ResultModal';

export default ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.openDialog();
  }

  const handleStart = () => {
    timer.current = setInterval((_) => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 20);
    }, 20);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.openDialog();
  };

  return (
    <>
      <ResultModal targetTime={targetTime} result={'lost'} ref={dialog} />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};
