import Board from './Board.js'

function isOnBoxBorder(boxRow, boxCol, i, j, boxesHigh, boxesWide) {
  if (i === 0 && j === 0) return false // Itself
  if (boxRow + i < 0 || boxRow + i >= boxesHigh) return false // Out of range
  if (boxCol + j < 0 || boxCol + j >= boxesWide) return false // Out of range
  // Else
  return true
}

// Check if the cells immediately bordering the box in question are empty
function checkBoxBorderEmpty(board, boxRow, boxCol) {
  const { BOX_LEN } = Board
  const { boxesWide, boxesHigh } = board

  // For all 8 adjacent boxes that share a border with the target box
  // Figure out if they have a live cell on that shared border
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (isOnBoxBorder(boxRow, boxCol, i, j, boxesHigh, boxesWide)) {
        const box = board[boxRow + i][boxCol + j]

        // The pair of switches figure out which cells in the bordering box need checking
        const bytesToCheck = (() => {
          switch (i) {
            case -1: // Checking a box above
              return [box[BOX_LEN - 1]] // Only need bottom byte
            case 0: // Checking a box in the row
              return box // Check all bytes
            default: // Checking a box below
              return [box[0]] // Only need top byte
          }
        })()
        const maskToCheck = (() => {
          switch (j) {
            case -1: // Checking a box to the left
              return 0b0000_0001 // Check only right bit
            case 0: // Checking a box in the column
              return 0b1111_1111 // Check entire byte
            default: // Checking a box to the right
              return 0b1000_0000 // Check only left bit
          }
        })()

        const cellAliveOnBorder = bytesToCheck.some(
          (byte) => byte & maskToCheck
        )
        // If one is found to be alive on the border, return true
        if (cellAliveOnBorder) return true
      }
    }
  }
  // If none are found alive on any of the 8 borders, return false
  return false
}

// Certain boxes, if they have no live cells, and there are no live cells adjacent to them
// Can have their contents skipped entirely, since there is no chance for a cell to be alive
// This function finds the boxes for which this is not true, which need their cells processed individually
function findActiveBoxes(board) {
  return board.cells.map((row, boxRow) =>
    row.map(
      (box, boxCol) =>
        !(box.isEmpty && checkBoxBorderEmpty(board, boxRow, boxCol))
    )
  )
}

export default findActiveBoxes
