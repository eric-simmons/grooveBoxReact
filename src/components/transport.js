
import Button from "./button"
import { useStepsContext } from "../ctx/stepContext"
import { START_PLAYHEAD } from "../ctx/actions"
import {Transport, Time, } from 'tone'



const TransportControl = () => {
    const { state, dispatch } = useStepsContext()
    return (
        <div className="transportControl">
            <Button
                onClick={() => {
                    Transport.start()
                    console.log(Time)
                    dispatch({
                        type: START_PLAYHEAD,
                        payload: state
                    })
                }}
            >
                Start
            </Button>





            <Button>Pause
            </Button>
            <Button>
                Stop
            </Button>
        </div>
    )
}

export default TransportControl