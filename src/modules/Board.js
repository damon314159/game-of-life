import Box from './Box.js'

class Board {
  // No magic numbers, but this is always 8 due to bit packing
  static #BOX_LEN = Box.BOX_LEN

  // Specify the number of 8 x 8 boxes vertically and horizontally
  constructor(octetsWide, octetsHigh) {
    // Ensure integer values
    this.octetsWide = Math.floor(octetsWide)
    this.octetsHigh = Math.floor(octetsHigh)
    // Calculate the resulting width and height
    this.width = this.octetsWide * Board.#BOX_LEN
    this.height = this.octetsHigh * Board.#BOX_LEN

    // Populate cells with a matrix of boxes, which in turns represent 8 x 8 cells
    this.cells = Array.from({ length: this.octetsHigh }, () =>
      Array.from({ length: this.octetsWide }, () => new Box())
    )
  }

  static #getCellCoords(row, col) {
    const [boxRow, boxCol] = [
      Math.floor(row / Board.#BOX_LEN),
      Math.floor(col / Board.#BOX_LEN),
    ]
    const [inBoxRow, inBoxCol] = [row % Board.#BOX_LEN, col % Board.#BOX_LEN]

    return { boxCol, boxRow, inBoxCol, inBoxRow }
  }

  // Get the state of the cell at (row, col)
  get(row, col) {
    const { boxRow, boxCol, inBoxRow, inBoxCol } = Board.#getCellCoords(
      row,
      col
    )
    return this.cells[boxRow][boxCol].get(inBoxRow, inBoxCol)
  }

  set(row, col, alive) {
    const { boxRow, boxCol, inBoxRow, inBoxCol } = Board.#getCellCoords(
      row,
      col
    )
    this.cells[boxRow][boxCol].setBit(inBoxRow, inBoxCol, alive)
    return this
  }

  // Utility method to print to console the current state
  print() {
    const outputLines = Array.from({ length: this.height }, () => '')
    for (let row = 0; row < this.height; row += 1) {
      for (let col = 0; col < this.width; col += 1) {
        outputLines[row] += `${this.get(row, col)}  `
      }
    }
    console.log(outputLines.map((line) => line.trim()).join('\n'))
  }
}

export default Board

const board = new Board(3, 3)
board.print()
