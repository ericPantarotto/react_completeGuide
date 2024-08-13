import { useState } from 'react';

export default ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(!isEditing);
  const playerName = isEditing ? (
    <input type='text' required></input>
  ) : (
    <span className='player-name'>{name}</span>
  );

  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};
