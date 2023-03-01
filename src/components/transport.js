import * as Tone from "tone";
import Button from "./Button"
import { useStepsContext } from "../ctx/stepContext"
import { START_TRANSPORT } from "../ctx/actions"

const TransportControl = () => {
    const { state, dispatch } = useStepsContext()
    return (
        <div className="transportControl">
            <Button
                onClick={() => dispatch({
                    type: START_TRANSPORT,
                    payload: state
                })}>
                Start
            </Button>
            <Button>Pause
            </Button>
            <Button
                onClick={() => {

                }}>
                Stop

            </Button>
        </div>
    )
}

export default TransportControl