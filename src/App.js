import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/calculator"> Calculator </Link>
      </header>
    </div>
  );
}

export default App;
