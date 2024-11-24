import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [xState, setXState] = useState(0);
  const [yState, setYState] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div id='demo'>
      {/* <div id="box" /> */}
      <motion.div
        id='box'
        animate={{ x: xState, y: yState, rotate }}
        transition={{ duration: 0.3, type: 'spring', bounce: 0.5 }}
      />

      <div id='inputs'>
        <p>
          <label htmlFor='x'>X</label>
          <input
            type='number'
            id='x'
            onChange={(event) => setXState(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor='y'>Y</label>
          <input
            type='number'
            id='y'
            onChange={(event) => setYState(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor='rotate'>Rotate</label>
          <input
            type='number'
            id='rotate'
            onChange={(event) => setRotate(+event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
