import React from 'react';
import {  Route, Routes } from 'react-router-dom'


import Main from './components/hooks/main';


function App() {
  return (
    <div>
  
 <Routes>
            <Route path='/hook' element={ <Main/> } />
 </Routes>
    </div>
  );
}

export default App;