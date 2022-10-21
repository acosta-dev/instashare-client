import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Home/>

    </div>
  )
}

export default App
