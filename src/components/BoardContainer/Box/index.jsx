import { memo } from 'react'
import Board from '../../../modules/Board'
import Cell from '../Cell'

const Box = memo(
  // eslint-disable-next-line prefer-arrow-callback
  function Box({ box }) {
    return (
      <div className="box">
        {Array.from({ length: Board.BOX_LEN }, (_, row) => (
          <div className="row" key={row}>
            {Array.from({ length: Board.BOX_LEN }, (__, col) => (
              <Cell key={`${row}:${col}`} alive={box.get(row, col)} />
            ))}
          </div>
        ))}
      </div>
    )
  },
  ({ box: prevBox }, { box: nextBox }) =>
    prevBox.join(',') === nextBox.join(',')
)

export default Box
