import { memo } from 'react'
import Board from '../../../modules/Board'
import Cell from '../Cell'

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
  ({ box: prevBox }, { box: nextBox }) =>
    prevBox.join(',') === nextBox.join(',')
)

export default Box
