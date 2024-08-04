import { useEffect, useState } from 'react'
import Board from '../../modules/Board'
import getNextFrame from '../../modules/getNextFrame'
import Cell from '../Cell'
import './boardContainer.css'

function BoardContainer({ boxesHigh, boxesWide, playing }) {
  const [board, setBoard] = useState(() => {
    const initialBoard = new Board(boxesWide, boxesHigh)
    initialBoard.set(3, 2, 1)
    initialBoard.set(3, 3, 1)
    initialBoard.set(3, 4, 1)
    initialBoard.set(20, 3, 1)
    initialBoard.set(20, 4, 1)
    initialBoard.set(21, 4, 1)
    initialBoard.set(22, 4, 1)
    initialBoard.set(21, 2, 1)

    return initialBoard
  })

  useEffect(() => {
    if (!playing) return () => {}
    let prevBoard = board
    const intervalId = setInterval(() => {
      console.time('calc next frame')
      const newBoard = getNextFrame(prevBoard)
      setBoard(newBoard)
      prevBoard = newBoard
      console.timeEnd('calc next frame')
    }, 0)

    return () => {
      clearInterval(intervalId)
    }
  }, [playing])

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
