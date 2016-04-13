import React from 'react';

export default class Icon extends React.Component {
    render() {
        return <img src={this.props.source} />;
    }
}