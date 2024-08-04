import './App.css'
import { useState } from 'react'
import BoardContainer from './components/BoardContainer'

function App() {
  const [playing, setPlaying] = useState(false)

  const boxesHigh = 5
  const boxesWide = 5

  return (
    <>
      <h1>Game of Life</h1>
      <BoardContainer
        key={`${boxesHigh}x${boxesWide}`}
        boxesHigh={boxesHigh}
        boxesWide={boxesWide}
        playing={playing}
      />
      <button
        type="button"
        onClick={() => {
          setPlaying(!playing)
        }}
      >
        Play/Pause
      </button>
    </>
  )
}

export default App
