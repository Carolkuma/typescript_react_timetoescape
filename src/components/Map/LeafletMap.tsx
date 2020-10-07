import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { withPrefix } from 'gatsby';
import handleViewport from "react-in-viewport";
import L from "leaflet";
import { isMobile } from 'react-device-detect';
import { Helmet } from 'react-helmet';

const style = {
    height: "15.3rem",
    width: "100%",
    zIndex: 1,
}



interface props {
  enterCount: number,
  inViewport: boolean,
  coordinates: {
    lat: number,
    lng: number,
  },
  zoom: number,
  forwardedRef: any,
}

const icon = new L.Icon({
  iconUrl: withPrefix("/marker-icon.svg"),
});

export class LeafletMap extends Component<props>  {
    
    render() {
    const { inViewport, coordinates, zoom, enterCount } = this.props;
  
    const {lat, lng} = coordinates;

    const position: L.LatLngExpression = [lat, lng];
    const insertMap  = enterCount > 0 && !isMobile 

    return <div style={style} className="hidden md:block">{ insertMap ? (
      <>
          <Map
            center={position}
            zoom={zoom}
            zoomControl={false}
            dragging={false}
            boxZoom={false}
            style={{height: "100%"}}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon} />
          </Map>
       
        <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossOrigin=""
          />
        </Helmet>
      </>
    ) : null}
     </div>
    }
}

export default handleViewport(LeafletMap);