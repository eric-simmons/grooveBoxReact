import * as Tone from "tone";

import {
    TOGGLE_STEP,
    SEQUENCE_PITCH,
    START_PLAYHEAD
} from "./actions"


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
        case START_PLAYHEAD:
            {
                //why doesnt it work without this????
                const osc = new Tone.Oscillator()
                Tone.Transport.scheduleRepeat((time) => {
                    console.log(time)
                    Tone.Draw.schedule(() => {
                        let playHead = Math.floor(((Tone.Transport.progress) * 4) * Tone.Transport.loopEnd)
                        let updatedSteps = state.steps.map(step => {
                            return {
                                ...step,
                                currentStep: step.stepId === playHead ? !step.currentStep : step.currentStep
                            }
                        })
                    }, time)

                }, "8n")
                // transport must be started before it starts invoking events
     
                Tone.Transport.start()
                // Tone.Transport.start()

            }



        default:
            return state
    }

}
export default reducer