import { useRef, useState } from 'react';

import ResultModal from './ResultModal';

export default ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  const handleStart = () => {
    timer.current = setTimeout((_) => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
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
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};
