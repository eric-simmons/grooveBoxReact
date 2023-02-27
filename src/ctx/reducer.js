import * as Tone from "tone";
import { MembraneSynth, StateTimeline } from "tone";
import Kick from "../instruments/kick";


import {
    TOGGLE_STEP,
    SEQUENCE_CHANGE,
    START_TRANSPORT,
    PLAYHEAD
} from "./actions"
import { StepsProvider } from "./stepContext";


const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_STEP:
            const updatedSteps = state.steps.map(step => {
                return step.stepId === action.payload.stepId
                    ? {
                        ...step,
                        activeStep: !step.activeStep,
                        className: step.className === 'btn' ? 'btn-active' : 'btn',
                    } : step
            })

            return (
                {
                    ...state,
                    steps: updatedSteps
                })
        case PLAYHEAD: {
            const updatedSteps = state.steps.map(step => {
                if (step.stepId === action.payload) {
                    console.log(step)
                }
                return step.stepId === action.payload
                    ? {
                        ...step, 
                        className : "btn-playhead"
                    }
                    :{
                        ...step, 
                        className  : "btn"
                    }
            })

            return (
                {
                    ...state,
                    steps: updatedSteps
                })

        }



        //     const updatedSteps = state.steps.map(step => {
        //         return step.stepId = action.payload
        //             ? {
        //                 ...step,
        //                 className: "btn-playhead"
        //             }
        //             : step
        //     })
        //     return (
        //         {
        //             ...state,
        //             steps: updatedSteps
        //         })
        // }
        //CHANGE_SEQUENCE
        case SEQUENCE_CHANGE:
            {
                const updatedSteps = state.steps.map(step => {
                    return step.stepId === action.payload.id
                        ? {
                            ...step,
                            settings: {
                                ...step.settings,
                                [action.payload.parameterName]: action.payload.value
                            }
                        } : step
                })
                return (
                    {
                        ...state,
                        steps: updatedSteps
                    }
                )
            }
        case START_TRANSPORT:
            {
                const osc = new Tone.Oscillator()
                Tone.Transport.loop = true
                Tone.Transport.loopEnd = ("2:0:0")


                Tone.Transport.start()

            }

        default: return state
    }

}
export default reducer