import { TOGGLE_STEP, SEQUENCE_PITCH } from "./actions"

const reducer = (state, action) => {
    console.log(action.payload)

    switch (action.type) {
        case TOGGLE_STEP:
            const stepId = action.payload
            const updatedSteps = state.steps.map(step => {
                return step.stepId === stepId ? {
                    ...step,
                    activeStep: !step.activeStep
                } : step

            })

            return (
                {
                    ...state,
                    steps: updatedSteps
                })
        default:
            return state
    }
}
export default reducer