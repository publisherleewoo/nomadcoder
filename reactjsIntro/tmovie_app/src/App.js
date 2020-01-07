import React, { Component } from 'react';
import axios from 'axios'
import Movie from './Movie';

class App extends Component {

  state = {
    loading: true,
    movies: []
  }

  async componentDidMount() {
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ loading: false, movies })
    console.log(movies)
  }


  render() {
    const { loading , movies } = this.state;
    return (
      <div className="App">
        {
          (loading) ? 
                    "loading"
                     :
                     movies.map((movie)=> <Movie
                                                key={movie.id}
                                                id={movie.id}
                                                year={movie.year}
                                                title={movie.title}
                                                summary={movie.summary}
                                                poster={movie.medium_cover_image}
                                           ></Movie>)

        }
      </div>
    );
  }
}

export default App;
