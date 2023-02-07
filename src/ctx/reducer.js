import { TOGGLE_STEP, SEQUENCE_PITCH } from "./actions"
import classNames from "classnames"
let isPressed = false
let isActive = false

let btnClass = classNames({
    'btn': true ,
    'btn-pressed': isPressed,
    'btn-active': isActive
}
)



const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_STEP:
            const stepId = action.payload
            const updatedSteps = state.steps.map(step => {
                return step.stepId === stepId
                    ? 
                    {  
                        ...step,
                        activeStep: !step.activeStep,
                        className: btnClass,
                    } : step
            })
            return (
                {
                    ...state,
                    steps: updatedSteps
                })
                case SEQUENCE_PITCH:
                  {
                    console.log(action.payload)
                  }
                    
                
                
        default:
            return state
    }
    
}
export default reducer