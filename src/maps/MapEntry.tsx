import React from 'react';
// import Difficulties from '../utils/difficulties';
import MapProp from './MapPropInterface';
import MapEntryStar from './MapEntryStar';

interface Props {
    className: string;
    map: MapProp;
}

const MapEntry: React.FC<Props> = ({ className, map }) => {
    return (
        <section className={`${className} status-${map.completed} flex justify-center items-center px-2 w-1/5 my-10`} key={map.id}>
            <div className="wrapper max-w-xs rounded-lg shadow-lg overflow-hidden">
                <div>
                    <img src="https://assets.ppy.sh/beatmaps/1/covers/cover.jpg" alt="Beatmap Thumbnail" />
                </div>
                <div className="p-3 space-y-3">
                    <h3 className="text-gray-700 font-semibold text-base">
                        {map.title}
                    </h3>
                    <p className="text-xs text-gray-900 leading-sm">
                        Stories That Last Through The Sleepless Nights
                        </p>
                    <p>
                        <span className="flex">
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                            <MapEntryStar />
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MapEntry;