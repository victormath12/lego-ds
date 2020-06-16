import React from 'react';
import logo from './logo.svg';
import './App.css';

import { LegodsButton } from '@lego-ds/react';
console.log(LegodsButton);

function App() {
  const handleClick = (event) => {
    console.log(event)
  }
  return (
    <div className="App">
      React
      <hr />
      <LegodsButton
        variant='primary'
        onButtonClick={event => handleClick(event.detail)}>
          default
      </LegodsButton>
      <br />
      <LegodsButton
        variant='secondary'
        aria-label="teste de a11y"
        styles={{ 
          width: '200px',
          height: '80px',
          backgroundColor: '#ff57ac'
        }}
        onButtonClick={event => handleClick(event.detail)}>
          default
      </LegodsButton>
    </div>
  );
}

export default App;
