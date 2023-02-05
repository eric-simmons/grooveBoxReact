import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

const defaultSteps = [...Array(16).fill(0).map((_, i) => {
    return {
        stepId: i,
        activeStep: false,
        currentStep: false,
        className: 'btn',
        settings: {
            velocity: 0,
            pitch: 30,
        }


    }
})]

const defaultState = {
    steps: defaultSteps,
    firstStep: 0,
    lastStep: 15
    //song: {}
}

console.log(defaultSteps)

export const StepsContext = createContext(defaultState)

export const StepsProvider = ({ children }) => {
    const [steps, dispatch] = useReducer(reducer, defaultState)
    return (
        <StepsContext.Provider
            value={{ steps, dispatch }}>
            {children}
        </StepsContext.Provider>
    )
}


export const useStepsContext = () => useContext(StepsContext)