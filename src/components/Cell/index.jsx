import './cell.css'

function Cell({ alive }) {
  return <div className={`cell${alive ? ' alive' : ' dead'}`} />
}

export default Cell
