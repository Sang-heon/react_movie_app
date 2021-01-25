import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({title, year, summary, poster, genres}){
    return (
        <Link to={{
            pathname:"/movie-detail",
            state:{
                title,
                year,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0,180)}...</p>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    // key: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // medium_cover_image
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;