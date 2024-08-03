function isValidCell(row, col, i, j, height, width) {
  if (i === 0 && j === 0) return false // Itself
  if (row + i < 0 || row + i >= height) return false // Out of range
  if (col + j < 0 || col + j >= width) return false // Out of range
  // Else
  return true
}

// Return the next state of the cell at a given row and col
function getNextCellState(board, row, col) {
  const { height, width } = board

  let totalNeighbours = 0
  // For all 8 adjacent cells, count how many are alive
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (isValidCell(row, col, i, j, height, width)) {
        totalNeighbours += board.get(row + i, col + j)
      }
    }
  }

  // Find whether the cell is currently alive or dead
  const currentState = board.get(row, col)

  // If the cell has 3 alive neighbours, it will either stay alive or be born
  if (totalNeighbours === 3) return 1
  // If it is already alive and has 2 living neighbours, it will stay alive
  if (totalNeighbours === 2 && currentState) return 1
  // Else the cell will be dead
  return 0
}

export default getNextCellState
