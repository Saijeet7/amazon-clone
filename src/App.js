import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth} from "./firebase"
import { useStateValue} from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KRteUJwNYJxvf8Zx9oeZGcJ62WW9UYnMfAMDc7p9YVJg8Zl6o8a7Bwb4tl9dPBzq5T6ls3jM2sD1PoqnhzeNp7A00mKinPk6E');


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
          <Route exact path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]}/> 
        </Routes>
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
