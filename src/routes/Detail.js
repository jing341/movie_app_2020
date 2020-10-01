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
            <div>
        <h1 style>{location.state.title}</h1>
        <span>{location.state.summary}</span>
            </div>
        )
    } else {
        return null;
    }
    }
}

export default Detail;