import { memo } from 'react'

// eslint-disable-next-line prefer-arrow-callback
const Cell = memo(function Cell({ alive }) {
  return <div className={`cell${alive ? ' alive' : ' dead'}`} />
})

export default Cell
