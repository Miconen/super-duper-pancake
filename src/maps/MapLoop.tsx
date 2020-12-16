import React from 'react';
import './MapEntry.css';
import MapEntry from './MapEntry';
// import Difficulties from '../utils/difficulties';
import MapProp from './MapPropInterface'

export default class MapLoop extends React.Component {
    state = {
        maps: [],
        loading: true,
        error: false
    }

    render() {
        // return <MapEntry mappu={this.mappus[0]} />;
        const { maps, loading, error } = this.state;

        return (
            <div className='MapContainer'>
                {loading && <div>Loading...</div>}
                {!loading && !error &&
                    maps.map(function (map: MapProp) {
                        return (<MapEntry className="MapEntry" key={map.id} map={map} />)
                    })
                }
                {error && <div>Error message</div>}
            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(response => this.setState({
                maps: response,
                loading: false
            }))
            .catch(error => this.setState({
                loading: false,
                error: true
            }));
    }
}
