import { TOGGLE_STEP } from "../ctx/actions";
import { useStepsContext } from "../ctx/stepContext";
import Button from "./button";

const Grid = () => {
    const { state, dispatch } = useStepsContext()
    
    return (
        <>
            <div className='grid'>
                {state.steps.map((step, i) => (
                    <Button
                        key={step + i}
                        onClick={() => {
                            dispatch({
                                type: TOGGLE_STEP,
                                payload: step.stepId
                            })
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default Grid