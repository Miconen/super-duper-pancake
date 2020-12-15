import React from 'react';
import Difficulties from '../utils/difficulties';

interface MapProp {
    id: number;
    name: string;
    stars: number;
    difficulty: string;
}

export default class MapEntry extends React.Component<{ mappu: MapProp }, MapProp> {
    render() {
        return (
            <div>
                <p>ID: {this.props.mappu.id}</p>
                <p>Name: {this.props.mappu.name}</p>
                <p>Stars: {this.props.mappu.stars}</p>
                <p>Difficulty: {this.props.mappu.difficulty}</p>
            </div>
        );
    }
}
