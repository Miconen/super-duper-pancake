import React from 'react';
// import Difficulties from '../utils/difficulties';
import MapProp from './MapPropInterface'

interface Props {
    className: string;
    map: MapProp;
}

const MapEntry: React.FC<Props> = ({ className, map }) => {
    return (
        <div key={map.id} className={`${className} status-${map.completed}`}>
            <div className='EntryTopBar'></div>
            <div className='EntryContent'>
                <h3>{map.title}</h3>
                <p>userId: {map.userId}</p>
                <p>ID: {map.id}</p>
            </div>
        </div>
    );
};

export default MapEntry;