import './controlPanel.css'

function ControlPanel({ playing, setPlaying, size, setSize, handleClear }) {
  // Holds the non-board interactive elements for the game
  return (
    <section aria-label="Control panel" className="control-panel">
      <button
        type="button"
        onClick={() => {
          setPlaying(!playing)
        }}
      >
        {playing ? 'Pause' : 'Play'}
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
      <div className="slider-wrapper">
        <label htmlFor="size">Grid Size {size}</label>
        <input
          id="size"
          type="range"
          defaultValue={size}
          min={1}
          max={40}
          aria-label="Edit grid size"
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
    </section>
  )
}

export default ControlPanel
