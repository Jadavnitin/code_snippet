import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';




const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App


