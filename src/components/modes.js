//container holds mode selector buttons
import Button from "./button"

const Modes = ({ view, setView }) => {
    return (
        <div className="modes">
            <Button
                onClick={() => setView('steps')}
                className={`${view === 'steps' ? 'btn-active' : 'btn'}`}>
                Steps
            </Button>

            <Button
                onClick={() => setView('sliders')}
                className={`${view === 'sliders' ? 'btn-active' : 'btn'}`}>
                Sliders
            </Button>
            <Button
                onClick={() => setView('perform')}
                className={`${view === 'perform' ? 'btn-active' : 'btn'}`}>
                Perform
            </Button>
            <Button
                onClick={() => setView('save')}
                className={`${view === 'save' ? 'btn-active' : 'btn'}`}>
                Save
            </Button>
        </div>
    )
}

export default Modes