import { memo } from 'react'
import Box from '../Box'

// Memoising this component replaces row.length * 64 Cell renders with directly comparing bytes
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
  // Custom propsAreEqual function for memo.
  // Checks if the box contains identical alive/dead cells by comparing bytes
  ({ row: prevRow }, { row: nextRow }) =>
    prevRow.length === nextRow.length &&
    prevRow.every((box, boxCol) =>
      box.every((byte, i) => nextRow[boxCol][i] === byte)
    )
)

export default BoxRow
