import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Welcome from "./components/Welcome/welcome";
import Projects from "./components/Projects/projects";
import Home from "./components/Home/home";

import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Welcome/> }/>
          <Route exact path='/home' element={ <Home/> }/>
          <Route exact path='/projects' element={ <Projects/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
