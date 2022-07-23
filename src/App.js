import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Welcome from "./components/Welcome/welcome";
import Home from "./components/Home/home";
import Nav from "./components/Nav/Nav";

import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path='/' element={ <Welcome/> }/>
          <Route exact path='/home' element={ <Home/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
