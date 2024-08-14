import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import Player from './components/Player.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
  if (gameTurns[0]?.player === 'X') currentPlayer = 'O';
  return currentPlayer;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  gameTurns.forEach((turn) => {
    const {
      square: { row, col },
      player,
    } = turn;
    gameBoard[row][col] = player;
  });

  WINNING_COMBINATIONS.forEach((combination) => { 
    const firstSquareSymbol = undefined;
    const secondSquareSymbol = undefined;
    const thirdSquareSymbol = undefined;
  });
  
  const handelSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currActivePlayer) =>
    //   currActivePlayer === 'X' ? 'O' : 'X'
    // );
    setGameTurns((prevTurns) => {
      // let currentPlayer = 'X';
      // if (prevTurns[0]?.player === 'X') currentPlayer = 'O';
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName='Player 1'
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        {/* <GameBoard onSelectSquare={handelSelectSquare} turns={gameTurns} /> */}
        <GameBoard onSelectSquare={handelSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
