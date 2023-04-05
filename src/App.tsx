import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
// import Home from './pages/home';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <Outlet />
    </div>
  );
}

export default App;
