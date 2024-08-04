import './App.css'
import BoardContainer from './components/BoardContainer'

function App() {
  const boxesHigh = 5
  const boxesWide = 5

  return (
    <>
      <h1>Game of Life</h1>
      <BoardContainer
        key={`${boxesHigh}x${boxesWide}`}
        boxesHigh={boxesHigh}
        boxesWide={boxesWide}
      />
    </>
  )
}

export default App
