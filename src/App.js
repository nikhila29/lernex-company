import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { Home } from './components/Home';


function App() {
  return (
    <div className="App" >
      <div className='sidebar'><Sidebar/></div>
      <div>
        <div className='navbar'><Navbar/></div>
        <div className='home'><Home/></div>
      </div>
      
    </div>
    
  );
}

export default App;
