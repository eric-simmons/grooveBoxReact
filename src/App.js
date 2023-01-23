
import React, { useState } from 'react';
import './App.css';
import createSteps from './components/createSteps';
import Grid from './components/Grid';





function App() {
  return (
    <div className='main'>
      <Grid />
    </div>
  );
}


// class Grid extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       steps: [{noteOn: false}]
//     }
//     this.activateStep = this.activateStep.bind(this)
//   }

//   activateStep() {
//     let steps = this.state.steps
//     this.setState({ steps: steps });
//   }


//   render() {
//     return (
//       <div className="grid">
//         {this.state.steps.map((button, i) => {
//           console.log(button)
//           return (
//             <button className='stepBtn'
//               key={'step' + i}
//               onClick={this.activateStep}
//             />
//           )
//         })}
//       </div>
//     )
//   }
// }


export default App
