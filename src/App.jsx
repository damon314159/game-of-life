import './App.css'
import { useEffect, useRef, useState } from 'react'
import BoardContainer from './components/BoardContainer'
import ControlPanel from './components/ControlPanel'
import Board from './modules/Board'
import populateInitialBoard from './modules/populateInitialBoard'

function App() {
  // Initialise states
  const [playing, setPlaying] = useState(false)
  const [size, setSize] = useState(30)
  const [board, setBoard] = useState(() =>
    // Create an initial board so that the user can just click play and watch something happen
    populateInitialBoard(new Board(size, size))
  )
  // Create a ref that tracks whether this render is the mounting render
  const isInitialRender = useRef(true)

  // Create a version of setBoard with setTimeout 0 so that UI changes can take place while board is being created
  const timeoutSetBoard = (newBoard) => {
    setTimeout(() => setBoard(newBoard), 0)
  }

  // On unmount, set the ref back to true. This is only required due to React strict mode
  useEffect(
    () => () => {
      isInitialRender.current = true
    },
    []
  )

  // If the dimensions are changed after initial render, create a new board
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    timeoutSetBoard(new Board(size, size))
  }, [size])

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
            !playing &&
            timeoutSetBoard(new Board(board.boxesWide, board.boxesHigh))
          }
          handleReset={() =>
            !playing &&
            timeoutSetBoard(populateInitialBoard(new Board(size, size)))
          }
        />
        <BoardContainer playing={playing} board={board} setBoard={setBoard} />
      </div>
    </>
  )
}

export default App
