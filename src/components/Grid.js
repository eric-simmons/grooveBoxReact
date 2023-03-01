import { PLAYHEAD, TOGGLE_STEP } from "../ctx/actions";
import { useEffect, useState } from "react";
import { useStepsContext } from "../ctx/stepContext";
import * as Tone from 'tone'
import StepButton from "./StepButton";

const Grid = () => {
    const { state, dispatch } = useStepsContext()
    const [playhead, setPlayhead] = useState(0)
    useEffect(() => {
        dispatch({
            type: PLAYHEAD,
            payload: playhead
        })
    }, [playhead, dispatch])


    Tone.Transport.scheduleRepeat((time) => {
        Tone.Draw.schedule(() => {
            let playhead = Math.floor(((Tone.Transport.progress) * 4) * Tone.Transport.loopEnd)
            setPlayhead(playhead)
        }, time)
    }, "8n")
    return (
        <>
            <div className='grid'>
                {state.steps.map((step, i) => (
                    <StepButton
                        key={step + i}
                        className={step.className}
                        onClick={(e) => {
                            // handleToggle(e);
                             dispatch({
                                type: TOGGLE_STEP,
                                payload: step
                            })
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default Grid