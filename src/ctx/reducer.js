import * as Tone from "tone";
import { MembraneSynth, StateTimeline } from "tone";
import Kick from "../instruments/kick";


import {
    TOGGLE_STEP,
    SEQUENCE_CHANGE,
    START_TRANSPORT,
} from "./actions"


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
            console.log(updatedSteps)
            return (
                {
                    ...state,
                    steps: updatedSteps
                })

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
            {//should this not be used in context it updates all steps EVERY step??
                //why doesnt it work without osc????
                // let oneKick = {
                //     time: '8n', 
                //     note: "C3",
                //     velocity: (Math.floor(Math.random() * 2)) * (Math.random() * 1)
                // }
                // let kicks = []
                // for(let i = 0; i<16; i++){
                //     kicks.push(oneKick)
                // }






                const osc = new Tone.Oscillator()
                Tone.Transport.loop = true
                Tone.Transport.loopEnd = ("2:0:0")

                Tone.Transport.scheduleRepeat((time) => {
                    let playHead = Math.floor(((Tone.Transport.progress) * 4) * Tone.Transport.loopEnd)
                    let updatedSteps = state.steps.map(step => {
                        return step.stepId === playHead
                            ? {
                                ...step,
                                currentStep: !step.currentStep,
                                className: "btn-playhead"
                            } : step
                    })
                    console.log(updatedSteps)
                    Tone.Draw.schedule(() => {


                        return (
                            {
                                ...state,
                                steps: updatedSteps
                            }
                        )

                    }, time)
                }, "8n")


                // transport must be started before it starts invoking events
                const kick = new MembraneSynth().toDestination();
                const seq = new Tone.Sequence((time, value) => {
                    kick.triggerAttackRelease(value.note, '8n', time, value.velocity);
                    // subdivisions are given as subarrays
                }, []).start(0);

                Tone.Transport.start()
                // Tone.Transport.start()

            }

        default:
            return state
    }

}
export default reducer