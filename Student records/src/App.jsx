import React from 'react';
import './index.css'
import './App.css';
import AddStudent from './page/AddStudent';
import Home from './page/Home';
import Admin from './page/Admin'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<AddStudent />}/>
        <Route path='/Admin' element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;