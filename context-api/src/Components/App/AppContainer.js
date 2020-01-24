import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props){
    super(props)
    
    // this._plusCount=()=>{

    // }
    
    this.state={
      count:0,
      plus:()=>{
        this.setState({
          count:this.state.count+1
        })
      },
      min:()=>{
        console.log(this.state.count)
        console.log(this.count)
        this.setState({
          count:this.state.min-1
        })
      }
    }
  }
  
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
