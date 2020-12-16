import React from 'react';
// import Difficulties from '../utils/difficulties';
import MapProp from './MapPropInterface'

export default class MapEntry extends React.Component<{ className: string, map: MapProp }, MapProp> {
    render() {
        return (
            <div className={`${this.props.className} status-${this.props.map.completed} `}>
                <h3>{this.props.map.title}</h3>
                <p>userId: {this.props.map.userId}</p>
                <p>ID: {this.props.map.id}</p>
            </div>
        );
    }
}