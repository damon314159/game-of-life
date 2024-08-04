import './App.css'
import { useState } from 'react'
import BoardContainer from './components/BoardContainer'
import ControlPanel from './components/ControlPanel'

function App() {
  const [playing, setPlaying] = useState(false)
  const [size, setSize] = useState(40)

  return (
    <>
      <h1>Game of Life</h1>
      <div className="action-area">
        <ControlPanel
          playing={playing}
          setPlaying={setPlaying}
          size={size}
          setSize={setSize}
        />
        <BoardContainer boxesHigh={size} boxesWide={size} playing={playing} />
      </div>
    </>
  )
}

export default App
