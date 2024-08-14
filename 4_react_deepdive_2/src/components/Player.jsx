import { useState } from 'react';

export default ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    isEditing && onChangeName(symbol, playerName) //if value == editing, it means we just click the button to stop editing
  }
  const handleChange = (event) => setPlayerName(event.target.value);

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type='text'
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
