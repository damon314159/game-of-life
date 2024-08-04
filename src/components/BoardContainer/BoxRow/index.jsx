import Box from '../Box'

function BoxRow({ row, boxRow }) {
  return (
    <div className="box-row">
      {row.map((box, boxCol) => (
        <Box key={`${boxRow}:${boxCol}`} box={box} />
      ))}
    </div>
  )
}

export default BoxRow
