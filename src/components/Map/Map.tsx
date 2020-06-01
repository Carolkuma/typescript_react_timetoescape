

import React from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { mapStyles} from "./mapStyles";
import { Overlay } from "./Overlay";

const API_KEY = `AIzaSyASTbnA75kaRsY97WdnW4n0z308BFN8K_o`;

const options = {
  disableDefaultUI: true,
  draggable: false,
  mapTypeControl: false,
  styles: mapStyles,
};

interface props  {
  coordinates: {
    lat: number,
    lng: number,
  },
  zoom: number,
  link?: string,
  label?: string,
};

export const GMap = ({ zoom, link, label, coordinates }: props) => {
  return (
    <Overlay>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={API_KEY}
        language={"en"}
        region={"EN"}
        version={"weekly"}
        libraries={[]}
        loadingElement={<div>Loading...</div>}
      >
        <GoogleMap
          id="marker-example"
          mapContainerStyle={{
            height: "25rem",
            width: "100%",
          }}
          zoom={zoom}
          options={options}
          center={coordinates}
        >
          <Marker
            options={{
              title: "",
              position: {
                lat: coordinates.lat,
                lng: coordinates.lng
              } 
            }}
          />
        </GoogleMap>
      </LoadScript>
    </Overlay>
  );
};

GMap.defaultProps = {
  zoom: 16,
};




