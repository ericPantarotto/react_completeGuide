// import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default ({ onSelectSquare, turns }) => {
  // export default ({ onSelectSquare, activePlayerSymbol }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handelSelectSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [...prevGameBoard].map((innerArray) => [
  //         ...innerArray,
  //       ]);
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSelectSquare();
  //   };

  let gameBoard = initialGameBoard;
  turns.forEach((turn) => {
    const {
      square: { row, col },
      player,
    } = turn;
    gameBoard[row][col] = player;
  });

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={() => handelSelectSquare(rowIndex, colIndex)}> */}
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
