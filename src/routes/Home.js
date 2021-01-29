import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {

  state = {
    isLoading : true,
    movies : [],
  };

  getMovies = async () => {
    // const movies & console.log(movies.data.data.movies)  // 영화종류 ES6으로 가져오기
    // const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); 
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    // sort_by (title, year, rating, peers, seeds, download_count, like_count, date_added)
    this.setState({movies: movies, isLoading: false})
    // this.setState({movies, isLoading: false}) // ES6 movies:movies 
    
  };

  componentDidMount() {
    this.getMovies();
  };

  render () {  
    const { isLoading, movies } = this.state; // 인자에 직접 this.state 를 입력하지 않고 생략하기 위해 작업
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
        ) : (
          <div className="movie-list">
            {movies.map(item => (
                <Movie 
                  key={item.id} 
                  id={item.id} 
                  title={item.title} 
                  year={item.year} 
                  genres={item.genres}
                  summary={item.summary} 
                  poster={item.medium_cover_image}
                />
              ))}
          </div>
        )}
      </section>
    );
  };
}

export default Home;
