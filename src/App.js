
import React, { useState } from 'react';
import Tone from "tone"

//Modes to hold "mode selector"
import Modes from './components/modes';
import SlidersPage from './pages/sliders';
import StepsPage from './pages/steps';
import PerformPage from './pages/perform';
import SavePage from './pages/save';
import TransportControl from './components/transport';

function App() {

  const [view, setView] = useState('steps')
  

  const renderView = () => {
    if (view === 'steps') {
      return <StepsPage />
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

      <TransportControl/>
    </>
  );
}



export default App
