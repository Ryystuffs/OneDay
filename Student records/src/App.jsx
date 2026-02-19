import React from 'react';
import './App.css';
import AddStudent from './page/AddStudent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home';
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<AddStudent />}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;