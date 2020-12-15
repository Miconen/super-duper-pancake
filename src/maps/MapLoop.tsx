import React from 'react';
import MapEntry from './MapEntry';

export default class MapLoop extends React.Component {
    mappu = {
        id: 69,
        name: 'Harumachi Clover',
        stars: 6.3,
        difficulty: 'HARD',
    };
    render() {
        return <MapEntry mappu={this.mappu} />;
    }
}
