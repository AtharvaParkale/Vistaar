import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainBody from './components/mainBody/MainBody';
import Suggestion from './components/suggestions/Suggestion';

function App() {
  return (
    <>
      <Navbar />
      <MainBody />
      <Suggestion/>
    </>
  );
}

export default App;
