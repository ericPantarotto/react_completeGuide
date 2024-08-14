import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import GameOver from './components/GameOver.jsx';
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
  const [players, setPlayers] = useState({ X: 'Player 1', O: 'Player 2' });
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];
  gameTurns.forEach((turn) => {
    const {
      square: { row, col },
      player,
    } = turn;
    gameBoard[row][col] = player;
  });

  let winner;
  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  });

  const hasDraw = gameTurns.length === 9 && !winner;

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

  const handleRestart = () => setGameTurns([]);

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
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
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* <GameBoard onSelectSquare={handelSelectSquare} turns={gameTurns} /> */}
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handelSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
