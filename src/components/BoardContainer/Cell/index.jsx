import { memo } from 'react'

// Memoising this component makes little difference, but it adds up over thousands of cells
// eslint-disable-next-line prefer-arrow-callback
const Cell = memo(function Cell({ alive, dataRow, dataCol }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={alive ? 'Alive cell' : 'Dead cell'}
      className={`cell${alive ? ' alive' : ' dead'}`}
      // Pass in data attributes so that click listener can easily know cell coords
      data-row={dataRow}
      data-col={dataCol}
    />
  )
})

export default Cell
