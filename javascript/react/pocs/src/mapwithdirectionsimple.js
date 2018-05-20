import React, {Component} from 'react';
import { GoogleMap } from 'react-google-maps';

export default class MapWithDirectionSimple extends Component {
    render() {
        const google=window.google;
        const style = {
            width: `${this.props.width}`,
            height: `${this.props.height}`
        }

        const {compose, withProps, lifecycle} = require("recompose");
        const {
            withScriptjs,
            withGoogleMap,
            GoogleMap,
            DirectionsRenderer,
        } = require("react-google-maps");

        const MapWithADirectionsRenderer = compose(
            withProps({
                googleMapURL: "http://maps.googleapis.com/maps/api/js?key=AIzaSyDjkpKsYyXNeF44G8q58lpxC6W0BIYR1zg&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={style}/>,
                containerElement: <div style={style}/>,
                mapElement: <div style={style}/>,
            }),
            withScriptjs,
            withGoogleMap,
            lifecycle({
                componentDidMount() {
                    const DirectionsService = new google.maps.DirectionsService();
                    console.log('source: lat=' + this.props.sourceLat + ", long=" + this.props.sourceLng);
                    console.log('destination: lat=' + this.props.destLat + ", long=" + this.props.destLng);

                    DirectionsService.route({
                        origin: new google.maps.LatLng(this.props.sourceLat, this.props.sourceLng),
                        destination: new google.maps.LatLng(this.props.destLat, this.props.destLng),
                        travelMode: google.maps.TravelMode.DRIVING,
                    }, (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            this.setState({
                                directions: result,
                            });
                        } else {
                            console.error(`error fetching directions ${result}`);
                        }
                    });
                }
            })
        )(props =>
            <GoogleMap
                defaultZoom={7}
                defaultCenter={new google.maps.LatLng(this.props.sourceLat, this.props.sourceLng)}
            >
                {props.directions && <DirectionsRenderer directions={props.directions}/>}
            </GoogleMap>
        );
        return (
            <MapWithADirectionsRenderer sourceLat={this.props.sourceLat} sourceLng={this.props.sourceLng} destLat={this.props.destLat} destLng={this.props.destLng}/>
        );
    }
}