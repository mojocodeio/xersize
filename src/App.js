import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './App.module.css';

export const App = () => {
  const [isCool, setCoolness] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isCool ? 'I am cool' : 'I am not quite cool yet'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => setCoolness(!isCool)}
          className={isCool ? styles.cool : styles.uncool}
        >
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
