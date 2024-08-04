import './App.css'
import { useState } from 'react'
import BoardContainer from './components/BoardContainer'
import ControlPanel from './components/ControlPanel'
import Board from './modules/Board'
import populateInitialBoard from './modules/populateInitialBoard'

function App() {
  // Initialise states
  const [playing, setPlaying] = useState(false)
  const [size, setSize] = useState(40)
  const [board, setBoard] = useState(() =>
    // Create an initial board so that the user can just click play and watch something happen
    populateInitialBoard(new Board(size, size))
  )

  return (
    <>
      <h1>Game of Life</h1>
      <div className="action-area">
        <ControlPanel
          playing={playing}
          setPlaying={setPlaying}
          size={size}
          setSize={setSize}
          handleClear={() =>
            !playing && setBoard(new Board(board.boxesWide, board.boxesHigh))
          }
          handleReset={() =>
            !playing && setBoard(populateInitialBoard(new Board(size, size)))
          }
        />
        <BoardContainer
          boxesHigh={size}
          boxesWide={size}
          playing={playing}
          board={board}
          setBoard={setBoard}
        />
      </div>
    </>
  )
}

export default App
