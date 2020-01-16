// import React from 'react'

// export default function MovieDetail({location:{state}}) {
//     let {year,title,summary,poster,genres} =state;
//     return (
//         <div>
//             year:{year}<br/>
//             title:{title}<br/>
//             {summary}<br/>
//             {poster}<br/>
//             {genres}
//         </div>
//     )
// }


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
        const {location } = this.props
        if(location.state){
            return (
                <div>
                    <p>{location.state.year}</p>
                    <img src={location.state.poster} alt={location.state.title} />                
                </div>
            )
        }else{
            return null
        }
        
    }
}
