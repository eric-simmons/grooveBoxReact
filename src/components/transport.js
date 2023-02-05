
import Button from "./button"

const TransportControl = ({ playHead, setPlayHead }) => {
    return (
        <div className="transportControl">
            <Button
                onClick={() => setPlayHead('start')}>
                Start
            </Button>
            <Button
                onClick={() => setPlayHead('pause')}>
                Pause
            </Button>
            <Button
                onClick={() => setPlayHead('stop')}>
                Stop
            </Button>
        </div>
    )
}

export default TransportControl