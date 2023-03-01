import classNames from 'classnames'
import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'




const defaultSteps = [...Array(16).fill(0).map((_, i) => {
    
    return {
        stepId: i,
        activeStep: false,
        playhead: false,
        className: classNames({
            stepBtn: true,
            btnActive: false, 
            btnPlayhead: false
        }),
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
export const StepsContext = createContext(defaultState)
export const StepsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
  
    return (
        <StepsContext.Provider
            value={{ state, dispatch }}>
            {children}
        </StepsContext.Provider>
    )
}
export const useStepsContext = () => useContext(StepsContext)