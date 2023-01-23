
import React, { useState } from 'react';
import './App.css';




function App() {
  return (
    <div className='main'>
      <Grid />
    </div>
  );
}

let steps 
class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: [{}]
    }
    this.activateStep = this.activateStep.bind(this)
  }


  createSteps() {
    for (let i = 0; i < 16; i++) {
      steps.push({
        noteOn: false,
        velocity: 0,
        playhead: false,
        firstStep: false,
        lastStep: false,
      })
      this.setState({ steps })
    }
  }

  activateStep() {
    let steps = this.state.steps
    this.setState({ steps: steps });
  }

  render() {
    return (
      <div className="grid">
        {this.createSteps()}
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


export default App
