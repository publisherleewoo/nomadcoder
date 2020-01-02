import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log("constructor")
  }
  state = {
    isLoading: true,
    movies: []
  }

   
  componentDidMount(){
    console.log("component did mount")
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  
  componentDidUpdate(){
    console.log("component did update")
  }
  render() {
    console.log("render");
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
export default App;
