import { memo } from 'react'
import Box from '../Box'

const BoxRow = memo(
  // eslint-disable-next-line prefer-arrow-callback
  function BoxRow({ row, boxRow }) {
    return (
      <div className="box-row">
        {row.map((box, boxCol) => (
          <Box
            key={`${boxRow}:${boxCol}`}
            box={box}
            boxRow={boxRow}
            boxCol={boxCol}
          />
        ))}
      </div>
    )
  },
  ({ row: prevRow }, { row: nextRow }) =>
    prevRow.map((box) => box.join(',')).join(',') ===
    nextRow.map((box) => box.join(',')).join(',')
)

export default BoxRow
