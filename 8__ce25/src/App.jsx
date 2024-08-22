import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toast from './Toast';

function App() {
  const [showAside, setShowAside] = useState(false);
  function handleEnrol() {
    // TODO: Show toast
    setShowAside(true);

    setTimeout(() => {
      // TODO: hide toast
      setShowAside(false);
    }, 3000);
  }

  return (
    <div id='app'>
      {/* TODO: Render <Toast /> component (conditionally) here */}
      {showAside && <Toast message='that is a really cool aside' />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}


export default App
