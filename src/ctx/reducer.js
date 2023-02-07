import { TOGGLE_STEP, SEQUENCE_PITCH } from "./actions"
// import classNames from "classnames"
// let isActive 

// let btnClass = classNames({
//     'btn': true,
//     'btn-active': isActive
// }
// )



const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_STEP:
            const stepId = action.payload
            const updatedSteps = state.steps.map(step => {
                return step.stepId === stepId
                    ? {
                        ...step,
                        activeStep: !step.activeStep,
                        className: step.className === 'btn' ? 'btn-active' : 'btn',
                    } : step
            })
            console.log(updatedSteps)
            return (
                {
                    ...state,
                    steps: updatedSteps
                })

        case SEQUENCE_PITCH:
            {
                const sliderId = action.payload.id
                const sliderValue = action.payload.value
                const updatedSteps = state.steps.map(step => {
                    return step.stepId === sliderId
                        ? {
                            ...step,
                            settings: {
                                pitch: sliderValue
                            }
                        } : step
                })
                return (
                    {
                        ...state,
                        steps: updatedSteps
                    })
            }



        default:
            return state
    }

}
export default reducer