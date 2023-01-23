import React from "react"

let steps = []

for (let i = 0; i < 16; i++) {
    steps.push({
        noteOn: false,
        velocity: 0,
        playhead: false,
        firstStep: false,
        lastStep: false,
    })
}



class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            steps: steps
        }
        this.activateStep = this.activateStep.bind(this)
    }

    activateStep() {
        let steps = this.state.steps
        this.setState({ steps: steps });
    }


    render() {
        return (
            <div className="grid">
                {this.state.steps.map((button, i) => {
                    console.log(button)
                    return (
                        <button className='stepBtn'
                            key={'step' + i}
                            onClick={this.activateStep}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Grid