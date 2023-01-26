
import React, { useState } from 'react';

//container to hold "mode selector"
import Container from './components/container';
import SlidersPage from './pages/sliders';
import StepsPage from './pages/steps';


function App() {

  const [view, setView] = useState('sliders')

  const renderView = () => {
    if (view === 'steps') {
      return <StepsPage />
    }
    else if (view === 'sliders') {
      return <SlidersPage />
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
