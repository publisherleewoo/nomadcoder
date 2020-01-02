import React, { PureComponent } from 'react';


class App extends PureComponent {
  constructor(props){
    super(props);
    console.log("hello")
  }
  state = {
    count: 0
  }

  add=()=>{
    this.setState((current)=>({
      count : current.count +1
    }))
  }
  min=()=>{
    this.setState((current)=>({
      count :  current.count -1
    }))
  }
  componentDidMount(){
    console.log("component did Mount")
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>the Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.min}>Minus</button>
      </div>
    );
  }
}
export default App;
