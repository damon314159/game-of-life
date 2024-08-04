import './App.css'
import { useState } from 'react'
import BoardContainer from './components/BoardContainer'
import ControlPanel from './components/ControlPanel'

function App() {
  const [playing, setPlaying] = useState(false)
  const [size, setSize] = useState(10)

  return (
    <>
      <h1>Game of Life</h1>
      <BoardContainer boxesHigh={size} boxesWide={size} playing={playing} />
      <ControlPanel
        playing={playing}
        setPlaying={setPlaying}
        size={size}
        setSize={setSize}
      />
    </>
  )
}

export default App
