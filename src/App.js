
import React, { useState } from 'react';

//container to hold "mode selector"
import Container from './components/container';
import SlidersPage from './pages/sliders';
import StepsPage from './pages/steps';
import PerformPage from './pages/perform';
import SavePage from './pages/save';

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
      <Container
        className='modes'
        view={view}
        setView={setView} />
      {renderView()}
    </>
  );
}



export default App
