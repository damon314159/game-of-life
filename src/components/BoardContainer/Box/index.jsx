import { memo } from 'react'
import Board from '../../../modules/Board'
import Cell from '../Cell'

// Memoising this component replaces 64 Cell renders with directly comparing bytes
const Box = memo(
  // eslint-disable-next-line prefer-arrow-callback
  function Box({ box, boxRow, boxCol }) {
    return (
      <div className="box">
        {Array.from({ length: Board.BOX_LEN }, (_, row) => {
          const dataRow = Board.BOX_LEN * boxRow + row
          return (
            <div className="row" key={row}>
              {Array.from({ length: Board.BOX_LEN }, (__, col) => (
                <Cell
                  key={`${row}:${col}`}
                  alive={box.get(row, col)}
                  dataRow={dataRow}
                  dataCol={Board.BOX_LEN * boxCol + col}
                />
              ))}
            </div>
          )
        })}
      </div>
    )
  },
  // Custom propsAreEqual function for memo.
  // Checks if the box contains identical alive/dead cells by comparing bytes
  ({ box: prevBox }, { box: nextBox }) =>
    prevBox.every((byte, i) => nextBox[i] === byte)
)

export default Box
