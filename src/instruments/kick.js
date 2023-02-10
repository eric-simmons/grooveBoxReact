
// import { MembraneSynth, Destination, Filter  } from 'tone'


// class Kick {
//     constructor(...pattern){
//         this.pattern = pattern
//     }
// }

// const kickDrum = new MembraneSynth({
//     volume: 6,
// }).toDestination();
// const lowPass = new Filter({
//     frequency: 8000,
// }).toDestination();

// // const kickSequence = new Tone.Sequence((time) => {
// //     let currentStep = Math.floor(kickSequence.progress * kickSequence.loopEnd)
// //     if (stepBtns[currentStep].matches('.activeStep')) {
// //         kick.triggerAttackRelease(notes[currentStep], noteLength[currentStep], time)
// //     }
// // }, findMatches(scale, notes)).start(0)

// export const startKickPart = () => {
//     const kickPart = new Tone.Part((time, value) => {
//         kickDrum.triggerAttackRelease(value.note, '8n', time, value.velocity)
//     }, kicks).start(0);
//     kickPart.loop = true
// }


// export default Kick
