import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Welcome from "./components/Welcome/welcome";
import Home from "./components/Home/home";
import Hema from "./components/Hema/Hema";

import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Welcome/> }/>
          <Route exact path='/home' element={ <Home/> }/>
          <Route exact path='/hema' element={ <Hema/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
