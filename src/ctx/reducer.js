import { TOGGLE_STEP, SEQUENCE_PITCH } from "./actions"

const reducer = (steps, action) => {
    console.log(action.payload)

    switch (action.type) {
        case TOGGLE_STEP:

            const stepId = action.payload
            return ([
                ...steps,
                {
                    activeStep: steps.stepId === stepId ? !steps.activeStep : steps.activeStep,
                    className: steps.stepId === stepId ? 'btn-active' : 'btn'
                }
            ])
            default: return steps
    }
}
export default reducer