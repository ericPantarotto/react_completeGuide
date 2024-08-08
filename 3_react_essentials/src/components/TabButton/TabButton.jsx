import './TabButton.css';

export default ({ children }) => {
  const handleClick = _ => console.log('hello');
  
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
} 
  
