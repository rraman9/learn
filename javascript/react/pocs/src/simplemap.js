import React, {Component} from 'react';
export default class SimpleMap extends Component {
    componentDidMount() {
        const google=window.google;
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            fullScreenControl: true,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        });
    }
    render() {
        const style = {
            width: `${this.props.width}`,
            height: `${this.props.height}`
        }
        return (
            <div ref="map" style={style}></div>
        );
    }
}
