import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.341846,
      lng: 25.148254
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '25vw', width: '40vw', marginLeft: '3.5vw',marginBottom: '6vw', boxShadow:'15px 15px 8px 8px #333'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBFNL2uG6onvwRZASUxyx0gnA3aPQFqRs4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.00}
            lng={25.00}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;