import './App.css';
import React from 'react';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './pages/contato/contato';
import Garantir from './pages/garantir/Garantir';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/Garantir' element={<Garantir/>}/>      
      </Routes>
    </BrowserRouter>
  );
}
  
 
export default App;
