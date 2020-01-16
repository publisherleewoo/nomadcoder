import React from "react";
import {HashRouter,Route} from "react-router-dom"
import Home from "./routes/Home"
import Home2Param from './routes/Home2Param';
import About from "./routes/About"
import Navigation from './components/Navigation';
import MovieDetail from './components/MovieDetail';
import MovieParam from './components/MovieParam';
function App(){
  return <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/movie-detail" exact={true}  component={MovieDetail}></Route>
    <Route path="/Home2Param" exact={true} component={Home2Param}></Route>
    <Route path="/movie/:id" exact={true} component={MovieParam}></Route>
    <Route path="/about" component={About}></Route>
  </HashRouter>
 
}

export default App