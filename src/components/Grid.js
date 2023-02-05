import { TOGGLE_STEP } from "../ctx/actions";
import { useStepsContext } from "../ctx/stepContext";
import Button from "./button";

const Grid = () => {
    const { steps, dispatch } = useStepsContext()
    console.log(steps)
    return (
        <>
            <div className='grid'>
                {steps.map((step, i) => (
                    <Button
                        key={(steps[i].stepId)}
                        onClick={() => {
                            dispatch({
                                type: TOGGLE_STEP,
                                payload: step.stepId
                            })
                        }}
                        active={false}
                        style={{ backgroundColor: step.currentStep ? 'red' : '' }}
                    />
                ))}
            </div>
        </>
    )
}

export default Grid