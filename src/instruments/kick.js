import { useState, useEffect } from 'react'
import Modes from '../components/modes'
import Button from '../components/button'
import { Oscillator, Sequence, Transport, Draw, time, Start, } from 'tone'

    Transport.loop = true
    Transport.loopEnd = ("2:0:0")

    const playHead = () => {
        //why doesnt it play without this??
        const osc = new Oscillator().toDestination();
        // repeated event every 8th note
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
                // do drawing or DOM manipulation her
                // console.log()
            }, time)

        }, "8n")
        // transport must be started before it starts invoking events
        Transport.start();
    }
    // transport must be started before it starts invoking events

    const toggleStep = (stepId) => {
        const updatedSteps = steps.map(step => {
            // console.log(step.stepId, stepId)
            return {
                ...step,
                activeStep: step.stepId === stepId ? !step.activeStep : step.activeStep,
                
            }
        })
        setSteps(updatedSteps)
    }
  

export default StepsPage
