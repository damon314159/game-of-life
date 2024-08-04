import { useEffect, useRef, useState } from 'react'
import Board from '../../modules/Board'
import getNextFrame from '../../modules/getNextFrame'
import populateInitialBoard from '../../modules/populateInitialBoard'
import BoxRow from './BoxRow'
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
    let prevBoard = board
    const intervalId = setInterval(() => {
      console.time('calc next frame')
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
    <div className="board">
      {board.cells.map((row, boxRow) => (
        <BoxRow key={boxRow} row={row} boxRow={boxRow} />
      ))}
    </div>
  )
}

export default BoardContainer
