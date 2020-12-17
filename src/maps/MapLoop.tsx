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
        let apiKey: string = '';
        let map: number = 0;
        // TODO CORS Error
        fetch(`https://osu.ppy.sh/p/api/get_beatmaps?k=${apiKey}&b=${map}`, {
            method: 'GET'
        })
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
        <div className="flex flex-wrap">
            {state.loading && <div>Loading...</div>}
            {!state.loading && !state.error &&
                state.maps.map(function (map: MapProp) {
                    return (<MapEntry className="MapEntry" key={map.id} map={map} />)
                })
            }
            {state.error && <div>Error</div> && console.log(state.error)};
        </div >
    );
};

export default MapLoop;