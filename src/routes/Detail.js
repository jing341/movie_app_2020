import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
        return (
            <div className="movie--data">
        <h1 className="movie--title">{location.state.title}{}</h1>
        <span className="movie--summary">{location.state.summary}</span>
        </div>
        )
    } else {
        return null;
    }
    }
}

export default Detail;