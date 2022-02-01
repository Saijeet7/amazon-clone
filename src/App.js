import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth} from "./firebase"
import { useStateValue} from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    //will run only once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>> ',authUser);

      if (authUser){
        //the user just logged in / the user was not logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
