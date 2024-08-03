import Board from './modules/Board.js'
import getNextFrame from './modules/getNextFrame.js'

let board = new Board(3, 3)
board.set(3, 2, 1)
board.set(3, 3, 1)
board.set(3, 4, 1)
board.set(20, 3, 1)
board.set(20, 4, 1)
board.set(21, 4, 1)
board.set(22, 4, 1)
board.set(21, 2, 1)

for (let i = 0; i < 100; i += 1) {
  console.clear()
  board.print()
  board = getNextFrame(board)
  console.log(`${i}th frame`)
  await new Promise((res) => {
    setTimeout(() => {
      res()
    }, 200)
  })
}
