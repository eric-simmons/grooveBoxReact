import { useState, useEffect } from 'react'
import Container from '../components/container'
import Button from '../components/button'
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers'



const StepsPage = (...props) => {
    const [steps, setStepsState] = useState(
        [...Array(16).fill(0).map(step => {
            return step = {
                stepId: Math.random(),
                activeStep: false,
                currentStep: false,
                firstStep: false,
                lastStep: false,
                className: 'btn'
            }
        })])

    const begin = () => {
        console.log('clicked')
        const visualSequence = new Tone.Sequence((time) => {
            Tone.Draw.schedule(() => {
                console.log('hey')
            }, time)
        }, steps).start(0)
    }



    const toggleStep = (stepId) => {
        const updatedSteps = steps.map(step => {
            // console.log(step.stepId, stepId)
            return {
                ...step,
                activeStep: step.stepId === stepId ? !step.activeStep : step.activeStep,
                className: step.stepId === stepId ? 'btn-active' : 'btn'
            }
        })
        setStepsState(updatedSteps)
    }


    return (
        <div className='grid'>
            {steps.map((step, i) => (
                <Button
                    key={(steps[i].stepId)}
                    onClick={() => { toggleStep(step.stepId) }}
                    active={false}
                    style={{ backgroundColor: step.activeStep ? 'red' : 'blue' }}
                />

            ))}
            <button
                onClick={() => { begin() }}>START</button>
        </div>
    )
}

export default StepsPage

