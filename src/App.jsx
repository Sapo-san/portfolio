import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Welcome from "./components/Welcome/welcome";
import Home from "./components/Home/home";
import Nav from "./components/Nav/Nav";

import "./App.scss"
import Utility from "./components/Utility/Utility";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path='/' element={ <Welcome/> }/>
          <Route exact path='/home' element={ <Home/> }/>
          <Route exact path='/utility' element={ <Utility/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
