import './controlPanel.css'

function ControlPanel({ playing, setPlaying, size, setSize }) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setPlaying(!playing)
        }}
      >
        {playing ? 'Pause' : 'Play'}
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
    </>
  )
}

export default ControlPanel
