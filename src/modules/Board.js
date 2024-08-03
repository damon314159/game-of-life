class Board {
  constructor(octetsWide, octetsHigh) {
    this.octetsWide = Math.floor(octetsWide)
    this.octetsHigh = Math.floor(octetsHigh)
    this.width = this.octetsWide * 8
    this.height = this.octetsHigh * 8

    this.cells = Array.from({ length: this.octetsHigh }, () =>
      Array.from(
        { length: this.octetsWide },
        () => new Uint8Array(new ArrayBuffer(8), 0, 8)
      )
    )
  }

  print() {
    const outputLines = Array.from({ length: this.height }, () => '')
    for (let row = 0; row < this.height; row += 1) {
      for (let col = 0; col < this.width; col += 1) {
        const [boxRow, boxCol] = [Math.floor(row / 8), Math.floor(col / 8)]
        const [inBoxRow, inBoxCol] = [row % 8, col % 8]
        outputLines[row] +=
          `${this.cells[boxRow][boxCol][inBoxRow] & (1 << (8 - inBoxCol))}  `
      }
    }
    console.log(outputLines.map((line) => line.trim()).join('\n'))
  }
}

export default Board

const board = new Board(3, 3)
board.print()
