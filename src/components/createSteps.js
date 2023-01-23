
  const createSteps = () => {
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
  }


  export default createSteps