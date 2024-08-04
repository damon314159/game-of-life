import { useEffect } from 'react'
import Board from '../../modules/Board'
import getNextFrame from '../../modules/getNextFrame'
import BoxRow from './BoxRow'
import './boardContainer.css'

function BoardContainer({ playing, board, setBoard }) {
  // Start an interval to begin calculating a new frame, at most every 50ms
  useEffect(() => {
    // If paused, return with an empty cleanup function
    if (!playing) return () => {}
    // Else set up the interval
    let prevBoard = board
    const intervalId = setInterval(() => {
      // Calculate the next frame and set state
      const newBoard = getNextFrame(prevBoard)
      setBoard(newBoard)
      // Update the closured reference
      prevBoard = newBoard
    }, 50)

    // Cleanup to clear interval when paused or unmounted
    return () => {
      clearInterval(intervalId)
    }
  }, [playing])

  // Click event delegation so the user can modify the seed
  const handleClick = (e) => {
    // Find the cell that was clicked
    const targetCell = document.elementFromPoint(e.clientX, e.clientY)
    // If the game is running, or it wasn't a cell, ignore the event
    if (playing) return
    if (!targetCell.classList.contains('cell')) return
    // Else setState to a new board with that cell toggled
    const { row, col } = targetCell.dataset
    const newBoard = Board.clone(board).set(
      row,
      col,
      board.get(row, col) ? 0 : 1
    )
    setBoard(newBoard)
  }

  // Enter or space listeners for keyboard users
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e)
    }
  }

  return (
    // Event is delegated to elements with valid roles. Linter raising a false flag
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      aria-label="Game board"
      className="board"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {board.cells.map((row, boxRow) => (
        <BoxRow key={boxRow} row={row} boxRow={boxRow} />
      ))}
    </div>
  )
}

export default BoardContainer
