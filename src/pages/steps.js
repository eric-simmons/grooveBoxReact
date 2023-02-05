import { useState, useEffect } from 'react'
import Modes from '../components/modes'
import Button from '../components/button'
import { Oscillator, Sequence, Transport, Draw, time, Start, } from 'tone'




const StepsPage = (...props) => {
    const [steps, setSteps] = useState(
        [...Array(16).fill(0).map((step, i) => {
            return step = {
                stepId: i,
                activeStep: false,
                currentStep: false,
                firstStep: 0,
                lastStep: 15,
                className: 'btn'

            }
        })])

    Transport.loop = true
    Transport.loopEnd = ("2:0:0")

    const playHead = () => {
        //why doesnt it play without this??
        const osc = new Oscillator().toDestination();
        Transport.scheduleRepeat((time) => {

            Draw.schedule(() => {
                let playHead = Math.floor(((Transport.progress) * 4) * Transport.loopEnd)
                let updatedSteps = steps.map(step => {
                    return {
                        ...step,
                        currentStep: step.stepId === playHead ? !step.currentStep : step.currentStep
                    }
                })
                setSteps(updatedSteps)
            }, time)

        }, "8n")
        Transport.start();
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
        setSteps(updatedSteps)
    }


    return (
        <>
        <div className='grid'>
            {steps.map((step, i) => (
                <Button
                    key={(steps[i].stepId)}
                    onClick={() => { toggleStep(step.stepId) }}
                    active={false}
                    style={{ backgroundColor: step.currentStep ? 'red' : '' }}
                />

            ))}
            
                
        </div>
        <Button
        onClick={() => { playHead() }}>START</Button>
        </>
    )
}

export default StepsPage

