import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {   //provider에 포함시키고 싶은 함수는 constructor에 있어야한다.
    super(props);
    

    this._deleteNoti = (index) =>{      
      let result = this.state.notifications.filter((ar)=>{
        return ar.id !== index;
      })
      this.setState({
        notifications:result
      })
    }

    this._seeNoti =(index)=>{
 
       var result = this.state.notifications.filter((ar)=>{
     
        if(ar.id === index){
          var result =!ar.seen;
           ar.seen = result;    
        }
        return true
      })
      this.setState({
        notifications:result
      })
    }

    this.state = {
       notifications:[
          {
            id:1,
            text:"Something",
            seen:false
          },
          {
            id:2,
            text:"Something else",
            seen:false
          },
          {
            id:3,
            text:"Something else but deffrent",
            seen:false
          },
         
        ],
        deleteNotifications:this._deleteNoti,
        seeNotifications:this._seeNoti
    }
  }
  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({ message: "Bye" })
    // }, 2000)
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
