import { TOGGLE_STEP } from "../ctx/actions";
import { useStepsContext } from "../ctx/stepContext";
import Button from "./button";

const Grid = () => {
    const { steps, dispatch } = useStepsContext()
    
    return (
        <>
            <div className='grid'>
                {steps.steps.map((step, i) => (
                    <Button
                        key={step + i}
                        onClick={() => {
                            console.log(step.stepId)
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