import React, { PureComponent } from 'react';
import Movie2 from "../components/Movie2"
import axios from "axios";
import "./Home.css";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor")
  }
  state = {
    isLoading: true,
    movies: []
  }

  getMovides = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    console.log("component did mount")
    this.getMovides();
  }

  componentDidUpdate() {
    console.log("component did update")
  }
  render() {
    console.log("render");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(movie => {
                return <Movie2
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              })}
            </div>
          )}
      </section>
    )
  }
}
export default Home;
