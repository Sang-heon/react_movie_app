import React from "react";


class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined ) {
            history.push("/")
        }
        
    };
    render() {
        const { location } = this.props;
        console.log(location.state)
        console.log(location.state.genres)

        return (
            <div className="movie__detail">
                <div className="movie__detail__top">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <h2>{location.state.title}</h2>
                    <em>{location.state.year}</em>
                    <ul>
                        {location.state.genres.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="movie__detail__bot">
                    <p>{location.state.summary}</p>
                </div>
                
            </div>
        )
    };
}

export default Detail;