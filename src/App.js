import React, {useContext} from 'react';
import {BrowserRouter,Switch, Route, Link} from "react-router-dom";
import './App.css';
// import P5js from "./components/p5js_advance/components/App";
import Scrat from "./components/scrat/component/App";
import P5 from "./components/p5js_beginner/components/App";
import Sketch from "./components/sketch/components/App";
import Dinosaur from "./components/auto_dinosaur/components/App";
import Editor from "./components/editor/component/App";
import Snake from "./components/snake_game/components/App";
import BricksBreaker from "./components/bricks_breaker/components/App";
import Memory from "./components/memory/components/App";
import Mole from "./components/whack_a_mole/components/App";
import HomePage from "./components/home/Home"
import Activity from "./components/activity/Activity"
import Signup from './components/Signup';
import Login from "./components/Login";
import ForgotPassword from './components/ForgotPassword';
import {useAuth} from "./context/AuthContext"

function App() {

  const {currentUser} = useAuth()

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/activity" component={Activity} />
          {currentUser && <Route path="/scrat" component={Scrat} />}
          {currentUser && <Route path="/p5" component={P5}/>}
          {currentUser && <Route path="/sketch" component={Sketch}/>}
          {currentUser && <Route path="/dinosaur" component={Dinosaur}/>}
          {currentUser && <Route path="/editor" component={Editor}/>}
          {currentUser &&<Route path="/snake" component={Snake}/>}
          {currentUser && <Route path="/bricksbreaker" component={BricksBreaker}/>}
          {currentUser && <Route path="/memory" component={Memory}/>}
          {currentUser && <Route path="/mole" component={Mole}/>}
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route component={PageNotFound} />
        </Switch> 
      </BrowserRouter>
  );
}

function Home() {
  return(
    <div>
      <h2>Routes</h2>
      <ul>
      <li>dinosaur: /dinosaur</li>
      <li>scrat: /scrat</li>
      <li>sketch: /sketch</li>
      <li>p5: /p5</li>
      <li>editor: /editor</li>
      <li>snake: /snake</li>
      <li>bricks breaker: /bricksbreaker</li>
      <li>memory game: /memory</li>
      <li>whack a mole: /mole</li>
      </ul>
    </div>
  );
}

function PageNotFound(){
  return(
    <div>
      <div className="page_top">
        <img className="page404" src="https://miro.medium.com/max/5120/1*DeBkx8vjbumpCO-ZkPE9Cw.png" alt="page not  found"/>
      </div>
      <style jsx>{`
        .page_top{
          text-align: center;
        }

        .page404{
          width: 600px;
        }
      `}</style>
    </div>
  )
}

function Spare(){
  return <h2>working</h2>
}

export default App;