import { useEffect, useState } from 'react';
const INTERVAL = 100;

export default ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout)
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() =>
      setRemainingTime((prevRemainingTime) => prevRemainingTime - INTERVAL),
      INTERVAL
    );
  }, []);

  return <progress id='question-time' value={remainingTime} max={timeout} />;
};
