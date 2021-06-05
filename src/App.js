import React from 'react';
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

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/scrat" component={Scrat} />
          <Route path="/p5" component={P5}/>
          <Route path="/sketch" component={Sketch}/>
          <Route path="/dinosaur" component={Dinosaur}/>
          <Route path="/editor" component={Editor}/>
          <Route path="/snake" component={Snake}/>
          <Route path="/bricksbreaker" component={BricksBreaker}/>
          <Route path="/memory" component={Memory}/>
          <Route path="/mole" component={Mole}/>
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
          width: 800px;
        }
      `}</style>
    </div>
  )
}

function Spare(){
  return <h2>working</h2>
}

export default App;

{/* <nav>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/scrat">Scrat</Link>
  </li>
  <li>
    <Link to="/p5_beginner">P5 beginner</Link>
  </li>
</ul>
</nav>

{/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */}
{/* <Switch>
<Route path="/scrat">
  <Scrat />
</Route>
<Route path="/p5_beginner">
  <P5 />
</Route>
<Route path="/">
  <Home />
</Route>
</Switch>  */}