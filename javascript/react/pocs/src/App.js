import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from "./simplemap";
import MapWithDirectionSimple from "./mapwithdirectionsimple";
import MapDirectionFromGeolocation from './mapDirectionFromGeolocation';
import MapForAddress from "./mapforaddress";
class App extends Component {
  render() {
      const lat=28.709858;
      const lng=77.185561;
      const sourceLat = 28.709858;
      const sourceLng = 77.185561;
      const destLat = 28.5119541;
      const destLng = 77.0619302;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>`
          <MapForAddress address="1657 Riverside Drive Redding, CA 96001" height="100px" width="100px"/>
          <MapDirectionFromGeolocation height="100px" width="100px" destLat={destLat} destLng={destLng} />
          {/*<MapWithDirectionSimple height="100px" width="100px" sourceLat={sourceLat} sourceLng={sourceLng} destLat={destLat} destLng={destLng} />*/}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
      </div>
    );
  }
}
export default App;
