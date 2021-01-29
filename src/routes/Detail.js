import React from "react";


class Detail extends React.Component{
    componentDidMount() {
        const { location } = this.props;
        console.log(location.state.title)
        
    };
    render() {
        const { location } = this.props;
        return <span>{location.state.title}</span>
    };
}

export default Detail;