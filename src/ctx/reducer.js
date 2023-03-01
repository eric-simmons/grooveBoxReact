import * as Tone from "tone";
import { MembraneSynth, StateTimeline } from "tone";
import Kick from "../instruments/kick";
import classNames from "classnames"
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
                //if step matches payload set btnActive true for that step
                console.log(step.className)
                return step.stepId === action.payload.stepId
                    ? {
                        ...step,
                        activeStep: !step.activeStep,
                        className: classNames({
                            btn: true,
                            btnActive: !step.activeStep, 
                            btnPlayhead: false
                        })
                    } : step
            })

            console.log(updatedSteps)
            return (
                {
                    ...state,
                    steps: updatedSteps
                })
        case PLAYHEAD: {
            const updatedSteps = state.steps.map(step => {
                return step.stepId === action.payload
                    ? {
                        ...step,
                        playhead: !step.playhead,
                        className: classNames({
                            btn: false,
                            btnActive: false, 
                            btnPlayhead: !step.playhead
                        })
                    }
                    : {
                        ...step, 
                        playhead: false, 
                        className: classNames({
                            btn: true, 
                            btnActive: step.activeStep, 
                            btnPlayhead : false
                        })
                    }
            })
            console.log(updatedSteps)
            return (
                {
                    ...state,
                    steps: updatedSteps
                })

        }
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