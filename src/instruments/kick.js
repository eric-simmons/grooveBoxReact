import { useState, useEffect } from 'react'
import Modes from '../components/modes'
import Button from '../components/button'
import { Oscillator, Sequence, Transport, Draw, time, Start, } from 'tone'

    Transport.loop = true
    Transport.loopEnd = ("2:0:0")
        Transport.start();

  

export default StepsPage
