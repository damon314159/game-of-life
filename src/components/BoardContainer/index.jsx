import { useEffect, useRef, useState } from 'react'
import Board from '../../modules/Board'
import getNextFrame from '../../modules/getNextFrame'
import populateInitialBoard from '../../modules/populateInitialBoard'
import Cell from '../Cell'
import './boardContainer.css'

function BoardContainer({ boxesHigh, boxesWide, playing }) {
  const isInitialRender = useRef(true)

  const [board, setBoard] = useState(() =>
    populateInitialBoard(new Board(boxesWide, boxesHigh))
  )

  useEffect(
    () => () => {
      isInitialRender.current = true
    },
    []
  )

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    setBoard(new Board(boxesWide, boxesHigh))
  }, [boxesWide, boxesHigh])

  useEffect(() => {
    if (!playing) return () => {}
    console.time('calc next frame')
    let prevBoard = board
    const intervalId = setInterval(() => {
      const newBoard = getNextFrame(prevBoard)
      setBoard(newBoard)
      prevBoard = newBoard
      console.timeEnd('calc next frame')
      console.timeEnd('render next frame')
      console.time('render next frame')
    }, 50)

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
