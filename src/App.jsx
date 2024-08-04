import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Game of Life</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => {
            setCount((c) => c + 1)
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
