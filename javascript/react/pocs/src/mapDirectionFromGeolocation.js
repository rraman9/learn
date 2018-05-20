import React from 'react';
import {geolocated} from 'react-geolocated';
import MapWithDirectionSimple from "./mapwithdirectionsimple";

class MapDirectionFromGeolocation extends React.Component {
    render() {
        const destLat = 28.5119541;
        const destLng = 77.0619302;
        return !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div>Geolocation is not enabled</div>
                : this.props.coords
                    ?
                    <MapWithDirectionSimple height="100px" width="100px" sourceLat={this.props.coords.latitude} sourceLng={this.props.coords.longitude} destLat={destLat} destLng={destLng} />
                    : <div>Getting the location data&hellip; </div>;
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(MapDirectionFromGeolocation);
