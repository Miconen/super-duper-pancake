import React from 'react';
import MapLoop from './maps/MapLoop';
import './App.css';

const App: React.FC = () => {
    return (
        <>
            <header className="text-white bg-indigo-600 h-96 flex">
                <div className="m-auto">
                    <h1 className="text-4xl header-title">Super Duper Pancake</h1>
                </div>
            </header>
            <div id="header-wave"></div>
            <main>
                <MapLoop />
            </main >
        </>
    );
};

export default App;
