import Slider from "./slider";
import { useStepsContext } from "../ctx/stepContext";
import { SEQUENCE_PITCH } from "../ctx/actions";


const Sequencer = () => {
    const { state, dispatch } = useStepsContext()
    return (
        <>
            <div className='sequencerDiv'>
                {state.steps.map((slider, i) => (

                    <Slider
                        key={slider + i}
                        onChange={(event) => {
                            dispatch({
                                type: SEQUENCE_PITCH,
                                payload: {
                                    id: slider.stepId,
                                    value: event.target.value
                                }
                                    
                            })
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default Sequencer