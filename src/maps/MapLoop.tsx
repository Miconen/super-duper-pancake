import React, { useState, useEffect } from 'react';
import './MapEntry.css';
import MapEntry from './MapEntry';
// import Difficulties from '../utils/difficulties';
import MapProp from './MapPropInterface'

const MapLoop: React.FC = () => {

    const [state, setState] = useState({
        maps: [],
        loading: true,
        error: false
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(response => setState({
                maps: response,
                loading: false,
                error: false
            }))
            .then(response => console.log('request'))
            .catch(error => setState({
                maps: [],
                loading: false,
                error: true
            }));
    }, [])


    return (
        <div className='MapContainer' >
            { state.loading && <div>Loading...</div>}
            {!state.loading && !state.error &&
                state.maps.map(function (map: MapProp) {
                    return (<MapEntry className="MapEntry" map={map} />)
                })
            }
            { state.error && <div>Error</div> && console.log(state.error)};
        </div >
    );
};

export default MapLoop;