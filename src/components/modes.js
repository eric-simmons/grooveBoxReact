//container holds mode selector buttons
import Button from "./button"

const Modes = ({ view, setView }) => {
    return (
        <div className="modes">
            <Button
                onClick={() => setView('steps')}
                className={`${view === 'steps' ? 'btn' : 'btn-active'}`}>
                Steps
            </Button>

            <Button
                onClick={() => setView('sliders')}
                className={`${view === 'sliders' ? 'btn' : 'btn-active'}`}>
                Sliders
            </Button>
            <Button
                onClick={() => setView('perform')}
                className={`${view === 'perform' ? 'btn' : 'btn-active'}`}>
                Perform
            </Button>
            <Button
                onClick={() => setView('save')}
                className={`${view === 'save' ? 'btn' : 'btn-active'}`}>
                Save
            </Button>
        </div>
    )
}

export default Modes