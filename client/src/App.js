import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Test from './pages/test.js';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/test' element={ 
        <Test/>
      }
      >TestPage</Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
