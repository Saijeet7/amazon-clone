import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route exact path="/checkout" element={[<Header/>,<Checkout/>]}/> 
        </Routes>
        <Routes>
          <Route exact path="/" element={[<Header/>,<Home/>]}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
