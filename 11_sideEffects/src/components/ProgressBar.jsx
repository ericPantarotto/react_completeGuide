import { useEffect, useState } from "react";
const INTERVAL = 20;

export default ({timer}) => {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
      const interval = setInterval(
        () => setRemainingTime((prevTime) => prevTime - INTERVAL),
        INTERVAL
      );

      return () => clearInterval(interval);
    });

    return <progress value={remainingTime} max={timer} />;
}
