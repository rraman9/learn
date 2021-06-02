import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import WorkshopList from "./WorkshopsList";

function App(props) {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <WorkshopList/>
            </div>
        </div>
    );
}

export default App;