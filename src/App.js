
import React, { useState } from 'react';
import Tone from "tone"

//Modes to hold "mode selector"
import { StepsProvider } from './ctx/stepContext';
import Grid from './components/grid';
import Modes from './components/modes';
import SlidersPage from './pages/sliders';
import StepsPage from './pages/steps';
import PerformPage from './pages/perform';
import SavePage from './pages/save';
import TransportControl from './components/transport';


function App() {

  const [view, setView] = useState('steps')
  const [playHead, setPlayHead] = useState('stop')
  

  const renderView = () => {
    if (view === 'steps') {
      return <Grid />
    }
    else if (view === 'sliders') {
      return <SlidersPage />
    }
    else if (view === 'perform') {
      return <PerformPage />
    }
    else if (view === 'save') {
      return <SavePage />
    }
    else return 'no view'
  }





  return (
    <>
      <Modes
        className='modes'
        view={view}
        setView={setView} />
      {renderView()}

      <TransportControl
      className='transportControl'
      playHead={playHead}
      setPlayHead={setPlayHead}/>

    </>
  );
}



export default App
