import React from "react"

let steps = [...Array(16).keys()]
steps.map(step => {
   return step = ({
        stepId: Math.random(),
        noteOn: false,
        velocity: 0,
        playhead: false,
        firstStep: false,
        lastStep: false,
        isDown: false
    })
})


class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            steps: steps
        }
        this.toggleStep = this.toggleStep.bind(this)
    }

    toggleStep(stepId) {
        console.log(stepId)
        const updatedSteps = [...this.state.steps].map(step => {
            return {
                ...step,
                noteOn : step.stepId === stepId ? !step.noteOn : step.noteOn
            }
        })
        //in updated steps find step by id

        //modify step object

        console.log(updatedSteps)
        this.setState({
            steps: updatedSteps
        })
    }
 

    render() {
        return (
            <div className="grid">
                {this.state.steps.map((step, i) => {
                    return (
                        <button className='stepBtn'
                            key={i}
                            onClick={() => this.toggleStep(step.stepId)}
                            style={{ backgroundColor: step.noteOn ? 'red' : 'blue' }}
                        >
                            {step.noteOn ? 'Active' : 'Inactive'}
                        </button>
                    )
                })}
            </div>
        )
    }
}

export default Grid