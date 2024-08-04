import { useEffect, useRef } from 'react'
import './rulesDialog.css'

function RulesDialog() {
  const dialogRef = useRef(null)

  // Show dialogue on mount
  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  // Close dialogue handler
  const handleClose = () => {
    dialogRef.current.close()
    // onClose()
  }

  return (
    <dialog ref={dialogRef} className="rules-dialog">
      <h2>Welcome to Conway&apos;s Game of Life</h2>
      <p>
        The Game of Life is a cellular automaton devised by mathematician John
        Conway. The game is a zero-player game, meaning that its evolution is
        determined by its initial state, requiring no further input.
      </p>
      <h3 className="rules-title">Rules</h3>
      <ul className="rules-list">
        <li>
          Any live cell with fewer than two live neighbors dies, as if by
          underpopulation.
        </li>
        <li>
          Any live cell with two or three live neighbors lives on to the next
          generation.
        </li>
        <li>
          Any live cell with more than three live neighbors dies, as if by
          overpopulation.
        </li>
        <li>
          Any dead cell with exactly three live neighbors becomes a live cell,
          as if by reproduction.
        </li>
      </ul>
      <p>
        You can click on the cells to change their state (alive or dead) when
        the game is paused.
      </p>
      <button type="button" onClick={handleClose}>
        Got it!
      </button>
    </dialog>
  )
}

export default RulesDialog
