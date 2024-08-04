import './controlPanel.css'
import Board from '../../modules/Board'

function ControlPanel({
  playing,
  setPlaying,
  size,
  setSize,
  handleClear,
  handleReset,
}) {
  // Holds the non-board interactive elements for the game
  return (
    <section aria-label="Control panel" className="control-panel">
      <div className="buttons-wrapper">
        <button
          type="button"
          onClick={() => {
            setPlaying(!playing)
          }}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button type="button" onClick={handleClear} disabled={playing}>
          Clear
        </button>
        <button type="button" onClick={handleReset} disabled={playing}>
          Reset
        </button>
      </div>
      <div className="slider-wrapper">
        <label htmlFor="size">Grid Size: {size * Board.BOX_LEN}</label>
        <input
          id="size"
          type="range"
          defaultValue={size * Board.BOX_LEN}
          step={Board.BOX_LEN}
          min={Board.BOX_LEN}
          max={30 * Board.BOX_LEN}
          aria-label="Edit grid size"
          onChange={(e) => setSize(e.target.value / Board.BOX_LEN)}
        />
      </div>
    </section>
  )
}

export default ControlPanel
