import React, { Component } from 'react'

export default class MovieDetail extends Component {
    // constructor(props){
    //     super(props)
    // };
    componentDidMount(){
        const {location,history } = this.props
        if(location.state === undefined){
            history.push("/")
        }
    }
    render() {
        console.log(this.props)
        const {location } = this.props
        if(location.state){
            return (
                <div>
                    파라미터받는곳
                    <p>{location.state.year}</p>
                    <img src={location.state.poster} alt={location.state.title} />                
                </div>
            )
        }else{
            return null
        }
        
    }
}
