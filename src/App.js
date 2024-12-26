import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Header from './Components/Header'; 
import Home from './Pag/Home';
function App() {
  return (
    <>
      <BrowserRouter>
    
        {/* Header or any other content */}
        <Header />
        

        {/* Routes for the application */}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

