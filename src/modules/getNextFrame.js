import Board from './Board'
import findActiveBoxes from './findActiveBoxes'
import getNextCellState from './getNextCellState'

function getNextFrame(board) {
  const { BOX_LEN } = Board
  const { boxesWide, boxesHigh } = board

  const nextBoard = new Board(boxesWide, boxesHigh)

  const boxesToCheck = findActiveBoxes(board)
  boxesToCheck.forEach((row, boxRow) =>
    row.forEach((toCheck, boxCol) => {
      if (!toCheck) return
      for (let i = 0; i < BOX_LEN; i += 1) {
        for (let j = 0; j < BOX_LEN; j += 1) {
          const [cellRow, cellCol] = [
            boxRow * BOX_LEN + i,
            boxCol * BOX_LEN + j,
          ]
          const nextState = getNextCellState(board, cellRow, cellCol)
          nextBoard.set(cellRow, cellCol, nextState)
        }
      }
    })
  )

  return nextBoard
}

export default getNextFrame
