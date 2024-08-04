import { memo } from 'react'

// eslint-disable-next-line prefer-arrow-callback
const Cell = memo(function Cell({ alive, dataRow, dataCol }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={alive ? 'Alive cell' : 'Dead cell'}
      className={`cell${alive ? ' alive' : ' dead'}`}
      data-row={dataRow}
      data-col={dataCol}
    />
  )
})

export default Cell
