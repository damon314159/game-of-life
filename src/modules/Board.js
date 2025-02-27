import Box from './Box'

class Board {
  // No magic numbers, but this is always 8 due to bit packing
  static BOX_LEN = Box.BOX_LEN

  // Specify the number of 8 x 8 boxes vertically and horizontally
  constructor(boxesWide, boxesHigh) {
    // Ensure integer values
    this.boxesWide = Math.floor(boxesWide)
    this.boxesHigh = Math.floor(boxesHigh)
    // Calculate the resulting width and height
    this.width = this.boxesWide * Board.BOX_LEN
    this.height = this.boxesHigh * Board.BOX_LEN

    // Populate cells with a matrix of boxes, which in turns represent 8 x 8 cells
    this.cells = Array.from({ length: this.boxesHigh }, () =>
      Array.from({ length: this.boxesWide }, () => new Box())
    )
  }

  static #getCellCoords(row, col) {
    const [boxRow, boxCol] = [
      Math.floor(row / Board.BOX_LEN),
      Math.floor(col / Board.BOX_LEN),
    ]
    const [inBoxRow, inBoxCol] = [row % Board.BOX_LEN, col % Board.BOX_LEN]

    return { boxCol, boxRow, inBoxCol, inBoxRow }
  }

  static clone(board) {
    if (!(board instanceof Board)) {
      throw new Error('board must be instance of Board to be cloned')
    }
    const newBoard = new Board(board.boxesWide, board.boxesHigh)
    newBoard.cells = Array.from({ length: board.boxesHigh }, (_, boxRow) =>
      Array.from({ length: board.boxesWide }, (__, boxCol) =>
        Box.clone(board.cells[boxRow][boxCol])
      )
    )
    return newBoard
  }

  // Get the state of the cell at (row, col)
  get(row, col) {
    const { boxRow, boxCol, inBoxRow, inBoxCol } = Board.#getCellCoords(
      row,
      col
    )
    return this.cells[boxRow][boxCol].get(inBoxRow, inBoxCol)
  }

  set(row, col, state) {
    const { boxRow, boxCol, inBoxRow, inBoxCol } = Board.#getCellCoords(
      row,
      col
    )
    this.cells[boxRow][boxCol].setBit(inBoxRow, inBoxCol, state)
    return this
  }

  // Utility method to print to console the current state
  print() {
    const outputLines = Array.from({ length: this.height }, () => '')
    for (let row = 0; row < this.height; row += 1) {
      for (let col = 0; col < this.width; col += 1) {
        outputLines[row] += `${this.get(row, col) ? '\u25a0' : '\u2027'}  `
      }
    }
    console.log(outputLines.map((line) => line.trim()).join('\n'))
  }
}

export default Board
