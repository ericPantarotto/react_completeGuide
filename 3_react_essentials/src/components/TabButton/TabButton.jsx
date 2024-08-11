import './TabButton.css';

export default ({ children, onSelect, isSelected }) => (
  <li>
    <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
      {children}
    </button>
  </li>
);
