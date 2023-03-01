// import * as Tone from 'tone'

// export const visualSequence = Tone.Transport.scheduleRepeat((time) => {
//     Tone.Draw.schedule(() => {
//         let playhead = Math.floor(((Tone.Transport.progress) * 4) * Tone.Transport.loopEnd)
//         playhead = state.steps[playhead]
//         console.log("PLAYHEAD", playhead, "STATE", state)
//         dispatch({
//             type: PLAYHEAD,
//             payload: playhead
//         })
//     }, time)
// }, "8n")