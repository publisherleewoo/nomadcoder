import React, { Component } from 'react';
import Store from "./Store"
import {BrowserRouter,Route,} from "react-router-dom"
import HomePage from "./pages/HomePage"
import TodoAppPage from "./pages/TodoAppPage"
import Nav from "./components/nav"
class App extends Component {
  constructor(props){
    super(props)
 
    this._logOut = () =>{      
      this.setState({
        isLogin:"로그아웃"
      })
    }



    this.state={
      isLogin:"로그인성공",
      logOut:this._logOut
    }
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <BrowserRouter>
          <Nav></Nav>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/todoapp" component={TodoAppPage} exact></Route>
        </BrowserRouter>
      </Store.Provider>
    );
  }
}

export default App;