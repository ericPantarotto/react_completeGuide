import { useState } from 'react';

const GreetingState = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    // setChangedText(true);
    setChangedText(!changedText);
  };

  return (
    <div>
      <h2>Hello World with useState!</h2>
      {/* {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>} */}
      {!changedText ? <p>It's good to see you!</p> : <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default GreetingState;
