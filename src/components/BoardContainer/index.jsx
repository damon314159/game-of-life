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

  const handleClick = (e) => {
    const targetCell = document.elementFromPoint(e.clientX, e.clientY)
    if (playing) return
    if (!targetCell.classList.contains('cell')) return
    const { row, col } = targetCell.dataset
    const newBoard = Board.clone(board).set(
      row,
      col,
      board.get(row, col) ? 0 : 1
    )
    setBoard(newBoard)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e)
    }
  }

  return (
    // Event is delegated to elements with valid roles. Linter raising a false flag
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="board" onClick={handleClick} onKeyDown={handleKeyDown}>
      {board.cells.map((row, boxRow) => (
        <BoxRow key={boxRow} row={row} boxRow={boxRow} />
      ))}
    </div>
  )
}

export default BoardContainer
