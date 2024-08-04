function populateInitialBoard(board) {
  const centreRow = Math.floor(board.height / 2)
  const centreCol = Math.floor(board.width / 2)

  board.set(centreRow, centreCol - 1, 1)
  board.set(centreRow, centreCol, 1)
  board.set(centreRow - 1, centreCol, 1)
  board.set(centreRow, centreCol + 1, 1)
  board.set(centreRow + 1, centreCol + 1, 1)

  return board
}

export default populateInitialBoard
