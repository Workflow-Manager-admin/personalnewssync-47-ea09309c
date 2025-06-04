import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

// PUBLIC_INTERFACE
function App() {
  // Entrypoint for PersonalNewsSync - renders the main container
  return (
    <div className="app">
      <MainContainer />
    </div>
  );
}

export default App;