import Slider from "./slider";
import { useStepsContext } from "../ctx/stepContext";
import { SEQUENCE_CHANGE } from "../ctx/actions";
import { useState } from "react";

const ParameterSlider = ({ stepId, dispatch }) => {

    const [parameterName, setParameterName] = useState('pitch')
    return (
        <>
            <select value={parameterName}
                onChange={(e) => {
                    setParameterName(e.target.value)
                }}>
                <option value='pitch'>Pitch</option>
                <option value='attack'>Attack</option>
                <option value='decay'>Decay</option>
            </select>
            <Slider

                onChange={(event) => {
                    dispatch({
                        type: SEQUENCE_CHANGE,
                        payload: {
                            id: stepId,
                            value: event.target.value,
                            parameterName
                        }
                    })
                }}
            />
        </>
    )
}
const Sequencer = () => {
    const { state, dispatch } = useStepsContext()
    return (
        <>
            <div className='sequencerDiv'>
                {state.steps.map((step, i) => (
                    <ParameterSlider
                        key={step.stepId}
                        {...step}
                        dispatch={dispatch}
                    />

                ))}
            </div>
        </>
    )
}

export default Sequencer