import { useState } from 'react'
import Board from '../../modules/Board'
import Cell from '../Cell'
import './boardContainer.css'

function BoardContainer({ boxesHigh, boxesWide }) {
  const [board, setBoard] = useState(new Board(boxesHigh, boxesWide))
  board.set(3, 2, 1)
  board.set(3, 3, 1)
  board.set(3, 4, 1)
  board.set(20, 3, 1)
  board.set(20, 4, 1)
  board.set(21, 4, 1)
  board.set(22, 4, 1)
  board.set(21, 2, 1)

  return (
    <>
      {Array.from({ length: board.height }, (_, row) => (
        <div key={row} className="row">
          {Array.from({ length: board.width }, (__, col) => (
            <Cell key={`${row}:${col}`} alive={board.get(row, col)} />
          ))}
        </div>
      ))}
    </>
  )
}

export default BoardContainer
