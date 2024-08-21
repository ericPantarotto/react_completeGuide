import { useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const inputFile = useRef();
   const handleClick = () => inputFile.current.click();

   return (
     <div id='app'>
       <p>Please select an image</p>
       <p>
         <input
           data-testid='file-picker'
           type='file'
           accept='image/*'
           ref={inputFile}
         />
         <button onClick={handleClick}>Pick Image</button>
       </p>
     </div>
   );
}

export default App
